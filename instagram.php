<?php
// ── Fork & Fire – Instagram Feed Endpoint ──
// Fetches latest 6 posts from Instagram Graph API, caches for 1 hour.
// Config is written by instagram-setup.php (not in git).

header('Content-Type: application/json');
header('Cache-Control: public, max-age=3600');

define('CONFIG_FILE', __DIR__ . '/instagram-config.json');
define('CACHE_FILE',  __DIR__ . '/instagram-cache.json');
define('CACHE_TTL',   3600); // 1 hour

function sendError(string $msg): void {
    http_response_code(503);
    echo json_encode(['ok' => false, 'error' => $msg]);
    exit;
}

// ── 1. Load config ──────────────────────────────────────────────
if (!file_exists(CONFIG_FILE)) {
    sendError('Not configured — run instagram-setup.php first');
}

$config = json_decode(file_get_contents(CONFIG_FILE), true);
if (empty($config['access_token']) || empty($config['ig_user_id'])) {
    sendError('Incomplete config');
}

// ── 2. Serve from cache if fresh ────────────────────────────────
if (file_exists(CACHE_FILE) && (time() - filemtime(CACHE_FILE)) < CACHE_TTL) {
    echo file_get_contents(CACHE_FILE);
    exit;
}

// ── 3. Fetch from Instagram Graph API ───────────────────────────
$apiUrl = 'https://graph.facebook.com/v19.0/' . $config['ig_user_id'] . '/media?' . http_build_query([
    'fields'       => 'id,media_url,permalink,thumbnail_url,media_type,timestamp',
    'limit'        => 9,
    'access_token' => $config['access_token'],
]);

$ch = curl_init($apiUrl);
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 15,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_USERAGENT      => 'ForknFire/1.0',
]);
$raw = curl_exec($ch);
curl_close($ch);

// If API fails, return stale cache rather than an error
if ($raw === false) {
    if (file_exists(CACHE_FILE)) {
        echo file_get_contents(CACHE_FILE);
        exit;
    }
    sendError('Could not reach Instagram API');
}

$data = json_decode($raw, true);

if (!isset($data['data'])) {
    // API returned an error — serve stale cache or error
    if (file_exists(CACHE_FILE)) {
        echo file_get_contents(CACHE_FILE);
        exit;
    }
    sendError('Instagram API error: ' . ($data['error']['message'] ?? 'unknown'));
}

// ── 4. Normalise posts ─────────────────────────────────────────
$posts = [];
foreach ($data['data'] as $item) {
    // Videos use thumbnail_url for the still image
    $imageUrl = ($item['media_type'] === 'VIDEO')
        ? ($item['thumbnail_url'] ?? null)
        : ($item['media_url']     ?? null);

    if (!$imageUrl) continue;

    $posts[] = [
        'id'        => $item['id'],
        'image_url' => $imageUrl,
        'permalink' => $item['permalink'],
        'type'      => $item['media_type'],
        'timestamp' => $item['timestamp'],
    ];

    if (count($posts) >= 6) break;
}

// ── 5. Cache & return ──────────────────────────────────────────
$output = json_encode(['ok' => true, 'posts' => $posts]);
file_put_contents(CACHE_FILE, $output);
echo $output;

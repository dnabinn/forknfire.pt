<?php
// Fork & Fire — Email Subscriber Handler
// Saves name+email, sends notification to restaurant, returns JSON

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$name  = trim($_POST['name']  ?? '');
$email = trim($_POST['email'] ?? '');

// Basic validation
if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Name and email are required']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid email address']);
    exit;
}

$name  = htmlspecialchars($name,  ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');

// ── Save to local CSV log ────────────────────────────────────────
$logFile = __DIR__ . '/subscribers.csv';
$isNew   = !file_exists($logFile);
$row     = implode(',', [
    date('Y-m-d H:i:s'),
    '"' . str_replace('"', '""', $name)  . '"',
    '"' . str_replace('"', '""', $email) . '"',
]) . "\n";

if ($isNew) {
    file_put_contents($logFile, "date,name,email\n" . $row, FILE_APPEND | LOCK_EX);
} else {
    file_put_contents($logFile, $row, FILE_APPEND | LOCK_EX);
}

// ── Send notification email to restaurant ───────────────────────
$to      = 'forknfirelisbon@gmail.com';
$subject = 'New Subscriber – Fork & Fire Rebrand';
$body    = "New subscriber signed up for the 20% off early access:\n\n"
         . "Name:  {$name}\n"
         . "Email: {$email}\n"
         . "Time:  " . date('Y-m-d H:i:s') . "\n";

$headers = "From: noreply@forknfire.pt\r\n"
         . "Reply-To: {$email}\r\n"
         . "X-Mailer: PHP/" . PHP_VERSION;

@mail($to, $subject, $body, $headers);

// ── Send confirmation email to subscriber ───────────────────────
$confirmSubject = 'Fork & Fire — You\'re on the list!';
$confirmBody    = "Hi {$name},\n\n"
    . "Thank you for signing up! We're excited to share what's coming.\n\n"
    . "When Fork & Fire reopens with our new Indian & Grill All You Can Eat experience,\n"
    . "you'll receive 20% off your first reservation — exclusively for early subscribers.\n\n"
    . "We'll be in touch soon.\n\n"
    . "— The Fork & Fire Team\n"
    . "https://forknfire.pt";

$confirmHeaders = "From: Fork & Fire <noreply@forknfire.pt>\r\n"
                . "X-Mailer: PHP/" . PHP_VERSION;

@mail($email, $confirmSubject, $confirmBody, $confirmHeaders);

echo json_encode(['ok' => true]);

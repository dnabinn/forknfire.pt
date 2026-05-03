<?php
// Curry King & Grill — Discount Waitlist Handler
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
$subject = 'New Waitlist Subscriber – Curry King & Grill';
$body    = "Someone just joined the discount waitlist:\n\n"
         . "Name:  {$name}\n"
         . "Email: {$email}\n"
         . "Time:  " . date('Y-m-d H:i:s') . "\n\n"
         . "They'll receive exclusive discount emails when you're ready to send them.";

$headers = "From: noreply@forknfire.pt\r\n"
         . "Reply-To: {$email}\r\n"
         . "X-Mailer: PHP/" . PHP_VERSION;

@mail($to, $subject, $body, $headers);

// ── Send confirmation email to subscriber ───────────────────────
$confirmSubject = 'Curry King & Grill — You\'re on the list!';
$confirmBody    = "Hi {$name},\n\n"
    . "You're officially on the Curry King & Grill discount waitlist!\n\n"
    . "We're putting the finishing touches on something exciting —\n"
    . "Indian & Grill All You Can Eat, right here in Lisbon.\n\n"
    . "As a waitlist member, you'll be among the first to hear from us\n"
    . "and receive exclusive discount offers — straight to your inbox.\n\n"
    . "Stay tuned. Good things are coming.\n\n"
    . "— The Curry King & Grill Team\n"
    . "https://forknfire.pt";

$confirmHeaders = "From: Curry King & Grill <noreply@forknfire.pt>\r\n"
                . "X-Mailer: PHP/" . PHP_VERSION;

@mail($email, $confirmSubject, $confirmBody, $confirmHeaders);

echo json_encode(['ok' => true]);

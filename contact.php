<?php
// ── Fork & Fire – Reservation Email Handler ──
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// Sanitise inputs
$name   = htmlspecialchars(strip_tags(trim($_POST['name']   ?? '')));
$phone  = htmlspecialchars(strip_tags(trim($_POST['phone']  ?? '')));
$date   = htmlspecialchars(strip_tags(trim($_POST['date']   ?? '')));
$time   = htmlspecialchars(strip_tags(trim($_POST['time']   ?? '')));
$guests = htmlspecialchars(strip_tags(trim($_POST['guests'] ?? '')));
$notes  = htmlspecialchars(strip_tags(trim($_POST['notes']  ?? '')));

if (!$name || !$phone || !$date) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Please fill in all required fields.']);
    exit;
}

$to      = 'forknfirelisbon@gmail.com';
$subject = "New Reservation – Fork & Fire | {$name} – {$date}";

$body  = "New table reservation request from forknfire.pt\n";
$body .= "═══════════════════════════════════\n\n";
$body .= "Name:    {$name}\n";
$body .= "Phone:   {$phone}\n";
$body .= "Date:    {$date}\n";
$body .= "Time:    {$time}\n";
$body .= "Guests:  {$guests}\n";
if ($notes) {
    $body .= "\nNotes:\n{$notes}\n";
}
$body .= "\n═══════════════════════════════════\n";
$body .= "Submitted via forknfire.pt\n";

$headers  = "From: Fork & Fire Website <no-reply@forknfire.pt>\r\n";
$headers .= "Reply-To: {$name} <no-reply@forknfire.pt>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$sent = mail($to, $subject, $body, $headers);

echo json_encode(['ok' => $sent]);
?>

<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email-address']);
    $phone = htmlspecialchars($_POST['phone-number']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);


    // Send email
    $to = "bharathkumar@grocat.in ,balaji.l@grocat.in ,bharathi.k@grocat.in"; // Replace with your email address
    $subject = "New Appointment From PPC";
    $message = "Name: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\nMessage: $message";
    $headers = "From: bharathkumar@grocat.in"; // Updated the From header

    if (mail($to, $subject, $message, $headers)) {
        echo "<script>window.location.href='thank-you.php'</script>";
    } else {
        echo "Failed to send appointment request.";
    }
} else {
    echo "Invalid request method.";
}
?>

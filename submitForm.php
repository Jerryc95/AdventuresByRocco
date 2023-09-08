<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 // $recipient = "cox.jerry52@gmail.com"; // Replace with your roccos's email address
  $recipient = "";
  $name = $_POST["name"];
  $subject = "New Adventure inquery:" $_POST["name"]; // figure out how to interpolate string
  $email = $_POST["email"];
  $phone = $_POST["phone"]; 
  $message = $_POST["message"];
  
  $headers = "From: $email";
  
  $fullMessage = "Name: $name\nEmail: $email\nPhone: $phone\n\n$message";
  
  if (mail($recipient, $subject, $fullMessage, $headers)) {
    echo "Email sent successfully!";
  } else {
    echo "Error sending email.";
  }
}
?>
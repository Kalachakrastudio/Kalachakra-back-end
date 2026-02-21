<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = "kalachakrastudio@email.com";
    $subject = "New Message from Website";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    mail($to, $subject, $body);

    echo "Message Sent Successfully!";
}
?>

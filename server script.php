<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
 $date = $_POST['date'];
 $time = $_POST['time'];

 // perform server-side validation and processing here

 // if validation passes, redirect the user to a confirmation page
 header('Location: confirmation.php');
 exit();
}
?>
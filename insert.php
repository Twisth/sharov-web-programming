<?php

    $data = $_POST['full_name'];
    $full_name = $_POST['full_name'];
    echo $full_name;

    $connection = new mysqli("localhost", "root", "", "sharov_db");
    if($_SERVER['REQUEST_METHOD'] == 'POST') {
        echo $data();
    }

    $str = $_POST();

    $full_name =  $_POST['full_name'];
    $phone_number = $_POST['phone_number'];
    $email = $_POST['email'];
    $text_of_question = $_POST['text_of_question'];

    $sql = "INSERT INTO question (full_name, phone_number, email, text_of_question) VALUES
    ($full_name', '$phone_number', '$email', '$text_of_question')";

    mysqli_close($connection);
?>
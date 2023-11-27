<?php
    $connection = new mysqli("localhost", "root", "", "sharov_db");

if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $fullName = $_POST['full_name'];
    $phoneNumber = $_POST['phone_number'];
    $email = $_POST['email'];
    $textOfQuestion = $_POST['text_of_question'];

    $sql = "INSERT INTO question (full_name, phone_number, email, text_of_question) VALUES
    ('$fullName', '$phoneNumber', '$email', '$textOfQuestion');";

    $result = $connection->query($sql);
}

if($_SERVER['REQUEST_METHOD'] == 'GET') {
    $query = "select * from question";
    $query2 = "select * from route_list";

    $result = $connection->query($query);
    $result2 = $connection->query($query2);


    foreach ($result as $data) {
        echo "<tr><td>" . $data['name_of_route'] . "</td>";
        echo "<td>" . $data['photo'] . "</td>";
    }

    foreach ($result2 as $data) {
        echo "<tr><td>" . $data['full_name'] . "</td>";
        echo "<td>" . $data['email'] . "</td>";
        echo "<td>" . $data['phone_number'] . "</td></tr>";
        echo "<td>" . $data['text_of_question'] . "</td></tr>";
    }
}

    mysqli_close($connection);
?>
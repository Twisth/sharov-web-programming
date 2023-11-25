<?php
    $connection = new mysqli("localhost", "root", "", "sharov_db");
    $query = "select * from route_list;";

    $result = $connection->query($query);

    $connection->close();
?>
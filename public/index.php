<?php
$servername = "localhost";
$username = "traincloud_root";
$password = "sirokuma1234";
$dbname = "traincloud_root";

// MySql connect code
$conn = new mysqli($servername, $username, $password, $dbname);

//接続確認
if ($conn->connect_error) {
    die("Connect Error!" . $conn->connect_error);
}
echo "database connected!"
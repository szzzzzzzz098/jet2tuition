<?php
$servername = "localhost";
$username = "root";
$password = ""; // 默认空
$database = "jet2tuition";

// 连接
$conn = mysqli_connect($servername, $username, $password, $database);

// 检查连接
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>



<?php
include 'data.php'; // 使用你的数据库连接文件

$studentId = $_POST['studentId'];
$password = $_POST['password'];

$query = "SELECT * FROM users WHERE student_id = '$studentId'";
$result = mysqli_query($conn, $query);

if ($row = mysqli_fetch_assoc($result)) {
    if (password_verify($password, $row['password'])) {
        // 登录成功，跳转到首页
        header("Location: index.html");
        exit();
    } else {
        echo "Incorrect password.";
    }
} else {
    echo "Account not found.";
}

mysqli_close($conn);
?>

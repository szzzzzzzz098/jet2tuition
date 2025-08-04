<?php
// Database connection
$servername = "localhost";
$username = "root";
$db_password = "";
$dbname = "jet2tuition";

// Get form data
$studentId = $_POST['studentId'] ?? '';
$password = $_POST['password'] ?? '';

// Validate input
if (empty($studentId) || empty($password)) {
    die("Username and password are required");
}

// Hash the password
$hashedPassword = password_hash($password, PASSWORD_DEFAULT);

// Create connection
$conn = new mysqli($servername, $username, $db_password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO students (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $studentId, $hashedPassword);

// Execute the statement
if ($stmt->execute()) {
    // Redirect back to login page
    header("Location: login.html");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

// Close connections
$stmt->close();
$conn->close();
?>

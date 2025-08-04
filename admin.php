<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Registered Students</title>
    <link rel="stylesheet" href="admin.css">
</head>
<body>
    <h2>Registered Students</h2>
    <table>
        <tr>
            <th>No.</th>
            <th>Username</th>
            <th>Password (Hashed)</th>
        </tr>
        <?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "jet2tuition";

        $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT username, password FROM students";
        $result = $conn->query($sql);
        $serialNumber = 1;

        if ($result && $result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $serialNumber++ . "</td>";
                echo "<td>" . htmlspecialchars($row["username"]) . "</td>";
                echo "<td>" . htmlspecialchars($row["password"]) . "</td>";
                echo "</tr>";
            }
        } else {
            echo "<tr><td colspan='3'>No student accounts found</td></tr>";
        }

        $conn->close();
        ?>
    </table>
</body>
</html>

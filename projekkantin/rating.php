<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $rating = $_POST['rate'];
        $review = $_POST['review'];

        // Database connection
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "kantin";

        $conn = new mysqli($servername, $username, $password, $dbname);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "INSERT INTO reviews (rating, review) VALUES (?, ?)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("is", $rating, $review);

        if ($stmt->execute()) {
            echo "<p>Ulasan Anda telah berhasil disimpan!</p>";
        } else {
            echo "<p>Terjadi kesalahan: " . $stmt->error . "</p>";
        }

        $stmt->close();
        $conn->close();
    }
    ?>
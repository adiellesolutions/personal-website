<?php
// Enable CORS (important if frontend is separate)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Database connection
$host = "localhost";
$user = "root"; // change if needed
$pass = "";     // change if needed
$db   = "personalwebsite"; // your database name

$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
    die(json_encode(["success" => false, "message" => "Database connection failed: " . $conn->connect_error]));
}

// Get raw POST data
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["success" => false, "message" => "Invalid input"]);
    exit;
}

// Sanitize inputs
$rating      = intval($data['rating']);
$description = $conn->real_escape_string($data['description']);
$name        = $conn->real_escape_string($data['name']);
$email       = $conn->real_escape_string($data['email']);
$location    = $conn->real_escape_string($data['location']);

// Insert into DB
$sql = "INSERT INTO reviews (rating, description, name, email, location, created_at)
        VALUES ('$rating', '$description', '$name', '$email', '$location', NOW())";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["success" => true, "message" => "Your review has been saved 💖"]);
} else {
    echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
}

$conn->close();
?>

<?php
require_once('../includes/connect.php');

$query = "INSERT INTO updates (image_path, title, body, link, date) VALUES (?, ?, ?, ?, ?)";

$file_name = $_FILES['image_path']['name'];

$target_path = '../images/updates/'.($file_name);
$imageFileType = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
move_uploaded_file($_FILES['image_path']['tmp_name'], $target_path);

$stmt = $connection->prepare($query);
$stmt->bindParam(1, $file_name, PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['title'], PDO::PARAM_STR);
$stmt->bindParam(3, $_POST['body'], PDO::PARAM_STR);
$stmt->bindParam(4, $_POST['link'], PDO::PARAM_STR);
$stmt->bindParam(5, $_POST['date'], PDO::PARAM_STR);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
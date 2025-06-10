<?php
require_once('../includes/connect.php');

$query = "INSERT INTO guests (name, social_media, image_path) VALUES (?, ?, ?)";

$file_name = $_FILES['image_path']['name'];

$target_path = '../images/guests_va/'.($file_name);
$imageFileType = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
move_uploaded_file($_FILES['image_path']['tmp_name'], $target_path);

$stmt = $connection->prepare($query);
$stmt->bindParam(1, $_POST['name'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['social_media'], PDO::PARAM_STR);
$stmt->bindParam(3, $file_name, PDO::PARAM_STR);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
<?php
require_once('../includes/connect.php');

$query = "INSERT INTO featured_doodles (name, image_path) VALUES (?, ?)";

$file_name = $_FILES['image']['name'];

$target_path = '../images/featured_doodles/'.($file_name);
$imageFileType = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
move_uploaded_file($_FILES['image']['tmp_name'], $target_path);

$stmt = $connection->prepare($query);
$stmt->bindParam(1, $_POST['name'], PDO::PARAM_STR);
$stmt->bindParam(2, $file_name, PDO::PARAM_STR);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
<?php
require_once('../includes/connect.php');

$query = "INSERT INTO comics (title, number, image) VALUES (?, ?, ?)";

$file_name = $_FILES['image']['name'];

$target_path = '../images/comics/'.($file_name);
$imageFileType = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
move_uploaded_file($_FILES['image']['tmp_name'], $target_path);

$stmt = $connection->prepare($query);
$stmt->bindParam(1, $_POST['title'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['number'], PDO::PARAM_INT);
$stmt->bindParam(3, $file_name, PDO::PARAM_STR);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
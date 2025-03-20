<?php
require_once('../includes/connect.php');

$query = "INSERT INTO previous_guests (name, image_path) VALUES (?, ?)";

$stmt = $connection->prepare($query);
$stmt->bindParam(1, $_POST['name'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['image_path'], PDO::PARAM_STR);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
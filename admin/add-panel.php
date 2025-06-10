<?php
require_once('../includes/connect.php');

$query = "INSERT INTO panels (title, host, day, time, year, description) VALUES (?, ?, ?, ?, ?)";

$stmt = $connection->prepare($query);
$stmt->bindParam(1, $_POST['title'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['host'], PDO::PARAM_STR);
$stmt->bindParam(3, $_POST['day'], PDO::PARAM_INT);
$stmt->bindParam(4, $_POST['time'], PDO::PARAM_STR);
$stmt->bindParam(5, $_POST['year'], PDO::PARAM_INT);
$stmt->bindParam(6, $_POST['description'], PDO::PARAM_STR);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
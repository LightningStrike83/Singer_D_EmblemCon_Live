<?php 
require_once('../includes/connect.php');
$query = 'DELETE FROM updates WHERE updates.id = :updateId';
$stmt = $connection->prepare($query);
$updateId = $_GET['id'];
$stmt->bindParam(':updateId', $updateId, PDO::PARAM_INT);
$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');
?>
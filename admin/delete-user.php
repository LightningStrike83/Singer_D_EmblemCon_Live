<?php 
require_once('../includes/connect.php');
$query = 'DELETE FROM users WHERE users.id = :userId';
$stmt = $connection->prepare($query);
$userId = $_GET['id'];
$stmt->bindParam(':userId', $userId, PDO::PARAM_INT);
$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');
?>
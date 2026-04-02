<?php 
require_once('../includes/connect.php');
$query = 'DELETE FROM panels WHERE panels.id = :panelId';
$stmt = $connection->prepare($query);
$panelId = $_GET['id'];
$stmt->bindParam(':panelId', $panelId, PDO::PARAM_INT);
$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');
?>
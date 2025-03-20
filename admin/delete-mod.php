<?php 
require_once('../includes/connect.php');
$query = 'DELETE FROM mods WHERE mods.id = :modId';
$stmt = $connection->prepare($query);
$modId = $_GET['id'];
$stmt->bindParam(':modId', $modId, PDO::PARAM_INT);
$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');
?>
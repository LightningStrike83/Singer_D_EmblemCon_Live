<?php 
require_once('../includes/connect.php');
$query = 'DELETE FROM continents WHERE continents.id = :continentId';
$stmt = $connection->prepare($query);
$continentId = $_GET['id'];
$stmt->bindParam(':continentId', $continentId, PDO::PARAM_INT);
$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');
?>
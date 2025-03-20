<?php 
require_once('../includes/connect.php');
$query = 'DELETE FROM artists WHERE artists.id = :artistId';
$stmt = $connection->prepare($query);
$artistId = $_GET['id'];
$stmt->bindParam(':artistId', $artistId, PDO::PARAM_INT);
$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');
?>
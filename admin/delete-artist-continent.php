<?php 
require_once('../includes/connect.php');
$query = 'DELETE FROM artist_continents WHERE artist_continents.id = :artconId';
$stmt = $connection->prepare($query);
$artconId = $_GET['id'];
$stmt->bindParam(':artconId', $artconId, PDO::PARAM_INT);
$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');
?>
<?php 
require_once('../includes/connect.php');
$query = 'DELETE FROM featured_doodles WHERE featured_doodles.id = :doodleId';
$stmt = $connection->prepare($query);
$doodleId = $_GET['id'];
$stmt->bindParam(':doodleId', $doodleId, PDO::PARAM_INT);
$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');
?>
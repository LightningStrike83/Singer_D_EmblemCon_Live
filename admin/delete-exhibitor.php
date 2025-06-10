<?php 
require_once('../includes/connect.php');
$query = 'DELETE FROM exhibitors WHERE exhibitors.id = :exhibitorId';
$stmt = $connection->prepare($query);
$exhibitorId = $_GET['id'];
$stmt->bindParam(':exhibitorId', $exhibitorId, PDO::PARAM_INT);
$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');
?>
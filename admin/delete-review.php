<?php 
require_once('../includes/connect.php');
$query = 'DELETE FROM reviews WHERE reviews.id = :reviewId';
$stmt = $connection->prepare($query);
$reviewId = $_GET['id'];
$stmt->bindParam(':reviewId', $reviewId, PDO::PARAM_INT);
$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');
?>
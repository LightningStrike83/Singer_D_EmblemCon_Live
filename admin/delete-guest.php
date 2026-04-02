<?php 
require_once('../includes/connect.php');
$query = 'DELETE FROM guests WHERE guests.id = :guestId';
$stmt = $connection->prepare($query);
$guestId = $_GET['id'];
$stmt->bindParam(':guestId', $guestId, PDO::PARAM_INT);
$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');
?>
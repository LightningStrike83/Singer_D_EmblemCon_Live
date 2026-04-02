<?php 
require_once('../includes/connect.php');
$query = 'DELETE FROM previous_guests WHERE previous_guests.id = :prevguestId';
$stmt = $connection->prepare($query);
$prevguestId = $_GET['id'];
$stmt->bindParam(':prevguestId', $prevguestId, PDO::PARAM_INT);
$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');
?>
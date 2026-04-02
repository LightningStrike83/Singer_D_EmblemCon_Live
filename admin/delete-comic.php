<?php 
require_once('../includes/connect.php');
$query = 'DELETE FROM comics WHERE comics.id = :comicId';
$stmt = $connection->prepare($query);
$comicId = $_GET['id'];
$stmt->bindParam(':comicId', $comicId, PDO::PARAM_INT);
$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');
?>
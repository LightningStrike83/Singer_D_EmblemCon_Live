<?php 
require_once('../includes/connect.php');
$query = 'DELETE FROM commissions WHERE commissions.id = :commissionId';
$stmt = $connection->prepare($query);
$commissionId = $_GET['id'];
$stmt->bindParam(':commissionId', $commissionId, PDO::PARAM_INT);
$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');
?>
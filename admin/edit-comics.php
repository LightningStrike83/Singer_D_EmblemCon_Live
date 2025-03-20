<?php
require_once('../includes/connect.php');

$query = "UPDATE comics SET title = ?, number = ?, image = ? WHERE id = ?";

$stmt = $connection->prepare($query);

$stmt->bindParam(1, $_POST['title'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['number'], PDO::PARAM_INT);
$stmt->bindParam(3, $_POST['image'], PDO::PARAM_STR);
$stmt->bindParam(4, $_POST['pk'], PDO::PARAM_INT);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
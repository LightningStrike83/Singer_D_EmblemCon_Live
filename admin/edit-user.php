<?php
require_once('../includes/connect.php');

$query = "UPDATE users SET username = ?, password = ? WHERE id = ?";

$stmt = $connection->prepare($query);

$stmt->bindParam(1, $_POST['username'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['password'], PDO::PARAM_STR);
$stmt->bindParam(3, $_POST['pk'], PDO::PARAM_INT);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
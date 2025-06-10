<?php
require_once('../includes/connect.php');

$query = "UPDATE featured_doodles SET name = ?, image_path = ? WHERE id = ?";

$stmt = $connection->prepare($query);

$stmt->bindParam(1, $_POST['name'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['image_path'], PDO::PARAM_STR);
$stmt->bindParam(3, $_POST['pk'], PDO::PARAM_INT);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
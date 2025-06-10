<?php
require_once('../includes/connect.php');

$query = "INSERT INTO featured_reviews (name, review) VALUES (?, ?)";

$stmt = $connection->prepare($query);
$stmt->bindParam(1, $_POST['name'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['review'], PDO::PARAM_STR);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
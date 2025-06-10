<?php
require_once('../includes/connect.php');

$query = "UPDATE featured_reviews SET name = ?, review = ? WHERE id = ?";

$stmt = $connection->prepare($query);

$stmt->bindParam(1, $_POST['name'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['review'], PDO::PARAM_STR);
$stmt->bindParam(3, $_POST['pk'], PDO::PARAM_INT);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
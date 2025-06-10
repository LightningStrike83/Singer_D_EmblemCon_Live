<?php
require_once('../includes/connect.php');

$query = "UPDATE continents SET continent = ? WHERE id = ?";

$stmt = $connection->prepare($query);

$stmt->bindParam(1, $_POST['continent'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['pk'], PDO::PARAM_INT);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
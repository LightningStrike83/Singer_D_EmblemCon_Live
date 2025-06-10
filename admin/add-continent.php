<?php
require_once('../includes/connect.php');

$query = "INSERT INTO continents (continent) VALUES (?)";

$stmt = $connection->prepare($query);
$stmt->bindParam(1, $_POST['continent'], PDO::PARAM_STR);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
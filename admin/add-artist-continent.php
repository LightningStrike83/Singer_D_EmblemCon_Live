<?php
require_once('../includes/connect.php');

$query = "INSERT INTO artist_continents (artist, continent) VALUES (?, ?)";

$stmt = $connection->prepare($query);
$stmt->bindParam(1, $_POST['artist'], PDO::PARAM_INT);
$stmt->bindParam(2, $_POST['continent'], PDO::PARAM_INT);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
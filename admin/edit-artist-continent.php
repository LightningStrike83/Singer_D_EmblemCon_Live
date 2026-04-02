<?php
require_once('../includes/connect.php');

$query = "UPDATE artist_continents SET artist = ?, continent = ? WHERE id = ?";

$stmt = $connection->prepare($query);

$stmt->bindParam(1, $_POST['artist'], PDO::PARAM_INT);
$stmt->bindParam(2, $_POST['continent'], PDO::PARAM_INT);
$stmt->bindParam(3, $_POST['pk'], PDO::PARAM_INT);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
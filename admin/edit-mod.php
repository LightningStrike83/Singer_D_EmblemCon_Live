<?php
require_once('../includes/connect.php');

$query = "UPDATE mods SET name = ?, handle = ?, pic = ?, position = ?, mod_date = ?, bio = ?, pronouns = ?, character_stan = ? WHERE id = ?";

$stmt = $connection->prepare($query);

$stmt->bindParam(1, $_POST['name'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['handle'], PDO::PARAM_STR);
$stmt->bindParam(3, $_POST['pic'], PDO::PARAM_STR);
$stmt->bindParam(4, $_POST['position'], PDO::PARAM_STR);
$stmt->bindParam(5, $_POST['mod_date'], PDO::PARAM_STR);
$stmt->bindParam(6, $_POST['bio'], PDO::PARAM_STR);
$stmt->bindParam(7, $_POST['pronouns'], PDO::PARAM_STR);
$stmt->bindParam(8, $_POST['character_stan'], PDO::PARAM_STR);
$stmt->bindParam(9, $_POST['pk'], PDO::PARAM_INT);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
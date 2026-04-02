<?php
require_once('../includes/connect.php');

$query = "INSERT INTO mods (name, handle, pic, position, mod_date, bio, pronouns, character_stan) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

$file_name = $_FILES['pic']['name'];

$target_path = '../images/mods/'.($file_name);
$imageFileType = strtolower(pathinfo($file_name, PATHINFO_EXTENSION));
move_uploaded_file($_FILES['pic']['tmp_name'], $target_path);

$stmt = $connection->prepare($query);
$stmt->bindParam(1, $_POST['name'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['handle'], PDO::PARAM_STR);
$stmt->bindParam(3, $file_name, PDO::PARAM_STR);
$stmt->bindParam(4, $_POST['position'], PDO::PARAM_STR);
$stmt->bindParam(5, $_POST['mod_date'], PDO::PARAM_STR);
$stmt->bindParam(6, $_POST['bio'], PDO::PARAM_STR);
$stmt->bindParam(7, $_POST['pronouns'], PDO::PARAM_STR);
$stmt->bindParam(8, $_POST['character_stan'], PDO::PARAM_STR);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
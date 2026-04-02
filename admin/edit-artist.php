<?php
require_once('../includes/connect.php');

$query = "UPDATE artists SET name = ?, link = ?, aa_table = ? WHERE id = ?";

$stmt = $connection->prepare($query);

$stmt->bindParam(1, $_POST['name'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['link'], PDO::PARAM_STR);
$stmt->bindParam(3, $_POST['aa_table'], PDO::PARAM_STR);
$stmt->bindParam(4, $_POST['pk'], PDO::PARAM_INT);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
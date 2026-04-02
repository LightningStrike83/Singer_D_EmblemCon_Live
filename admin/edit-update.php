<?php
require_once('../includes/connect.php');

$query = "UPDATE updates SET image_path = ?, title = ?, body = ?, link = ?, date = ? WHERE id = ?";

$stmt = $connection->prepare($query);

$stmt->bindParam(1, $_POST['image_path'], PDO::PARAM_STR);
$stmt->bindParam(2, $_POST['title'], PDO::PARAM_STR);
$stmt->bindParam(3, $_POST['body'], PDO::PARAM_STR);
$stmt->bindParam(4, $_POST['link'], PDO::PARAM_STR);
$stmt->bindParam(5, $_POST['date'], PDO::PARAM_STR);
$stmt->bindParam(6, $_POST['pk'], PDO::PARAM_INT);

$stmt->execute();
$stmt = null;
header('Location: ../admin/admin-list.php');

?>
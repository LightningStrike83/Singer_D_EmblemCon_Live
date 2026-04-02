<?php
    require_once('../includes/connect.php');

    $query = "INSERT INTO artist_continents (artist, continent) VALUES (?, ?)";
    $stmt = $connection->prepare($query);

    $artist = $_POST['artist'];

    foreach ($_POST['continent'] as $continent) {
        $stmt->bindParam(1, $artist, PDO::PARAM_INT);
        $stmt->bindParam(2, $continent, PDO::PARAM_INT);
        $stmt->execute();
    }

    $stmt = null;
    header('Location: ../admin/admin-list.php');
?>
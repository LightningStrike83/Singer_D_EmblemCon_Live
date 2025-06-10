<?php

header("Content-Type: application/json; charset=UTF-8");
require_once('../includes/connect.php');

$name = trim($_POST['name'] ?? '');
$review = trim($_POST['review'] ?? '');
$consent = trim($_POST['consent'] ?? '');

$errors = [];

if (empty($name)) {
    $errors['name'] = 'Name has to be filled in, please.';
}

if (empty($review)) {
    $errors['review'] = 'Review has to be filled in, please.';
}

if (!empty($errors)) {
    echo json_encode(["errors" => $errors]);
    exit;
}

try {
    $query = "INSERT INTO reviews (name, review, consent) VALUES (:name, :review, :consent)";
    $stmt = $connection->prepare($query);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':review', $review);
    $stmt->bindParam(':consent', $consent);

    if ($stmt->execute()) {
        $to = 'contactemblemcon@gmail.com';
        $sub = 'New Review Received';

        $emailBody = "EmblemCon, you've received a new review! \n\n";
        $emailBody .= "Name: $name\n";
        $emailBody .= "Review: $review\n";
        $emailBody .= "Consent: $consent\n\n";

        if (mail($to, $sub, $emailBody)) {
            echo json_encode(["message" => "Thank you for your review!"]);
        } else {
            echo json_encode(["errors" => ["mail" => "Failed to send email. Please try again later."]]);
        }
    } else {
        echo json_encode(["errors" => ["database" => "Failed to save the message. Please try again later."]]);
    }
} catch (Exception $e) {
    echo json_encode(["errors" => ["exception" => "An error occurred: " . $e->getMessage()]]);
}

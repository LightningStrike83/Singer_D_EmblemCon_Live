<?php

header("Content-Type: application/json; charset=UTF-8");
require_once('../includes/connect.php');

$name = trim($_POST['name'] ?? '');
$imagename = trim($_POST['image'] ?? '');  // The base64-encoded image data from JavaScript
$doodleconsent = trim($_POST['doodle_consent'] ?? '');
$nameconsent = trim($_POST['name_consent'] ?? '');

$errors = [];

if (empty($name)) {
    $errors['name'] = 'Name has to be filled in, please.';
}

if (empty($imagename)) {
    $errors['image'] = 'Image is required.';
}

if (!empty($errors)) {
    echo json_encode(["errors" => $errors]);
    exit;
}

try {
    // Decode the base64 image
    $image_parts = explode(";base64,", $imagename);
    $image_type = explode("image/", $image_parts[0])[1];  // Get the image type (png, jpeg, etc.)
    $image_data = base64_decode($image_parts[1]);  // Decode the image data
    
    // Set a unique file name
    $file_name = 'doodle_' . time() . '.' . $image_type;
    $target_path = '../images/doodles/' . $file_name;

    // Save the decoded image to the folder
    file_put_contents($target_path, $image_data);

    // Insert into the database
    $query = "INSERT INTO doodles (name, image_name, doodle_consent, name_consent) VALUES (:name, :imagename, :doodleConsent, :nameConsent)";
    $stmt = $connection->prepare($query);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':imagename', $file_name);
    $stmt->bindParam(':doodleconsent', $doodleconsent);
    $stmt->bindParam(':nameconsent', $nameconsent);

    if ($stmt->execute()) {
        $to = 'contactemblemcon@gmail.com';
        $sub = 'New Doodle Received';

        $emailBody = "EmblemCon, you've received a new doodle! \n\n";
        $emailBody .= "The image is from: $name\n";
        $emailBody .= "Please check out the file: $file_name\n";

        if (mail($to, $sub, $emailBody)) {
            echo json_encode(["message" => "Thank you for your doodle!"]);
        } else {
            echo json_encode(["errors" => ["mail" => "Failed to send email. Please try again later."]]);
        }
    } else {
        echo json_encode(["errors" => ["database" => "Failed to save the message. Please try again later."]]);
    }
} catch (Exception $e) {
    echo json_encode(["errors" => ["exception" => "An error occurred: " . $e->getMessage()]]);
}
?>

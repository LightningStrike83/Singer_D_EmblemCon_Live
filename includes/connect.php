<?php

$dsn = "mysql:host=localhost;dbname=bwzxof27_emblemcon;charset=utf8mb4";
try {
$connection = new PDO($dsn, 'bwzxof27_public', 'h4zQM0okYhrh');
} catch (Exception $e) {
  error_log($e->getMessage());
  exit('unable to connect');
}

?>
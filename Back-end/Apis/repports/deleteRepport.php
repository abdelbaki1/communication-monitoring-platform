<?php
header("Access-Control-Allow-Origin: *");
require '../connect.php';
$con=connection::connect();
$id=file_get_contents("php://input");
$data=json_decode($id);

$p="DELETE FROM  repports WHERE id_repport='".$data."'";


$results=$con->query($p);

echo json_encode($data);



?>
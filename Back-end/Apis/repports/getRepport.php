<?php
header("Access-Control-Allow-Origin: *");
$id=file_get_contents("php://input");
$data=json_decode($id);

$p="SELECT * FROM  repports WHERE id_repport='".$data."'";
require '../connect.php';
$con=connection::connect();
 $results=$con->query($p);
 $r=$results->fetch(PDO::FETCH_ASSOC);
echo json_encode($r);
?>
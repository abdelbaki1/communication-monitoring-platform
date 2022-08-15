<?php 
header("Access-Control-Allow-Origin: *");
require '../connect.php';
$con=connection::connect();
$data=file_get_contents("php://input");
    $data1=json_decode($data);
    $q="INSERT INTO `workers`(`id_worker`, `first_name`, `last_name`, `place`, `id_manager`, `email`, `tele`, `password`) 
    VALUES ('" .$data1->id.  "','". $data1->first ."','". $data1->last."','".$data1->place ."','".$data1->id_manager."','".$data1->email."','".$data1->tele."','".$data1->password."')";

    $pre=$con->query($q);
    if($pre)
    {
        echo $data;
    }
    else
        http_response_code(400);
?>
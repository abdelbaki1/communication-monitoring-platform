<?php
require '../connect.php'; 
header("Access-Control-Allow-Origin:*");
$id=file_get_contents("php://input");
$con=connection::connect();
if($con){
    $subprojects_query="SELECT * FROM subprojects WHERE id_worker=".$id;
  
  $subproject=($con->query($subprojects_query));
  $results=$subproject->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($results);



}
else
    http_response_code(500);





?>
<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

require '../connect.php';
$data=json_decode(file_get_contents("php://input"));
//test for login 
$con=connection::connect();
if($con){
    //while loop to generate a inique id

    $q="SELECT id_worker FROM workers ";
    $pre=$con->query($q);
    $names=$pre->fetchAll(PDO::FETCH_COLUMN);
    //echo json_encode($names);
    if(in_array($data->user,$names))
    {
        $q="SELECT password from workers WHERE id_worker=".$data->user ;
        $pre=$con->query($q);
        $password=$pre->fetchAll(PDO::FETCH_COLUMN)[0];
        if($data->password==$password){
            //http_response_code(200);  //ok
            session_start();
            $_SESSION["user"]=$data->user;
            $_SESSION["occupation"]="worker";
            echo json_encode(session_id() );
            
        }
        else
              echo http_response_code(401);
    }
    else
       echo http_response_code(404);
}
else
      http_response_code(500);

?>
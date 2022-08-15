<?php
require '../connect.php'; 
header("Access-Control-Allow-Origin:*");
$id=json_decode( file_get_contents("php://input"));
session_id($id);
session_start();
$con=connection::connect();
if($con){
    $subprojects_query="SELECT * FROM subprojects WHERE id_worker=".$_SESSION["user"];
    // $num_report="SELECT COUNT(*) FROM projects WHERE id_worker=".$id;
    $cur_pro_query="SELECT COUNT(id_project) FROM subprojects WHERE id_worker=".$_SESSION["user"] ;
    // $cur_subpro="SELECT COUNT(*) FROM subprojects WHERE id_worker=".$id."and deadline>time()";
    // $cur_pro="SELECT COUNT(*) FROM projects WHERE id_worker=".$id."and deadline<time()" ;
    $avg_rep=" SELECT MOY(count(id_repport)) GROUP BY id_sub_project"; ///avg repporting
     

    
  $q="SELECT * FROM repports WHERE id_worker=".$_SESSION["user"]." ORDER BY written LIMIT 3";
  $repports=$con->query($q);
  $q=["repports"=>$repports->fetchAll(PDO::FETCH_ASSOC)];

  $subproject=($con->query($subprojects_query));
  $subproject=["subproject"=>$subproject->fetchAll(PDO::FETCH_ASSOC)];


$cur_pro=($con->query($cur_pro_query));
$cur_pro=["num_project"=>$cur_pro->fetchAll(PDO::FETCH_ASSOC)];


// // $avg_rep=($con->query($avg_repquery));
// // $avg_rep=["avg_rep"=>$avg_rep->fetchAll(PDO::FETCH_ASSOC)];

$results=array_merge($q,$cur_pro,$subproject);
 echo json_encode($results);



}
else
    http_response_code(500);





?>
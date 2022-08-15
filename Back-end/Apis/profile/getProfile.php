<?php

header("Access-Control-Allow-Origin: *");
require '../connect.php'; 
$id=json_decode(file_get_contents("php://input"));
session_id($id);
session_start();
$con=connection::connect();
if($con){
    
    $d=date("Y-m-d");
    $total_rep="SELECT `id_repport`, `title`, `typ`, `written`, `id_manager`, `id_sub_projects`, `id_worker`, `id_project` FROM repports WHERE id_worker='".$_SESSION['user']."' ORDER BY written Desc";  ////total repport in thbe whole carrrers
    $cur_pro="SELECT COUNT(DISTINCT(id_project)) FROM subprojects WHERE id_worker='".$_SESSION["user"]."'"; //and deadline>'".$d."'";///number of project included
    $cur_subpro="SELECT COUNT(*) FROM subprojects WHERE id_worker=".$_SESSION['user']." and deadline>'".$d."'";
    $avg_rep=" SELECT written,COUNT(*) FROM repports where id_worker='".$_SESSION['user']."' GROUP BY written"; ///avg repporting
    $profile_query="SELECT * FROM workers WHERE id_worker='".$_SESSION['user']."'";
    $profile=$con->query($profile_query);
    // echo json_encode($total_rep);
    // echo json_encode($cur_pro);
    // echo json_encode($cur_subpro);
    // echo json_encode($avg_rep);
    // echo json_encode($q);
    $tr=$con->query($total_rep);
    $cp=$con->query($cur_pro);
    $csp=$con->query($cur_subpro);
    $ar=$con->query($avg_rep);


    $total_rep=["total_rep"=>$tr->fetchAll(PDO::FETCH_ASSOC)];
   
    $detaill=["avg_rep"=>$ar->fetchAll(PDO::FETCH_ASSOC),
    "cur_subpro"=>$csp->fetch(PDO::FETCH_COLUMN),
    "cur_pro"=>$cp->fetch(PDO::FETCH_COLUMN)];
    $pro=["profile"=>$profile->fetch(PDO::FETCH_ASSOC)];

    $results=array_merge($pro,$detaill, $total_rep);
    

    echo json_encode($results);




}
else
    http_response_code(500);





?>
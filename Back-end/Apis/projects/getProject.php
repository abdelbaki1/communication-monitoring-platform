<?php
header("Access-Control-Allow-Origin: *");
require '../connect.php';
$con=connection::connect();
$id=file_get_contents("php://input");
$data=json_decode($id);
$date=date("y-m-d");
//$num_worker=$con->query($num_worker_query);
//$num_subproject=$con->query($num_subproject_query)
//$num_worker=$con->query()
//$num_worker_query="SELECT COUNT(id_worker) FROM projects WHERE id_project=".$data; //number of worker in the project
//$num_subproject_query="SELECT COUNT(id_sub_project) FROM subprojects WHERE id_project=".$data; //number of subproject in the project


$detail_query="SELECT * FROM  projects WHERE id_project='".$data."'";  /// get the usual data about the project
$writ_rep_query="SELECT COUNT(id_repport) FROM repports WHERE id_project='".$data."'"; //number of repport in the project
//$left_query="SELECT deadline  FROM projects WHERE id_project='".$data."'";// time lefted
$subproject_query="SELECT * FROM subprojects WHERE id_project='" .$data. "' AND deadline <'" .$date ."'"; //subproject in the project
//$avg_rep=$writ_rep/$long;
$detail=$con->query($detail_query);
$detail=["detail"=>$detail->fetch(pdo::FETCH_ASSOC)];
$writ_rep=($con->query($writ_rep_query));
$writ_rep=["write"=>$writ_rep->fetch(PDO::FETCH_ASSOC)];

//$left=($con->query($left_query));
//$left=["detail"=> $left->fetchAll(PDO::FETCH_ASSOC)];

$subproject=($con->query($subproject_query));
$subproject=["subproject"=>$subproject->fetchAll(PDO::FETCH_ASSOC)];
$results=array_merge($detail,$writ_rep,$subproject);
echo json_encode($results);


?>
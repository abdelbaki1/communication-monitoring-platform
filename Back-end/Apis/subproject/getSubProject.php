<?php
header("Access-Control-Allow-Origin: *");
$id=file_get_contents("php://input");
$data=json_decode($id);

$detail="SELECT * FROM  projects WHERE id_project=".$data;  /// get the usual data about the project
$writ_rep="SELECT COUNT (id_repport) FROM subprojects WHERE id_sub_project= "; //number of repport in the subproject
$left="SELECT time()-deadline  FROM projects WHERE id_project= ";// time lefted
$long=time()-"SELECT DEADLINE FROM PROJECTS WHERE id_project= ";
$avg_rep=$writ_rep/$long;
require '../connect.php';
$con=connection::connect();
$results=$con->query($p);
$r=$results->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($r);



?>
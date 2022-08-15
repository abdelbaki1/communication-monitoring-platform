<?php 
header("Access-Control-Allow-Origin: *");
require '../connect.php';
$con=connection::connect();
$data=file_get_contents("php://input");

    $data1=json_decode($data,true);  

    $projectid="SELECT id_project FROM subprojects where id_sub_project='".$data1['id_sub_project']."'";

    
    $project=$con->query($projectid);
    $data1['id_project' ]=$project->fetch(PDO::FETCH_COLUMN);


    $managerid="SELECT id_manager FROM WORKERS where
    id_worker='".$data1['id_worker']."'";
 
 $manager=$con->query($managerid);
 $data1['id_manager']=$manager->fetch(PDO::FETCH_COLUMN);
    // echo json_encode($data1);
$q="INSERT INTO repports (`id_repport`, `title`, `typ`, `des`,`written`, `id_manager`, `id_sub_projects`,`id_worker`,`id_project`) VALUES ('"
 .$data1['id_repport']."','".$data1['title']."','".$data1['typ']."','".$data1['des']."','".$data1['written']."','".$data1['id_manager']. "','".$data1['id_sub_project']."','".$data1['id_worker']."','".$data1['id_project']."')";




    $pre=$con->query($q);
     echo json_encode($pre)
    
    


?>
<?php 
header("Access-Control-Allow-Origin: *");
require '../connect.php';
$con=connection::connect();
$con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$data=file_get_contents("php://input");
$data1=json_decode($data,true);  
$subprojects=$data1['subprojects'];
// echo json_encode($subprojects);
echo $data;
try{
 $project_query="INSERT INTO `projects`(`id_project`, `noun`, `activated`, `deadline`, `Descrip`, `id_manager`) VALUES ('".$data1['id_project']."','".$data1['noun']."','".$data1['activated']."','".$data1['deadline']."','".$data1['Descrip']."','".$data1['id_manager']."'".")";
 $pre=$con->query($project_query);

for ($i=0; $i <count($subprojects) ; $i++) { 
   // echo json_encode($subprojects[$i]);
   $subproject_query="INSERT INTO `subprojects`(`id_sub_project`, `noun`, `Descrip`, `activated`,`deadline`, `id_project`, `id_worker`, `id_manager`) VALUES ('".$data1['id_project'].$subprojects[$i]['id']."','".$subprojects[$i]['name']."','".$subprojects[$i]['description']."','".$data1['activated']."','".$data1['deadline']."','".$data1['id_project']."','".$subprojects[$i]['id_worker']."','".$data1['id_manager']."'".")";
   try{
   $con->query($subproject_query);
   }
   catch(Exception $s){echo $s->getMessage();}
}
echo http_response_code(200);

}
catch(Exception $e){echo $e->getMessage();}

    
    


?>
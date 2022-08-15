<?php //parameters  ==> number of colone,name,arr
require('connect.php');
$col=0;
$arr=array();
$con=connection::connect();
$quary="insert into ? values(";
for ($i=0; $i <$col-1 ; $i++) { 
    $quary.="?,";
}
$quary.="?)";
$prepared=$con->prepare($quary);
$prepared->execute($arr)

?>
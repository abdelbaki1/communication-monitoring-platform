<?php 
class connection{
   private static $dbname="baki";
   private static $server="localhost";
   private static $user="root";
   private static $password="";
   private static $database=null;
  
    public static function connect(){
       

        self::$database=new PDO("mysql:host=".self::$server.";dbname=baki",self::$user,self::$password);
           return self::$database;


    }
    //methodes for changin user and password
    




}




?>
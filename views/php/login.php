<?php

$data = json_decode(file_get_contents("php://input"));
$email = mysql_real_escape_string($data->email);
$pass = mysql_real_escape_string($data->password);

mysql_connect("localhost", "root", "root") or die(mysql_error()); 
mysql_select_db("jurgbcmstest") or die(mysql_error()); 
mysql_query("select * from users"); 
Print "Your information has been successfully searched for"; 

?>
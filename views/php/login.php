<?php

$data = json_decode(file_get_contents("php://input"));
$email = mysql_real_escape_string($data->email);
$password = mysql_real_escape_string($data->password);
mysql_connect("localhost", "root", "root") or die(mysql_error()); 
mysql_select_db("mpd") or die(mysql_error()); 
mysql_query("SELECT * FROM `users` WHERE email = '$email'"); 
Print "correct received"; 
$result = 'blabla123';
return $result;
?>
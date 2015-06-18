<?php

$data = json_decode(file_get_contents("php://input"));
$fstname = mysql_real_escape_string($data->firstname);
$lstname = mysql_real_escape_string($data->lastname);
$email = mysql_real_escape_string($data->email);
$password = mysql_real_escape_string($data->password);
mysql_connect("localhost", "root", "root") or die(mysql_error()); 
mysql_select_db("jurgbcmstest") or die(mysql_error()); 
mysql_query("INSERT INTO users (FirstName,LastName,Email,Password) VALUES ('$fstname', '$lstname', '$email', '$password')"); 
Print "Your information has been successfully added to the database."; 

?>
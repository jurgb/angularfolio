<?php
include_once("Db.class.php");
$result = "default value";
$free = "test";
$data = json_decode(file_get_contents("php://input"));
$username = mysql_real_escape_string($data->username);
$pass = mysql_real_escape_string($data->password);

// SELECT `userID` FROM users WHERE `FirstName` = "jurgb" AND `Password` = "test123"

$db = new Db();
$sql = "select * from users where Email = '". $username ."' AND Password = '". $pass ."';";
$result = $db->conn->query($sql);
$row = $result->fetch_assoc();

		if($result->num_rows ==1)
		{
           
			$free = json_encode($row);
		}			
		else
		{
			$free = false;
		}

print $free;
?>



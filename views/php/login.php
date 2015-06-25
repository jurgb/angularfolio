<?php
include_once("Db.class.php");
$result = "default value";
$free = "test";
$data = json_decode(file_get_contents("php://input"));
$username = mysql_real_escape_string($data->username);
$pass = mysql_real_escape_string($data->password);

// SELECT `userID` FROM users WHERE `FirstName` = "jurgb" AND `Password` = "test123"

$db = new Db();
$sql = "select userID from users where FirstName = '". $username ."' AND Password = '". $pass ."';";
$result = $db->conn->query($sql);
	
		if(mysqli_num_rows($result) > 0)
		{
			$free = true;
		}			
		else
		{
			$free = false;
		}

print $free;
?>



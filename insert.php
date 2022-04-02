<!DOCTYPE html>
<html>
<head>
  <title>Results</title>
</head>
<body>
<?php
$user = $_GET["user"];
$pass = $_GET["pass"];

mysql_connect("localhost", "root", "");
mysql_select_db["login"];
mysql_query("insert into test values('$user','$pass') ");
?>
</body>
</html>
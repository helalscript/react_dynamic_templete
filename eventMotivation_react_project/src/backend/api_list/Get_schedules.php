<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

$con=new mysqli('localhost','root','','red_helal');
$data=$con->query('select * from schedule')->fetch_all(MYSQLI_ASSOC);
header('Content-Type: Application/json');
echo json_encode($data);
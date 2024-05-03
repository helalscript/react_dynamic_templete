<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
    $con = new mysqli('localhost', 'root', '', 'red_helal');

    $title=$_POST['title'];
    $url=$_POST['title'];
    $heading=$_POST['heading'];
    $status=$_POST['status'];
    $create_date="2024-02-20 02:45:57";
    

$query = "insert into category_list(`title`, `url`, `heading`, `status`, `create_date`)values('$title','$url','$heading','$status','$create_date')";

   if ($time != '') {
        $con->query($query);
        echo json_encode(['status'=>true]);
    }else{
        echo json_encode(['status'=>false]);
    }

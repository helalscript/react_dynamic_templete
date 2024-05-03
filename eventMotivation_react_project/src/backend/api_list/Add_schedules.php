    <?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Content-Type, X-Requested-With');
    header('Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT');
    $con = new mysqli('localhost', 'root', '', 'red_helal');

    $time=$_POST['time'];
    $mentor_name=$_POST['mentor_name'];
    $mentor_title=$_POST['mentor_title'];
    $slogan=$_POST['slogan'];
    
    $target_dir = "../image/";
    $target_file = $target_dir . basename($_FILES["photo"]["name"]);
    if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
        $photo = $_FILES["photo"]["name"];
    } else {
        $photo='';
    }

$query = "insert into schedule(`time`, `slogan`, `mentor_name`, `mentor_title`, `photo`)values('$time','$slogan','$mentor_name','$mentor_title','$photo')";
 
   if ($time != '') {
        $con->query($query);
        echo json_encode(['status'=>true]);
    }else{
        echo json_encode(['status'=>false]);
    }

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $nome=$_POST['nome'];
    $email=$_POST['email'];
    $data=$_POST['data'];
    $numero=$_POST['numero'];

    echo"nome : " . $nome . " email : " . $email . " data : " . $data . " telefono : " . $numero; 
    
   $conn = mysqli_connect('localhost', 'root', '', 'church');
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}


$sql = "INSERT INTO users (name, email,password,gender)

VALUES ('$nome', '$email', '$numero','$data') LIMIT 1";
  
/*$i = '1';   
foreach($item as $item){
    IF($i <= '2'){
        IF ($stmt = $connection->prepare("INSERT IGNORE INTO `db`.`table`( `item`) VALUES (?)")) {

            /* Bind our params 
            $stmt->bind_param('s' , $item);

            $stmt->execute();

            $stmt->close();
        }
    }
    $i++;
}*/

if ($conn->query($sql) === TRUE) {
  $last_id = $conn->insert_id;
  if($last_id>=42){
    die("failed maximum number is 40 ". $last_id );
    $sql="DELETE FROM users WHERE id= $last_id ";
  }
  else{
  echo "New record created successfully : " . $last_id;
  }
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

//star rate
    


    ?>
</body>
</html>
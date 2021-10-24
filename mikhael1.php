<html lang="en">
<head>
    <meta charset="UTF-16">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?php
    $textarea=$_POST['textarea'];
    echo"$textarea";
    $conn = mysqli_connect('localhost', 'root', '', 'registration');
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}


$sql = "INSERT INTO users (register)

VALUES ('$textarea') ";
 
 if ($conn->query($sql) === TRUE) {
   
    echo "New registerChatBox created successfully : "; 
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  $conn->close();
    ?></h1>
</body>
</html>
 
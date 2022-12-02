<?php
//get data from form
$username = $_POST['username'];
$password = $_POST['password'];

if ($username == "" || $password == "") {
    echo "Please enter username and password";
    exit();
}

//connect to database
$connect = mysqli_connect("localhost", "root", "", "users");

//check connection
if(mysqli_connect_errno())
{
    echo 'Failed to connect';
}

//query the database
$result = mysqli_query($connect, "INSERT INTO users (username, password) VALUES ('$username', '$password')");

//load the chat page
if ($result) {

    setcookie("curr_user", $username, 0, "/");
    header("Location: ../html/chat.html");

} else {
    echo "Error during signup";
}

?>
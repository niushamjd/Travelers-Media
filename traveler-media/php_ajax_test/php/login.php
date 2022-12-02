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
$result = mysqli_query($connect, "SELECT * FROM users WHERE username = '$username' AND password = '$password'");
$row = mysqli_fetch_array($result);

//check if there is a match
if(!is_null($row) && $row['username'] == $username && $row['password'] == $password)
{
    //load the chat page

    setcookie("curr_user", $username, 0, "/");

    header("Location: ../html/chat.html");
}
else
{
    //load the signup page
    //header("Location: ../html/signup.html");

    echo "Error during login";
}
?>

<?php
$txt = $_COOKIE['curr_user'] . ": " . $_POST['message'] . PHP_EOL;
$myfile = fopen("../jsondata/chat.txt", "a") or die("Unable to open chat file!");
fwrite($myfile, $txt);
fclose($myfile);
?>
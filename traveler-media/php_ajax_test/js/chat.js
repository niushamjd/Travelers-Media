function readMessages() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200 && this.responseText != document.getElementById("chat_box").value) {
            document.getElementById("chat_box").value =
                this.responseText;
        }
    };
    xhttp.open("GET", "../jsondata/chat.txt", true);
    xhttp.send();
}

function sendMessage() {
    var xhttp = new XMLHttpRequest();
    //Send the proper header information along with the request
    xhttp.open("POST", "../php/send.php", true);

    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhttp.send("message=" + document.getElementById("message").value);
}

setInterval(readMessages, 500);
<?php
    //Validate the request received is through post
    /*if ($_SERVER["REQUEST_METHOD"] == "POST") {
        echo "Sent by POST";
    } else {
        echo "Sent by GET";
    }*/


    //Validate the form received is the expected
    if (isset($_POST["submit_form1"])) {
        echo $_POST["submit_form1"];
    }
?>

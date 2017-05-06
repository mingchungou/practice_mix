<?php
    /*if ($_SERVER["REQUEST_METHOD"] == "POST") {
        echo "Sent by POST";
    } else {
        echo "Sent by GET";
    }*/

    if (isset($_POST["submit_form1"])) {
        echo $_POST["submit_form1"];
    }
?>

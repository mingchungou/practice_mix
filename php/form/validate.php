<?php
    //Validate the request received is through post
    /*if ($_SERVER["REQUEST_METHOD"] == "POST") {
        echo "Sent by POST";
    } else {
        echo "Sent by GET";
    }*/


    //Validate the form received is the expected
    if (isset($_POST["submit_form1"])) {
        echo "Name: " . $_POST["name"] . "<br />";
        echo "Email: " . $_POST["email"] . "<br />";
        echo "Gender: " . $_POST["gender"] . "<br />";
        echo "Birthday: " . $_POST["birthday"] . "<br />";
        echo "Phone: " . $_POST["phone"] . "<br />";
        echo "Terms: " . ((!empty($_POST["terms"])) ? "acceptTC" : "noAcceptTC") . "<br />";
    }
?>

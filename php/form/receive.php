 <?php
    /******************* Parse post request ********************/
    if (!$_POST) {
        header("location: http://localhost/practice/practice_mix/php/form/index.php");
    }

    $name = $_POST["name"];
    $gender = $_POST["gender"];
    $birthday = $_POST["birthday"];
    $terms = (!empty($_POST["terms"])) ? "acceptTC" : "noAcceptTC";

    echo "Hi " . $name . ", you're " . $gender;



    /******************* Parse get request ********************/
    /*if (!$_GET) {
        header("location: http://localhost/practice/practice_mix/php/form/index.php");
    }

    $name = $_GET["name"] ? $_GET["name"] : "";
    $gender = $_GET["gender"];
    $birthday = $_GET["birthday"];
    $terms = (!empty($_GET["terms"])) ? "acceptTC" : "noAcceptTC";

    echo "Hi " . $name . ", you're " . $gender;*/
 ?>

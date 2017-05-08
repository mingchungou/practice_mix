<?php
    session_start();

    //Check session is not empty
    if ($_SESSION) {
        $name = $_SESSION["name"]; //get value from session
        echo "<h1>Hello $name</h1>";
    } else {
        echo "<p>Session is not started</p>";
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Session</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />

        <link rel="stylesheet" href="../../css/bootstrap.min.css"  />
    </head>
    <body>
        <a href="close.php">Close session</a>

        <script src="../../lib/jquery-3.2.0.min.js"></script>
        <script src="../../lib/tether.min.js"></script>
        <script src="../../lib/bootstrap.min.js"></script>
    </body>
</html>

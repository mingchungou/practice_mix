<?php
    session_start();

    $_SESSION["name"] = "Ming Chung"; //set value within session
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Session</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />

        <link rel="stylesheet" href="../../css/bootstrap.min.css" />
    </head>
    <body>
        <a class="btn btn-success" href="response.php">Start session</a>

        <script src="../../lib/jquery-3.2.0.min.js"></script>
        <script src="../../lib/tether.min.js"></script>
        <script src="../../lib/bootstrap.min.js"></script>
    </body>
</html>

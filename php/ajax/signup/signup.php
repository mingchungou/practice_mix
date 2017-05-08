<?php
    function errorHandler($code, $message) {
        if (function_exists("http_response_code")) {
            http_response_code($code);
        } else {
            switch($code) {
                case 400:
                    header("HTTP/1.1 400 Bad Request");
                    break;
                case 500:
                    header("HTTP/1.1 500 Internal Server Error");
                    break;
            }
        }

        die("Error: " . $message);
    }

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        if (!isset($_POST["params"])) {
            errorHandler(400, "Can't get params parameter");
        }

        $obj = json_decode($_POST["params"]);

        //if (property_exists($obj, "name") && property_exists($obj, "password")) {
        if (isset($obj->name) && isset($obj->password)) {
            try {
                $connection = new PDO("mysql:host=192.168.1.9:3306;dbname=mydb", "mingchung", "admin");
                $statement = $connection->prepare("insert into user (name, password) values (:name, :password)");
                $statement->execute(array(":name" => $obj->name, ":password" => $obj->password));
            } catch (PDOException $e) {
                errorHandler(500, $e->getMessage());
            }

            header("Content-Type: text/html; charset=UTF-8"); //Specify the response will be text
            echo $connection->lastInsertId();
            $connection = null;
        } else {
            errorHandler(400, "Need to have name and password values into params parameter");
        }
    } else {
        errorHandler(400, "Only receive request by POST");
    }
?>

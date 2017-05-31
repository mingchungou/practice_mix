<?php
    //Check if method is get or post
    if ($_SERVER["REQUEST_METHOD"] === "GET") {
        $option = getOption($_SERVER["REQUEST_URI"]); //Get option by url reqeust

        if ($option === "getTodo") {
            $connection = connectDB(); //Connect to db

            //Bringing all todo
            $statement = $connection->prepare("select * from todo");
            $statement->execute();
            $result = $statement->fetchAll();

            header("Content-Type: application/json; charset=UTF-8"); //Specify the response will be json data
            echo json_encode($result);
            $connection = null;
        } else {
            errorHandler(400, "The option gotten is unknown");
        }
    } elseif ($_SERVER["REQUEST_METHOD"] === "POST") {
        $option = getOption($_SERVER["REQUEST_URI"]); //Get option by url reqeust

        if ($option === "login") {
            $params = json_decode(file_get_contents("php://input")); // Get data sent from angularjs post request

            //Check that name and password aren't empty
            if (isset($params->name) && isset($params->password)) {
                $connection = connectDB(); //Connect to db
                $passwordEncoded = hash("sha512", $params->password); //Enconde the password

                //Finding the user with these name and password
                $statement = $connection->prepare("select * from user where name = :name and password = :password limit 1");
                $statement->execute(array(":name" => $params->name, ":password" => $passwordEncoded));
                $result = $statement->fetch();

                if ($result) {
                    header("Content-Type: application/json; charset=UTF-8"); //Specify the response will be json data
                    echo json_encode($result);
                } else {
                    errorHandler(400, "Doesn't find the user");
                }
            } else {
                errorHandler(400, "Need to have username and password to validate the user");
            }
        }
    } else {
        errorHandler(400, "Can't handle this sort of method request");
    }

    //Function for get the option attached at the end of url request
    function getOption($requestUrl) {
        $urls = preg_split("/[\/]+/", $requestUrl);
        $option = array_pop($urls);

        if ($option !== "server.php") {
            return $option;
        } else {
            errorHandler(400, "Can't get the option to handle");
        }
    }

    //Function for handling errors
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

    //Function for connecting to database
    function connectDB() {
        $connection = new PDO("mysql:host=192.168.1.6:3306;dbname=mydb", "mingchung", "admin");

        if (!$connection) {
            errorHandler(500, "Connection to database failed");
        }

        return $connection;
    }
?>

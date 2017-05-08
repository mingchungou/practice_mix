<?php
    //Connect to db
    $connection = new mysqli("192.168.1.9:3306", "mingchung", "admin", "mydb");

    if ($connection->connect_error) {
        if (!function_exists("http_response_code")) {
            header("HTTP/1.1 500 Internal Server Error");
        } else {
            http_response_code(500);
        }

        die("Connection failed: " . $connection->connect_error);
    }

    //Check the request brings option parameter
    $todoID = isset($_REQUEST["option"]) ? $_REQUEST["option"] : "";

    if ($todoID) {
        //Bringing the specific todo
        $result = $connection->query("select * from todo where id = " . $todoID);

        header("Content-Type: text/html; charset=UTF-8"); //Specify the response will be text

        //Check the result of bringing the specific todo is not empty
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();

            //Creating dynamic table
            echo "<table><thead><th>ID</th><th>Activity</th><th>Priority</th><th>fromX</th><th>Created</th><th>Updated</th><th>Status</th></thead>";
            echo "<tbody><tr><th scope='row'>" . $row["id"] . "</th>";
            echo "<td>" . $row["activity"] . "</td>";
            echo "<td>" . $row["priority"] . "</td>";
            echo "<td>" . $row["fromX"] . "</td>";
            echo "<td>" . $row["created"] . "</td>";
            echo "<td>" . $row["updated"] . "</td>";
            echo "<td>" . $row["status"] . "</td>";
            echo "</tr></tbody></table>";
        } else {
            echo "0 results";
        }
    } else {
        if (!function_exists("http_response_code")) {
            header("HTTP/1.1 400 Bad Request");
        } else {
            http_response_code(400);
        }

        die("Error: can't get option parameter");
    }
?>

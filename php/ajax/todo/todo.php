<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Ajax - todo</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />

        <style>
            table {
                border-collapse: collapse;
            }

            table th,
            table td {
                padding: 0.5rem;
                border: 1px solid #000000;
                text-align: center;
            }
        </style>
    </head>
    <body>
        <?php
            //Connect to db
            $connection = mysqli_connect("192.168.1.9:3306", "mingchung", "admin", "mydb");

            if (!$connection) {
                if (!function_exists("http_response_code")) {
                    header("HTTP/1.1 500 Internal Server Error");
                } else {
                    http_response_code(500);
                }

                die("Connection failed: " . mysqli_connect_error());
            }

            //Bringing all todos
            $result = mysqli_query($connection, "select * from todo");

            header("Content-Type: text/html; charset=UTF-8"); //Specify the response will be text
            
            //Checking the result of bringing todos is not empty
            if (mysqli_num_rows($result) > 0) {
                //Creating dynamic table
                echo "<table><caption>Todo 2017</caption>";
                echo "<thead><th>ID</th><th>Activity</th><th>Priority</th><th>fromX</th><th>Created</th><th>Updated</th><th>Status</th></thead>";
                echo "<tbody>";

                while($row = mysqli_fetch_assoc($result)) {
                    echo "<tr>";
                    echo "<th scope='row'>" . $row["id"] . "</th>";
                    echo "<td>" . $row["activity"] . "</td>";
                    echo "<td>" . $row["priority"] . "</td>";
                    echo "<td>" . $row["fromX"] . "</td>";
                    echo "<td>" . $row["created"] . "</td>";
                    echo "<td>" . $row["updated"] . "</td>";
                    echo "<td>" . $row["status"] . "</td>";
                    echo "</tr>";
                }

                echo "</tbody></table>";
            } else {
                echo "0 results";
            }

            mysqli_close($connection);
        ?>
    </body>
</html>

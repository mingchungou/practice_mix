<?php
    /******************* Object oriented ********************/
    /*$connection = new mysqli("192.168.1.9:3306", "mingchung", "admin", "mydb");

    if ($connection->connect_error) {
        die("<br /><br />Connection failed: " . $connection->connect_error);
    }

    echo "Connected successfully by object<br /><br />";*/


    //Make several request at once
    /*$sql = "insert into user (name, password) values ('ou ming', '12345');";
    $sql .= "insert into user (name, password) values ('megan fox', '12345');";

    if ($connection->multi_query($sql)) {
        echo "New user is created successfully";
    } else {
        echo "Error: " . $connection->error;
    }*/


    //Normal query
    /*if ($connection->query("insert into user (name, password) values ('ou ming', '12345')")) {
        echo "New user is created successfully";
    } else {
        echo "Error: " . $connection->error;
    }*/


    //Prepare, in this case only for object
    /*$statement = $connection->prepare("insert into user (name, password) values (?, ?)");
    $statement->bind_param("ss", $name, $password);

    $name = "john salchichon";
    $password = "54321";
    $statement->execute();

    $name = "melissa mora";
    $password = "32145";
    $statement->execute();

    $statement->close();*/


    //How to get data from select query
    /*$result = $connection->query("select * from todo");

    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo $row["id"] . "<br />";
            echo $row["activity"] . "<br />";
            echo $row["priority"] . "<br />";
            echo $row["fromX"] . "<br />";
            echo $row["created"] . "<br />";
            echo $row["updated"] . "<br />";
            echo $row["status"] . "<br />";
        }
    } else {
        echo "0 results";
    }*/


    //Close the connection, it is not necessary
    //$connection->close();


    /******************* Procedural ********************/
    /*$connection = mysqli_connect("192.168.1.9:3306", "mingchung", "admin", "mydb");

    if (!$connection) {
        die("<br /><br />Connection failed: " . mysqli_connect_error());
    }

    echo "Connected successfully by procedural<br /><br />";*/


    //Make several request at once
    /*$sql = "insert into user (name, password) values ('fabio diaz', '12345');";
    $sql .= "insert into user (name, password) values ('maria sanchez', '12345');";

    if (mysqli_multi_query($connection, $sql)) {
        echo "New user is created successfully";
    } else {
        echo "Error: " . mysqli_error($connection);
    }*/


    //Normal query
    /*if (mysqli_query($connection, "insert into user (name, password) values ('juan pablo', '12345')")) {
        echo "New user is created successfully";
    } else {
        echo "Error: " . mysqli_error($connection);
    }*/


    //How to get data from select query
    /*$result = mysqli_query($connection, "select * from todo");

    if (mysqli_num_rows($result) > 0) {
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
    }*/


    //Close the connection, it is not necessary
    //mysqli_close($connection);
?>

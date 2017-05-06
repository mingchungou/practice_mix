<?php
    define("IPAddress", "192.168.1.9");

    try {
        $connection = new PDO("mysql:host=" . IPAddress . ":3306;dbname=mydb", "mingchung", "admin");

        /******************* QUERY ********************/
        /*$result = $connection->query("select * from todo");
        foreach($result as $row) {
            echo $row["id"] . "<br />";
            echo $row["activity"] . "<br />";
            echo $row["priority"] . "<br />";
            echo $row["fromX"] . "<br />";
            echo $row["created"] . "<br />";
            echo $row["updated"] . "<br />";
            echo $row["status"] . "<br />";
        }*/

        /******************* PREPARE ********************/
        /*$id = $_GET["id"];
        $statement = $connection->prepare("select * from todo where id = :id");
        $statement->execute(array(":id" => $id));
        $result = $statement->fetch();
        print_r($result);*/

        //$statement = $connection->prepare("select * from todo");
        //$statement->execute();

        /*$result = $statement->fetchAll();
        foreach($result as $row) {
            echo $row["id"] . "<br />";
            echo $row["activity"] . "<br />";
            echo $row["priority"] . "<br />";
            echo $row["fromX"] . "<br />";
            echo $row["created"] . "<br />";
            echo $row["updated"] . "<br />";
            echo $row["status"] . "<br />";
        }*/

        /*while($row = $statement->fetch()) {
            echo $row["id"] . "<br />";
            echo $row["activity"] . "<br />";
            echo $row["priority"] . "<br />";
            echo $row["fromX"] . "<br />";
            echo $row["created"] . "<br />";
            echo $row["updated"] . "<br />";
            echo $row["status"] . "<br />";
        }*/
    } catch(PDOException $e) {
        echo "Error: " . $e->getMessage() . "<br />";
    }
?>

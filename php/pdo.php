<?php
    define("IPAddress", "192.168.1.9");

    class tableRows extends RecursiveIteratorIterator {
        function __construct($it) { //$it is the array iterator
            parent::__construct($it, self::LEAVES_ONLY);
        }

        //Function that is called when accessing each item of row
        function current() {
            return "<td>" . parent::current() . "</td>";
        }

        //Function that is called before accessing a row
        function beginChildren() {
            echo "<tr>";
        }

        //Function that is called after accessing a row
        function endChildren() {
            echo "</tr>";
        }
    }

    try {
        $connection = new PDO("mysql:host=" . IPAddress . ":3306;dbname=mydb", "mingchung", "admin");

        echo "Connected successfully by PDO<br /><br />";


        /******************* Query ********************/
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


        /******************* Prepare ********************/
        /*$id = $_GET["id"];
        $statement = $connection->prepare("select * from todo where id = :id");
        $statement->execute(array(":id" => $id));
        $result = $statement->fetch();
        print_r($result);*/


        //Using bindParam
        /*$statement = $connection->prepare("insert into user (name, password) values (:name, :password)");
        $statement->bindParam(":name", $name);
        $statement->bindParam(":password", $password);

        $name = "carmen lila";
        $password = "98765";
        $statement->execute();

        $name = "karen arce";
        $password = "54321";
        $statement->execute();*/


        //fetchAll brings all rows into an array
        /*$statement = $connection->prepare("select * from todo");
        $statement->execute();
        $result = $statement->fetchAll();
        foreach($result as $row) {
            echo $row["id"] . "<br />";
            echo $row["activity"] . "<br />";
            echo $row["priority"] . "<br />";
            echo $row["fromX"] . "<br />";
            echo $row["created"] . "<br />";
            echo $row["updated"] . "<br />";
            echo $row["status"] . "<br />";
        }*/


        //fetch just brings a row, so if having several rows will need to execute several times fetch
        /*$statement = $connection->prepare("select * from todo");
        $statement->execute();
        while($row = $statement->fetch()) {
            echo $row["id"] . "<br />";
            echo $row["activity"] . "<br />";
            echo $row["priority"] . "<br />";
            echo $row["fromX"] . "<br />";
            echo $row["created"] . "<br />";
            echo $row["updated"] . "<br />";
            echo $row["status"] . "<br />";
        }*/


        //Create a table dynamically
        /*$statement = $connection->prepare("select * from todo");
        $statement->execute();
        $statement->setFetchMode(PDO::FETCH_ASSOC);

        echo "<table><caption>Todo 2017</caption>";
        echo "<thead><th>ID</th><th>Activity</th><th>Priority</th><th>fromX</th><th>Created</th><th>Updated</th><th>Status</th></thead>";
        echo "<tbody>";

        foreach(new tableRows(new RecursiveArrayIterator($statement->fetchAll())) as $k => $v) { //$k is the key
            echo $v;
        }

        echo "</tbody></table>";*/


        /******************* Exec ********************/
        //Make several request at once
        /*$connection->beginTransaction();
        $connection->exec("delete from user where id = 3");
        $connection->exec("delete from user where id = 4");
        $connection->exec("delete from user where id = 5");
        $connection->exec("delete from user where id = 6");
        $connection->exec("delete from user where id = 7");
        $connection->exec("delete from user where id = 8");
        $connection->commit();*/
    } catch(PDOException $e) {
        echo "Error: " . $e->getMessage() . "<br />";
    }


    //Close the connection, it is not necessary
    //$connection = null;
?>

<?php
    $conection = mysql_connect("192.168.1.4:3306", "mingchung", "admin") or die("Can't connect to db");
    mysql_select_db("mydb", $conection);


    //Fetch brings data as object
    /*$result = mysql_query("select * from todo");
    while($row = mysql_fetch_object($result)) {
        echo $row->id . "<br />";
        echo $row->activity . "<br />";
        echo $row->priority . "<br />";
        echo $row->fromX . "<br />";
        echo $row->created . "<br />";
        echo $row->updated . "<br />";
        echo $row->status . "<br />";
    }*/


    //Fetch brings data as array
    $result = mysql_query("select * from todo");
    while($row = mysql_fetch_array($result)) {
        echo $row["id"] . "<br />";
        echo $row["activity"] . "<br />";
        echo $row["priority"] . "<br />";
        echo $row["fromX"] . "<br />";
        echo $row["created"] . "<br />";
        echo $row["updated"] . "<br />";
        echo $row["status"] . "<br />";
    }


    //mysql_query("insert into todo (activity, priority, fromX, status) values ('Play guitar', 'medium', '2017-04-30 14:30', 1)");


    //mysql_query("delete from todo where id = 7");
?>

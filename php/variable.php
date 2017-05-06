<?php
    $name = "Ming Chung";
    $lastName = 'Ou';
    $number = 25;
    $decimal = 7.7;
    $boolean = true;

    #echo "Hello $name $lastName";
    #echo 'Hello ' . $name . ' ' . $lastName;
    #echo gettype($boolean);

    #echo strlen($name) . "<br />";
    #echo str_word_count($name) . "<br />";
    #echo strrev($name) . "<br />";
    #echo strpos($name, "c"); //return false if it doesn't match any
    #echo str_replace("world", $name, "Hello world!");
    #echo substr($name, 0, 6);
    #echo strtoupper($name);
    #echo strtolower($name);

    /*$name .= " " . $lastName;
    echo $name;*/


    /******************** Constant *****************/
    define('PI', 3.14);
    define("name", 'Ming Chung');

    #echo PI;
    #echo name;


    /******************** Array *****************/
    $week = array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
    $week[7] = 'partyday';
    $teams = ['Saprissa', '_eredia', 'Hello Kitty', 'Cartagada', 'Limón', 'Liberia', 'UCR', 'Belén', 'Pérez Zeledón', 'San Carlos', 'Santos', 'Carmelita'];
    $mixArray = array('Ming', "Chung", array(1, 2, 3), 25, true, 7.7);

    /*echo $week[0] . '<br />';
    echo $week[1] . '<br />';
    echo $week[2] . '<br />';
    echo $week[3] . '<br />';
    echo $week[4] . '<br />';
    echo $week[5] . '<br />';
    echo $week[6] . '<br />';*/

    #echo count($teams); //get length of array

    #sort($teams); //Order the array asc
    #rsort($teams); //Order the array desc

    /*echo "<pre>";
    var_dump($teams); //Show details about something
    echo "</pre>";*/

    #print_r($teams); //It's almost the same as var_dump

    $last = array_pop($week);
    #echo $last;

    #echo join("<br />", $week);

    #echo join(" - ", array_reverse($week));


    /******************** Associative array  *****************/
    $personalInfo = array('phone number' => '12345678', 'age' => 25, 'last name' => 'Ou', 'country' => 'Costa Rica');
    $personalInfo['phone number'] = '87654321';

    /*echo 'Phone number: ' . $personalInfo['phone number'] . '<br />';
    echo 'Age: ' . $personalInfo['age'] . '<br />';
    echo 'Last name: ' . $personalInfo['last name'] . '<br />';
    echo 'Country: ' . $personalInfo['country'];*/

    #asort($personalInfo); //sort associative array asc, according to value
    #arsort($personalInfo);
    #ksort($personalInfo); //sort associative array asc, according to key
    #krsort($personalInfo);

    /*extract($personalInfo); //convert each item of associative array in different variables
    echo ($age);*/


    /******************** Multidimensional array  *****************/
    $friends = [
        ['Ming', ['Saprissa', 'Hala Madrid', [1, 2, 3]]],
        ['Maria', 24],
        ['Jose', 23],
        ['Karol', 38]
    ];

    #echo $friends[0][1][2][0];


    /******************** Scope  *****************/
    $value = 0;
    $x = 5;
    $y = 10;

    function init() { //When wanting to use a variable out of function, needing to set it first as global or pass it as parameter
        global $value;
        $value = 5;
    }

    /*init();
    echo $value;*/

    function myGlobal() { //When wanting to use a variable within a function, needing to set it first as global or return it
        global $globalX;
        $globalX = 5;
    }

    /*myGlobal();
    echo $globalX;*/

    function xSum() { //Is able to access variables out of functions by using $GLOBALS array
        $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
    }

    /*xSum();
    echo $y;*/

    function myTest() { //Seems closure
        static $i = 0;
        echo $i;
        $i++;
    }

    /*myTest();
    myTest();
    myTest();*/

    #print "<h1>PHP is sucks!</h1>"; //print is equal than echo
    #print $x + $y;


    /******************** Functions  *****************/
    function greeting($name) {
        echo "Hello $name";
    }

    #greeting($name);

    function ySum($number1, $number2) {
        return $number1 + $number2;
    }

    #echo ySum(1, 1);

    $specialK = "<b>Hello</b>";

    #echo htmlspecialchars($specialK);
    #echo trim($specialK); //Remove white spaces at beginning and at the end


    /******************** Condition  *****************/
    $left = $personalInfo["age"];
    $right = 18;

    /*if ($left >= $right) {
        echo "Salud borracho";
    }*/

    $left = 17;
    $right = "18";

    /*if ($left > $right xor $name === "Ming Chung") { //Can ONLY fulfill one condition
        echo "Salud borracho";
    }*/

    /*if (count($teams) > 12) {
        echo "Ohh yeahh";
    } elseif (count($teams) < 12) {
        echo "Fucking shit";
    } else {
        echo "Not bad";
    }*/


    /******************** Switch  *****************/
    /*$favColor = "green";

    switch($favColor) {
        case "black":
            echo "Your favorite color is black";
            break;
        case "blue":
            echo "Your favorite color is blue";
            break;
        case "red":
            echo "Your favorite color is red";
            break;
        default:
            echo "Your favorite color is neither black, blue, red";
            break;
    }*/


    /******************** Short condition  *****************/
    #echo (isset($number)) ? "Defined" : "Undefined";


    /******************** For  *****************/
    /*for ($i = 0; $i < 10; $i += 2) {
        echo "<p>Number is $i</p>";
    }*/

    /*for($i = 0; $i < count($teams); $i++) {
        echo "<p>$teams[$i]</p>";
    }*/


    /******************** While  *****************/
    /*$i = 10;
    while($i > 0) {
        echo "<p>Number is $i</p>";
        $i--;
    }*/


    /******************** Do while  *****************/
    /*$i = 10;
    do {
        echo "<p>Number is $i</p>";
        $i--;
    } while($i > 0);*/


    /******************** Break/continue  *****************/
    /*foreach ($teams as $team) {
        if ($team === "_eredia" or $team === "Hello Kitty") {
            continue;
        }

        echo "<p>$team</p>";

        if ($team === "Belén") {
            break;
        }
    }*/


    /******************** Math  *****************/
    $decimal = 3.14141414;

    #echo round($decimal, 3); //Reduce decimal to number set
    #echo rand(1, 10); //get random number
    #echo ceil($decimal); //round up
    #echo M_PI;


    /******************** Die  *****************/
    #die(); //Cut down the code below
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>PHP</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
    </head>
    <body>
        <h1>CR Soccer Teams</h1>
        <ul>
            <?php
                foreach ($personalInfo as $team => $value) {
                    echo "<li>$team: $value</li>";
                }
            ?>
        </ul>
    </body>
</html>

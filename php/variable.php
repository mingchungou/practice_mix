<?php
    /******************** Init *****************/
    $name = "Ming Chung";
    $lastName = 'Ou';
    $number = 25;
    $decimal = 7.7;
    $boolean = true;

    #echo "Hello $name $lastName";
    #echo 'Hello ' . $name . ' ' . $lastName;
    #echo gettype($boolean); //Get type of variable

    #echo strlen($name) . "<br />"; //Get length of string
    #echo str_word_count($name) . "<br />"; //Get amount of words of string
    #echo strrev($name) . "<br />"; //Revert the string
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
    var_dump($teams); //Show details of variables
    echo "</pre>";*/

    #print_r($teams); //It's almost the same as var_dump

    /*$last = array_pop($week); //Remove last element
    echo $last;*/

    /*array_push($mixArray, "Real Madrid", "Barcelona"); //Add new element(s) at the end
    print_r($mixArray);*/

    #echo join("<br />", $week);

    #echo join(" - ", array_reverse($week));

    //Add new array items manually
    $myArray = array();

    /*$myArray[] = 1;
    $myArray[] = 2;
    $myArray[] = 3;
    $myArray[] = 4;
    echo print_r($myArray);*/



    /******************** Associative array *****************/
    $personalInfo = array('phone number' => '12345678', 'age' => 25, 'last name' => 'Ou', 'country' => 'Costa Rica');
    $personalInfo['phone number'] = '87654321';

    /*echo 'Phone number: ' . $personalInfo['phone number'] . '<br />';
    echo 'Age: ' . $personalInfo['age'] . '<br />';
    echo 'Last name: ' . $personalInfo['last name'] . '<br />';
    echo 'Country: ' . $personalInfo['country'];*/

    //Add new item manually
    /*$personalInfo["fvColor"] = "Blue";
    echo print_r($personalInfo);*/

    #asort($personalInfo); //sort associative array asc, according to value
    #arsort($personalInfo);
    #ksort($personalInfo); //sort associative array asc, according to key
    #krsort($personalInfo);

    /*extract($personalInfo); //convert each item of associative array in different variables
    echo ($age);*/

    //Use combine to create an associative array.
    $fname = array("Peter", "Ben", "Joe");
    $age = array(35, 45, 28);

    /*$myArray = array_combine($fname, $age); //First array contains keys and the second contains values
    print_r($myArray);*/



    /******************** Multidimensional array *****************/
    $friends = [
        ['Ming', ['Saprissa', 'Hala Madrid', [1, 2, 3]]],
        ['Maria', 24],
        ['Jose', 23],
        ['Karol', 38]
    ];

    #echo $friends[0][1][2][0];



    /******************** Scope *****************/
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

    function xSum() { //Is able to access to global variables by using $GLOBALS array
        $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
    }

    /*xSum();
    echo $y;*/

    function myTest() { //Seems closure
        static $i = 0;
        $i++;
        echo $i;
    }

    /*myTest();
    myTest();
    myTest();*/

    #print "<h1>PHP is sucks!</h1>"; //print is equal than echo
    #print $x + $y;



    /******************** Functions *****************/
    function greeting($name) {
        echo "Hello $name";
    }

    #greeting($name);

    function ySum($number1, $number2) {
        return $number1 + $number2;
    }

    #echo ySum(1, 1);

    $specialK = "<b>Hello</b>";

    #echo htmlspecialchars($specialK); //Convert special characters to html entities
    #echo trim($specialK); //Remove white spaces at beginning and at the end



    /******************** Condition *****************/
    //If condition
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


    //Switch condition
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


    //Short condition
    #echo (isset($number)) ? "Defined" : "Undefined";



    /******************** Loops *****************/
    //For
    /*for ($i = 0; $i < 10; $i += 2) {
        echo "<p>Number is $i</p>";
    }*/

    /*for($i = 0; $i < count($teams); $i++) {
        echo "<p>$teams[$i]</p>";
    }*/


    //While
    /*$i = 10;
    while($i > 0) {
        echo "<p>Number is $i</p>";
        $i--;
    }*/


    //Do while
    /*$i = 10;
    do {
        echo "<p>Number is $i</p>";
        $i--;
    } while($i > 0);*/



    /******************** Break/continue *****************/
    /*foreach ($teams as $team) {
        if ($team === "_eredia" or $team === "Hello Kitty") {
            continue;
        }

        echo "<p>$team</p>";

        if ($team === "Belén") {
            break;
        }
    }*/



    /******************** Math *****************/
    $decimal = 3.14141414;

    #echo round($decimal, 3); //Reduce decimal to number set
    #echo rand(1, 10); //get random number
    #echo ceil($decimal); //round up
    #echo M_PI;



    /******************** Die *****************/
    #die(); //Cut down the code below



    /******************** Date and Time *****************/
    date_default_timezone_set("America/Costa_Rica"); //Set timezone

    #echo "Date: " . date("Y/m/d") . "<br />";
    #echo "Date: " . date("Y.m.d") . "<br />";
    #echo "Date: " . date("Y-m-d") . "<br />";
    #echo "Day: " . date("d") . "<br />";
    #echo "Month: " . date("m") . "<br />";
    #echo "Year: " . date("Y") . "<br />";

    #echo "Week day: " . date("l") . "<br />"; //Return the day of week by letters
    #echo "Week day: " . date("L") . "<br />"; //Return the day of week by numeric

    #echo "Time: " . date("h:i:sa") . "<br />";
    #echo "Hours: " . date("h") . "<br />";
    #echo "Minutes: " . date("i") . "<br />";
    #echo "Seconds: " . date("sa") . "<br />";

    $ownDate = mktime(11, 14, 54, 8, 12, 2014); //Set my own date
    #echo "Date created: " . date("Y-m-d h:i:sa", $ownDate) . "<br />";



    /******************** Object *****************/
    /*$obj = (object)array("name" => "Ming Chung Ou",
        "age" => 26,
        "nationality" => ["Taiwan", "Costa Rica"]);

    echo $obj->name;
    echo $obj->age;
    echo print_r($obj->nationality);*/


    //Way to instance an object
    /*$x = new stdClass;
    print_r($x);
    $y = (object) null;
    print_r($y);
    $z = (object) "a";
    print_r($z);*/



    /******************** Class *****************/
    /*
    - You can't define any class called stdClass, it is used by system.
    - Learn more: http://php.net/manual/es/language.oop5.php
    */

    //Example 1
    /*class SimpleClass {
        public $var = "default value";

        public function showVar() {
            echo $this->var . "<br />";
        }
    }

    $instance = new SimpleClass();
    $instance->showVar();
    $instance->var = "new value";
    $instance->showVar();
    echo SimpleClass::class; //Get class name*/

    /*
    Clone objects
    - When setting null to an instanced object, then the instanced object and referenced object of
    this object will be null, but this doesn't affect the assigned object through this object.
    */
    /*$assigned = $instance; //assigned object
    $reference =& $instance; //referenced object
    $instance = null;
    var_dump($assigned);
    var_dump($reference);*/


    //Example 2 - About $this
    //$this is not available within static function
    /*class A {
        public function foo() {
            if (isset($this)) {
                echo '$this is defined (' . get_class($this) . ')<br />';
            } else {
                echo '$this is not defined<br />';
            }
        }
    }

    class B {
        public function bar() {
            A::foo();
        }
    }

    $a = new A();
    $a->foo();
    A::foo();
    $b = new B();
    $b->bar();
    B::bar();*/


    //Example 3 - Difference between $this and self
    //$this refers to the current object, while self refers to the current class.
    /*class Classy {
        const ID = "12345";
        static $static = "Static";
        public $public = "Public";
        private $private = "Private";
        protected $protected = "Protected";

        //$this is not available into static function
        public function showMe() {
            echo self::ID . "<br />";
            echo self::$static . "<br />";
            echo $this->public . "<br />";
            echo $this->private . "<br />";
            echo $this->protected . "<br />";
        }
    }

    $me = new Classy();
    $me->showMe();*/


    //Example 4 - Heritage
    /*class SimpleClass {
        public $var = "Simple class";

        public function showVar() {
            echo $this->var . "<br />";
        }
    }

    class ExtendedClass extends SimpleClass {
        public function showVar() {
            echo "Extended class<br />";
            parent::showVar();
        }
    }

    $extended = new ExtendedClass();
    $extended->showVar();
    if (is_subclass_of($extended, "SimpleClass")) {
        echo '$extended is a subclass of SimpleClass<br />';
    } else {
        echo '$extended is not a subclass of SimpleClass<br />';
    }
    echo get_class($extended) . "<br />";
    echo get_parent_class($extended) . "<br />";*/


    //Example 5 - Class instantiation
    /*class Person {
        public $name = "Ming Chung Ou";
        public $age = 26;

        public static function create() {
            return new static;
        }
    }

    class Programmer extends Person {}

    $obj1 = new Person();
    echo '$obj1<br />';
    echo "Name: $obj1->name<br />";
    echo "Age: $obj1->age<br />";

    $obj2 = new $obj1;
    echo '<br />$obj2<br />';
    echo "Name: $obj2->name<br />";
    echo "Age: $obj2->age<br />";
    if ($obj1 !== $obj2) {
        echo '$obj1 is different than $obj2.<br />';
    } else {
        echo '$obj1 and $obj2 are same.<br />';
    }
    if ($obj2 instanceof Person) {
        echo '$obj2 is an object Person.<br />';
    } else {
        echo '$obj2 is not an object Person.<br />';
    }

    $obj3 = Person::create();
    echo '<br />$obj3<br />';
    echo "Name: $obj3->name<br />";
    echo "Age: $obj3->age<br />";
    if ($obj3 instanceof Person) {
        echo '$obj3 is an object Person.<br />';
    } else {
        echo '$obj3 is not an object Person.<br />';
    }

    $obj4 = Programmer::create();
    echo '<br />$obj4<br />';
    echo "Name: $obj4->name<br />";
    echo "Age: $obj4->age<br /><br />";*/


    //Example 6 - Property access vs method calling
    /*class Hero {
        public $power = "Property";

        public function power() {
            return "Function<br />";
        }
    }

    $hero = new Hero();
    echo $hero->power . "<br />";
    echo $hero->power();*/


    //Example 7 - Anonymous function stored in a property
    /*class Hero {
        public $attack1;

        public function __construct() {
            $this->attack1 = function() {
                return "Gomu Gomu no Bazooka<br />";
            };
        }
    }

    $hero = new Hero();
    $attack1 = $hero->attack1;
    echo $attack1();*/


    //Example 8
    /*class Point3D {
        public $x;
        public $y;
        public $z;

        public function __construct($x = 0, $y = 0, $z = 0) {
            $this->x = $x;
            $this->y = $y;
            $this->z = $z;
        }

        public function __toString() {
            return "Point3D (x = $this->x, y = $this->y, z = $this->z)";
        }
    }

    class Line3D {
        public $start;
        public $end;

        public function __construct($pointS = null, $pointEnd = null) {
            $this->start = $pointS ? $pointS : new Point3D();
            $this->end = $pointEnd ? $pointEnd : new Point3D();
        }

        public function getLength() {
            return sqrt(
                pow($this->start->x - $this->end->x, 2) +
                pow($this->start->y - $this->end->y, 2) +
                pow($this->start->z - $this->end->z, 2)
            );
        }

        public function __toString() {
            $length = $this->getLength();
            return "Line3D [start = $this->start, end = $this->end, length = $length]";
        }
    }

    $line = new Line3D();
    echo $line;*/


    //Example 9 - Constructor and destructor
    /*class MyClass {
        function __construct() {
            $paramAmount = func_num_args();

            if ($paramAmount > 0) {
                $params = func_get_args();

                if (method_exists($this, $f = "construct" . $paramAmount)) {
                    call_user_func_array(array($this, $f), $params);
                }
            } else {
                echo "Instance an object " . self::class . "with 0 param";
            }
        }

        function construct1($a1) {
            echo "Instance an object " . self::class . "with 1 param";
        }

        function construct2($a1, $a2) {
            echo "Instance an object " . self::class . "with 2 params";
        }

        function construct3($a1, $a2, $a3) {
            echo "Instance an object " . self::class . "with 3 params";
        }

        function __destruct() {
            echo "Destroy the object " . self::class;
        }
    }

    $myClass = new MyClass(1, 2);*/


    //Example 10 - Abstract class
    /*abstract class AbstractClass {
        abstract protected function getValue();
        abstract protected function prefix($prefix);

        public function customPrint() {
            echo $this->getValue() . "<br />";
        }
    }

    class MyClass extends AbstractClass {
        protected function getValue() {
            return self::class;
        }

        public function prefix($prefix) {
            return "{$prefix}" . self::class;
        }
    }

    $myClass = new MyClass();
    $myClass->customPrint();
    echo $myClass->prefix("LC_");*/


    //Example 11 - Class interface
    /*interface A {
        public function setVariable($name, $value);
    }

    interface B extends A {
        public function getVars();
    }

    class MyClass implements B {
        private $vars = array();

        public function setVariable($name, $value) {
            $this->vars[$name] = $value;
        }

        public function getVars() {
            return $this->vars;
        }
    }

    $myClass = new MyClass();
    $myClass->setVariable("name", "Monkey D. Luffy");
    print_r($myClass->getVars());
    if ($myClass instanceof A && $myClass instanceof B) {
        echo "The object is an instance of interface A and B";
    }*/
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
                foreach ($personalInfo as $item => $value) {
                    echo "<li>$item: $value</li>";
                }
            ?>
        </ul>
    </body>
</html>

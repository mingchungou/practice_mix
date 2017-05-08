<?php
    /*$myObject = (object)[]; //Simple way to create an object

    $myObject->name = "Ming Chung";
    $myObject->age = 25;
    $myObject->todo = ["Correr", "Bailar", "Estudiar"];

    $myJson = json_encode($myObject);
    echo $myJson;*/


    /******************** Creating simple object *****************/
    class customObject {
        function __construct(array $arguments = array()) {
            if (!empty($arguments) && is_array($arguments)) {
                foreach($arguments as $property => $argument) {
                    $this->{$property} = $argument;
                }
            }
        }

        function getName() {
            return $this->firstName . " " . $this->lastName . "<br />";
        }

        function parseJson() {
            return json_encode($this); //Convert object to json string
        }
    }

    $myObject = new customObject(array("firstName" => "Ming Chung", "lastName" => "Ou", "age" => 25));

    #echo $myObject->getName();
    #echo $myObject->parseJson() . "<br />";
    #echo gettype($myObject->parseJson()) . "<br />";
    #echo gettype(json_decode($myObject->parseJson())); //Convert json string to object
?>

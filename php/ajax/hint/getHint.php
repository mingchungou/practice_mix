<?php
    $name[] = "Ana";
    $name[] = "Ariana";
    $name[] = "Alondra";
    $name[] = "Betty";
    $name[] = "Beatriz";
    $name[] = "Bettina";
    $name[] = "Barthelomar";
    $name[] = "Carlos";
    $name[] = "Catalina";
    $name[] = "Daniel";
    $name[] = "Daniela";
    $name[] = "Eric";
    $name[] = "Elizabeth";
    $name[] = "Elliot";
    $name[] = "Fabio";
    $name[] = "Fabiola";
    $name[] = "Fernando";
    $name[] = "Fabricio";
    $name[] = "Geovanni";
    $name[] = "Gabriel";
    $name[] = "Gaby";
    $name[] = "Hanser";
    $name[] = "Ignacio";
    $name[] = "Johanna";
    $name[] = "Jose";
    $name[] = "Jesús";
    $name[] = "Juan";
    $name[] = "Karolina";
    $name[] = "Kenneth";
    $name[] = "Karina";
    $name[] = "Karen";
    $name[] = "Kenneth";
    $name[] = "María";
    $name[] = "Melissa";
    $name[] = "Marta";
    $name[] = "Miryana";
    $name[] = "Monserrat";
    $name[] = "Megan";
    $name[] = "Nansi";
    $name[] = "Otoniel";
    $name[] = "Ofelia";
    $name[] = "Pamela";
    $name[] = "Pablo";
    $name[] = "Pedro";
    $name[] = "Rafael";
    $name[] = "Raquel";
    $name[] = "Randall";
    $name[] = "Sandra";
    $name[] = "Samanta";
    $name[] = "Sofía";
    $name[] = "Tatiana";
    $name[] = "Ulisses";
    $name[] = "Veronica";
    $name[] = "Valeria";
    $name[] = "Ximena";
    $name[] = "Yendrid";
    $name[] = "Yamila";

    $hint = "";


    //Check the request brings value parameter
    if (isset($_GET["value"])) {
        $requestValue = strtolower($_GET["value"]);
        $len = strlen($requestValue);

        foreach ($name as $item) {
            //Try to match the request value with name list item
            if (stristr($requestValue, substr($item, 0, $len))) {
                $hint .= $item;
                break 1;
            }
        }
    }

    header("Content-Type: text/html; charset=UTF-8"); //Specify the response will be text
    echo $hint ? $hint : "No suggestion";
?>

<?php
    /**
     * Function for adding two numbers
     * @param {number} $num_1
     * @param {number} $num_2
     */
    function sum($num_1, $num_2) {
        return $num_1 + $num_2;
    }

    #include "index.view.php"; //throw warning
    #include_once "index.view.php";
    require "index.view.php"; //throw fatal error
    #require_once "index.view.php";
?>

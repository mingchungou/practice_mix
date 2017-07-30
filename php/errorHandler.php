<?php
    /**
     * Set custom error handler.
     * @param {number} $errNumber
     * @param {string} $errMessage
     * @param {string} $errFile
     * @param {number} $errLine
     * @param {array} $errContext
     */
    function customError($errNumber, $errMessage, $errFile, $errLine, $errContext) {
        echo "<b>Error number: </b>[$errNumber]<br />";
        echo "<b>Error message: </b>$errMessage<br />";
        echo "<b>Error file: </b>$errFile<br />";
        echo "<b>Error line: </b>$errLine<br />";
        echo "<b>Error context: </b>"; print_r($errContext);
    }

    set_error_handler("customError");


    //Throw error manually
    trigger_error("Value must be 1 or below", E_USER_ERROR);
?>

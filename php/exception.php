<?php
    /******************** Throw error manually *****************/
    function checkNum($number) {
        if($number > 1) {
            throw new Exception("Value must be 1 or below");
        }
    }

    /*try {
        checkNum(1);

        //If the exception is thrown, this text will not be shown
        echo "If you see this, the number is 1 or below";
    } catch (Exception $e) {
        echo 'Message: ' . $e->getMessage();
    }*/


    /******************** Creating custom exception *****************/
    class customException extends Exception {
        public function errorMessage() {
            return "Error on line " . $this->getLine() . " in " . $this->getFile() . ": <b>" . $this->getMessage() . "</b> is not a valid E-Mail address";
        }
    }

    $email = "ming@";

    /*try {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            throw new customException($email);
        }

        checkNum(3);
    } catch (customException $err) {
        echo $err->errorMessage();
    } catch (Exception $err) {
        echo "Message: " . $err->getMessage();
    }*/


    /******************** Re-throwing exceptions *****************/
    /*try {
        try {
            checkNum(3);
        } catch (Exception $err) {
            throw new customException($email);
        }
    } catch (customException $err) {
        echo $err->errorMessage();
    }*/


    /******************** Set exception function *****************/
    function myException($exception) {
        echo "<b>Exception line: </b>" . $exception->getLine() . "<br />";
        echo "<b>Exception file: </b>" . $exception->getFile() . "<br />";
        echo "<b>Exception message: </b>" . $exception->getMessage() . "<br />";
    }

    set_exception_handler("myException");

    throw new Exception("Uncaught Exception occurred");
?>

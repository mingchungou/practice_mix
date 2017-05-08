<?php
    session_start();

    session_unset(); //remove all session variables

    session_destroy(); //remove the session
?>

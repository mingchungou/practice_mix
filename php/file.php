<?php
    //Check if the file set exists or not
    /*if (file_exists("document.txt")) {
        echo "exist";
    } else {
        echo "doesn't exist";
    }*/

    //Bring all datas from the file but as string
    #echo gettype(file_get_contents("document.txt"));

    #file_put_contents("document.txt", "\nWelcome to Costa Rica", FILE_APPEND);

    /*file_put_contents("document.txt", "");
    for($i = 0; $i < 10; $i++) {
        file_put_contents("document.txt", "String $i\n", FILE_APPEND);
    }*/

    //Bring all datas from the file but as array
    #print_r(file("document.txt"));
?>

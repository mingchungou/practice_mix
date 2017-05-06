<?php
    //Show name of file with extension
    #echo pathinfo("document.txt", PATHINFO_BASENAME) . "<br />";

    //Show root of file but without the file
    #echo pathinfo("practice/visit_counter/counter.txt", PATHINFO_DIRNAME) . "<br />";

    //Show extension of file
    #echo pathinfo("document.txt", PATHINFO_EXTENSION) . "<br />";

    //Show name of file without extension
    #echo pathinfo("document.txt", PATHINFO_FILENAME) . "<br />";

    //File all files with statement set
    #print_r(glob("*.php")); //show all files ended .php
    #print_r(glob("p*.php")); //show all files that start with p and ended .php
    #print_r(glob("*.{php,html,txt}", GLOB_BRACE)); //show all files with extensions set

    //Show file name
    #echo basename("practice/authentication/css/myStyle.css", ".css");

    //Show parent folders
    #echo dirname("practice/authentication/css/myStyle.css");
?>

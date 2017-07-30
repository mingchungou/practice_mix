<?php
    //Be able to load xml file by
    //simplexml_load_file returns an associative array
    $bookstore = simplexml_load_file("bookstore.xml") or die("<br /><br />Error: cannot load xml file");


    //How to access elements after loading the file
    /*echo $bookstore->book[0]->title . "<br />";
    echo $bookstore->book[1]->title . "<br />";
    echo $bookstore->book[2]->title . "<br />";
    echo $bookstore->book[3]->title . "<br />";
    echo "<br /><br />";*/


    //How to access element ATTRIBUTES after loading the file
    /*echo $bookstore->book[0]["category"] . "<br />";
    echo $bookstore->book[1]["category"] . "<br />";
    echo $bookstore->book[2]["category"] . "<br />";
    echo $bookstore->book[3]["category"] . "<br />";
    echo "<br /><br />";*/


    //Load all datas by loop
    /*foreach($bookstore->children() as $book) { //$book is an object
        echo "title: " . $book->title . "<br />";
        echo "author: " . $book->author . "<br />";
        echo "year: " . $book->year . "<br />";
        echo "price: " . $book->price . "<br />";
    }*/

    /*foreach($bookstore as $book) {
        echo "title: " . $book->title["lang"] . "<br />";
    }*/


    //Change data and save
    /*$bookstore->book[0]->title = "Hola";
    $bookstore->asXml("bookstore.xml");*/



    /******************* Convert string to xml ********************/
    /*$xmlFile = "<?xml version='1.0' encoding='UTF-8'?>
    <note>
        <to>Tove</to>
        <from>Jani</from>
        <heading>Reminder</heading>
        <body>Don't forget me this weekend!</body>
    </note>";

    $note = simplexml_load_string($xmlFile) or die("Error: cannot create object");

    echo $note->to;*/



    /******************* Xml custom parser ********************/
    $parser = xml_parser_create();

    /**
     * Function to use at the start of an element, either element name or attribute name is
     * in uppercase.
     * @param {string} $parser
     * @param {string} $element_name
     * @param {string} $element_attrs
     */
    function start($parser, $element_name, $element_attrs) {
        $tag = strtolower($element_name);

        if ($tag !== "bookstore" && $tag !== "book") {
            echo $tag;

            if (isset($element_attrs["LANG"])) {
                echo " (lang => " . $element_attrs["LANG"] . ")";
            }

            echo ": ";
        }
    }

    /**
     * Function to use at the end of an element.
     * @param {string} $parser
     * @param {string} $data
     */
    function stop($parser, $data) {
        echo "<br />";
    }

    //Set custom element handler
    xml_set_element_handler($parser, "start", "stop");

    /**
     * Function to use when finding character data.
     * @param {string} $parser
     * @param {string} $data
     */
    function char($parser, $data) {
        echo $data;
    }

    //Set custom data handler
    xml_set_character_data_handler($parser, "char");

    $fp = fopen("bookstore.xml", "r");

    while ($data = fread($fp, filesize("bookstore.xml"))) {
        xml_parse($parser, $data, feof($fp)) or die(sprintf("XML Error: %s at line %d", xml_error_string(xml_get_error_code($parser)), xml_get_current_line_number($parser)));
    }

    //Free the xml parser
    xml_parser_free($parser);



    /******************* DOMDocument ********************/
    $xmlDoc = new DOMDocument();
    $xmlDoc->load("bookstore.xml");

    #echo $xmlDoc->saveXML(); //Convert xml file into a string

    /*$books = $xmlDoc->getElementsByTagName("book");
    foreach($books as $book) {
        echo "title: " . $book->getElementsByTagName("title")->item(0)->nodeValue . "<br />";
        echo "lang: " . $book->getElementsByTagName("title")->item(0)->getAttribute("lang") . "<br />";
        echo "author: " . $book->getElementsByTagName("author")->item(0)->nodeValue . "<br />";
        echo "year: " . $book->getElementsByTagName("year")->item(0)->nodeValue . "<br />";
        echo "price: " . $book->getElementsByTagName("price")->item(0)->nodeValue . "<br /><br />";
    }*/
?>

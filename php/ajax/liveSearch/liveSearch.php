<?php
    //Check the request brings option parameter
    if (isset($_GET["option"])) {
        $option = (int)$_GET["option"];

        if ($option === 1) {
            $document = simplexml_load_file("names.xml");
            header("Content-Type: application/xml; charset=UTF-8"); //Specify the response will be xml data
            echo $document->asXML();
        } elseif ($option === 2) {
            $list = array();

            //Check the request brings value parameter
            if (isset($_GET["name"])) {
                $requestName = $_GET["name"];
                $len = strlen($requestName);
                $xmlDoc = new DOMDocument();
                $xmlDoc->load("names.xml");
                $names = $xmlDoc->getElementsByTagName("name");

                //Add all names that match with value parameter into $list array
                foreach($names as $name) {
                    if (stristr($requestName, substr($name->nodeValue, 0, $len))) {
                        $list[] = $name->nodeValue;
                    }
                }

                if (!empty($list)) {
                    sort($list);
                }
            } else {
                if (!function_exists("http_response_code")) {
                    header("HTTP/1.1 400 Bad Request");
                } else {
                    http_response_code(400);
                }

                die("Error: can't get value parameter");
            }

            header("Content-Type: application/json; charset=UTF-8"); //Specify the response will be json data
            echo json_encode($list);
        }
    } else {
        if (!function_exists("http_response_code")) {
            header("HTTP/1.1 400 Bad Request");
        } else {
            http_response_code(400);
        }

        die("Error: can't get option parameter");
    }
?>

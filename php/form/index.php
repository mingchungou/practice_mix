<?php
    $errores = ["name" => "", "email" => "", "phone" => ""];

    if (isset($_POST["submit_form1"])) {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $gender = $_POST["gender"];
        $birthday = $_POST["birthday"];
        $phone = $_POST["phone"];

        if (!empty($name)) {
            /*$name = trim($name);
            $name = htmlspecialchars($name);
            $name = stripslashes($name);*/

            $name = filter_var($name, FILTER_SANITIZE_STRING);

            //preg_replace("/[\$\(\)\{\}\<\>\\\|\[\]\?\%\+\#\@\^\*\&\/]/", "", $name);

            if (preg_match("/[\$\(\)\{\}\<\>\\\|\[\]\?\%\+\#\@\^\*\&\/]/", $name)) {
                $errores["name"] = "Invalid name is entered";
                $name = "";
            }
        } else {
            $errores["name"] = "Please write your name";
        }

        if (!empty($email)) {
            $email = filter_var($email, FILTER_SANITIZE_EMAIL);

            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $errores["email"] = "Invalid email is entered";
                $email = "";
            }
        } else {
            $errores["email"] = "Please write your email";
        }

        if (!empty($phone)) {
            if (!preg_match("/(\([0-9]{3}\))?\s?[0-9]{8}/", $phone)) {
                $errores["phone"] = "Invalid phone number is entered";
                $phone = "";
            }
        } else {
            $errores["phone"] = "Please write your phone number";
        }


        if (!empty($_POST["terms"])) {
            $terms = $_POST["terms"];
        } else {
            $terms = "noAcceptTC";
        }

        echo "Name: $name<br />";
        echo "Email: $email<br />";
        echo "Gender: $gender<br />";
        echo "Birthday: $birthday<br />";
        echo "Phone: $phone<br />";
        echo "Terms: $terms";
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>PHP</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />

        <style>
            .group {
                margin-bottom: 1rem;
            }

            .error {
                color: red;
            }
        </style>
    </head>
    <body>
        <h1>Form</h1>
        <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="POST">
        <!--<form action="validate.php" method="POST">-->
            <div class="group">
                <label for="name">Name: </label>
                <input id="name" type="text" name="name" />
                <?php if (!empty($errores["name"])): ?>
                    <div class="error"><?php echo $errores["name"]; ?></div>
                <?php endif; ?>
            </div>
            <div class="group">
                <label for="email">Email: </label>
                <input id="email" type="text" name="email" />
                <?php if (!empty($errores["email"])): ?>
                    <div class="error"><?php echo $errores["email"]; ?></div>
                <?php endif; ?>
            </div>
            <div class="group">
                <label for="male">Male</label>
                <input id="male" type="radio" name="gender" value="male" checked />
                <label for="female">Female</label>
                <input id="female" type="radio" name="gender" value="female" />
            </div>
            <div class="group">
                <label for="birthday">Birthday: </label>
                <select id="birthday" name="birthday">
                    <?php
                        for($i = 2017; $i >= 1991; $i--) {
                            echo "<option value='$i'>$i<option>";
                        }
                    ?>
                </select>
            </div>
            <div class="group">
                <label for="phone">Phone: </label>
                <input id="phone" type="text" name="phone" />
                <?php if (!empty($errores["phone"])): ?>
                    <div class="error"><?php echo $errores["phone"]; ?></div>
                <?php endif; ?>
            </div>
            <div class="group">
                <label for="terms">Terms and Coditions </label>
                <input id="terms" type="checkbox" name="terms" value="acceptTC" />
            </div>
            <input type="submit" value="Send" name="submit_form1" />
        </form>
    </body>
</html>

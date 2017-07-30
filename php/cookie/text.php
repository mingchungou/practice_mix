<?php
    //Check cookie
    if (isset($_COOKIE["font-size"])) {
        $size = htmlspecialchars($_COOKIE["font-size"]);
    } else {
        $size = "1rem";
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Cookie</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />

        <style media="screen">
            p {
                font-size: <?php echo $size; ?>
            }
        </style>
    </head>
    <body>
        <p>NETWORK apuesta por la simplicidad, la actualidad y la originalidad. Creemos que la innovación creativa es la única vía para promover y fomentar contenidos de calidad que fortalezcan la confianza de los usuarios en las posibilidades y nuevos usos de los productos digitales.</p>
        <p>Nuestro objetivo es conseguir que clientes y usuarios se sientan conectados en el nuevo mundo de la información con servicios y contenidos que no dificulten su relación, sino que la simplifiquen y la conviertan en un hecho cotidiano, agradable y satisfactorio</p>
    </body>
</html>

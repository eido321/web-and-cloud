<!DOCTYPE html>
<html lang="en">
<head>
    <title>forms</title>
    <link rel="stylesheet" href="../css/stylePhp.css">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js"
        integrity="sha512-pumBsjNRGGqkPzKHndZMaAG+bir374sORyzM3uulLV14lN5LyykqNk8eEeUlUkB3U0M4FApyaHraT65ihJhDpQ=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
    <div class="container" id="container1">
        <h1>Form Results</h1>
        <?php
        $colors = array("red", "orange", "green", "white");
        $flag = false;
        $ti = $_GET["reg_time"];
        $co = $_GET["reg_color"];
        echo "<h2>-Your gaming experience is: " . $ti . ".</h2>";
        foreach ($colors as $color) {
            if ($color == $co)
                $flag = true;
        }
        if ($flag == true) {
            echo "<h2>-Your chosen color is: " . $co . ".</h2>";
        } else {
            echo "<h2>-We are sorry but this color is currently not available.</h2>";
        }

        if (isset($_GET['experience'])) {
            foreach ($_GET['experience'] as $value) {
                echo "<h2>-" . $value . '' . ".</h2>";
            }
        }
        ?>
    </div>
    <div class="container" id="container2">
        <div id="help"></div>
        <section id=consoleN>
            <iframe src="https://jcw87.github.io/c2-sans-fight/" id='myIframe'></iframe>
        </section>
        <h5>Copyright © [15 Sep, 2015] tobyfox. All Rights Reserved.</h5>

    </div>
    <script src="js/undertaleScript.js"></script>
</body>
</html>
<?php
//create a mySQL DB connection:
include "config.php";

$connection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

//testing connection success
if (mysqli_connect_errno()) {
    die("DB connection failed: " . mysqli_connect_error() . " (" . mysqli_connect_errno() . ")"
    );
}
?>

<?php
//get data from DB
$bookId = $_GET["bookId"];

$query = "SELECT * FROM tbl_68_books where id=" . $bookId;
// echo $query;
$result = mysqli_query($connection, $query);
if ($result) {
    $row = mysqli_fetch_assoc($result); //there is only 1 with id=X
} else
    die("DB query failed.");
$img1 = $row["front_cover_img"];
if (!$img1)
    $img1 = 'images/projectsImages/default.png';
$img2 = $row["back_cover_img"];
if (!$img2)
    $img2 = 'images/projectsImages/default.png';

$categoryId = $row["category_id"];
?>
<!doctype html>
<html lang="en" data-bs-theme="auto">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
    <meta name="generator" content="Hugo 0.112.5">
    <title>Book Week</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/album/">
    <link rel="stylesheet" href="css/styles.css">
    <link href="assets/dist/css/bootstrap.min.css" rel="stylesheet">

</head>

<body>
    <div class="hiddenDiv" id="categoryVal" data-value="<?php echo $categoryId; ?>"></div>

    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
        <symbol id="check2" viewBox="0 0 16 16">
            <path
                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
            <path
                d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
            <path
                d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
            <path
                d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </symbol>
    </svg>


    <header data-bs-theme="light">
        <div class="collapse text-bg-light" id="navbarHeader">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-md-7 py-4">
                        <h4>About</h4>
                        <p class="text-body-secondary">The foundations of the Hebrew Book Week in December 1925. As part
                            of various events held by the Hebrew Language Defenders Battalion, it was decided that
                            during Hanukkah, "Language and Culture Week" would be celebrated, in memory of Eliezer Ben
                            Yehuda, who revived the Hebrew language.<br>

                            In collaboration with the publisher Bracha Plai (Masada Publishing), the Book Week
                            institution was born under its initial name: "Hanukkah days, a week of the Hebrew book". In
                            the Devar newspaper of December 1925, it was written:<br>

                            "Don't neglect the opportunity and buy yourself the Hebrew book at an exceptionally low
                            price."</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar navbar-light bg-light shadow-sm">
            <div class="container">
                <a href="index.php" class="navbar-brand d-flex align-items-center">
                    <div id="booksIcon"></div>
                    <strong>&nbspAlbum</strong>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader"
                    aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </header>
    <main id="indexViewMain">
        <div class="container" id="Wrapper">
            <div class="container leftCon">
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="<?php echo $img1 ?>" class="d-block w-100" alt="img1">
                        </div>
                        <div class="carousel-item">
                            <img src="<?php echo $img2 ?>" class="d-block w-100" alt="img2">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div class="container rightCon">
                <section>
                    <h1>
                        <?php echo $row["name"]; ?>
                    </h1>
                    <h4>Price: $
                        <?php echo $row["price"]; ?>
                    </h4>
                    <div id="dataServices"></div>
                    <p>
                        <?php echo $row["des"]; ?>
                    </p>
                </section>
                <a href="index.php"><button type="button" class="btn btn-sm btn-outline-secondary goBack"><b>Back to
                            Home
                            Page</b></button></a>
            </div>

        </div>

    </main>

    <footer class="text-body-secondary py-5">
        <div class="container">
            <p class="float">
                &copy; 2023 Eido Peretz. All rights reserved. &copy;
            </p>
        </div>
    </footer>
    <script src="assets/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/getBook.js"></script>
</body>

</html>

<?php
mysqli_close($connection);
?>
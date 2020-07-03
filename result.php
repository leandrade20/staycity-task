<!DOCTYPE html>

<!--
Feel free to remove, edit, add any scripts, styles, folders or otherwise,
that you would like to use in the task.
The structure of the project can be changed in whatever way works best for you, so if
you feel your regular structure also helps demonstrate how you like to work, feel free
to add/edit files and folders as you see fit e.g delete normalize.css or clear all
styles in main.css and start from scratch.

The choices to be made are yours, just as long as the end goal of the task is completed.

NB: Tabs / spaces - also your choice.
-->

<html class="" lang="">

<head>
  <meta charset="utf-8" />
  <title>Task</title>
  <!-- ENTER YOUR NAME IN THE TITLE SPACE -->
  <meta name="description" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/normalize.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/responsive.css" />
    <link rel="stylesheet" href="css/custom.css" />

  <meta name="theme-color" content="#fafafa" />
</head>

<body>
  <!--[if IE]>
      <p class="browserupgrade">
        You are using an <strong>outdated</strong> browser. Please
        <a href="https://browsehappy.com/">upgrade your browser</a> to improve
        your experience and security.
      </p>
    <![endif]-->
    <header>
      <img src="staycity-aparthotels-logo.webp" alt="" />
    </header>
    <div class="wrap">
      <div id="myslider">
        <img src="img/img2.jpg" />
        <img src="img/img1.jpg" />
        <img src="img/img3.webp" />
      </div>

      <section class="absolute-center">
        <h1>Your Search</h1>
        <div class="search-form">
  <p>
    City: <?php echo json_encode($_POST["city-dropdown"] ?? null) ?>
  </p>

  <p>
    Apartment: <?php echo json_encode($_POST["apartment-dropdown"] ?? null) ?>
  </p>

  <p>
    Check in: <?php echo json_encode($_POST["check-in-date"] ?? null) ?>
  </p>

  <p>
    Check out: <?php echo json_encode($_POST["check-out-date"] ?? null) ?>
  </p>
  </div>
</section>

</body>

</html>
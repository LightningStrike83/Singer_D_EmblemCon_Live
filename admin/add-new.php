<!DOCTYPE html>
<html lang="en">
<?php
session_start();

if(!$_SESSION['username']) {
    header('Location: ../admin/login-form.php');
}

?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EmblemCon- About</title>
    <link rel="stylesheet" href="../css/reset.css">
    <link rel="stylesheet" href="../css/grid.css">
    <link rel="stylesheet" href="../css/main.css?version = 0.1">
    <script defer type="module" src="../js/main.js?version = 0.1"></script>
    <link rel="apple-touch-icon" sizes="180x180" href="../images/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../images/favicon/favicon-16x16.png">
    <link rel="manifest" href="../images/favicon/site.webmanifest">
    <link rel="mask-icon" href="../images/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#2b5797">
    <meta name="theme-color" content="#ffffff">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
</head>
<body data-page="add-form">
<header class="full-width-grid-con">
        <a class="col-start-2 col-span-1 m-col-span-1 header-logo-con" href="../index.html"><img class="header-logo" src="../images/emblemcon.png" alt="EmblemCon Logo"></a>
        <svg class="col-span-1" id="ham-menu" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 51.83 22">
            <defs>
                <style>
                .cls-1 {
                    fill: rgb(255, 239, 219);
                    stroke: rgb(255, 239, 219);
                    stroke-miterlimit: 10;
                    stroke-width: 2px;
                }
                </style>
            </defs>
            <g id="Layer_2-2" data-name="Layer 2">
                <line class="cls-1" y1="1" x2="51.83" y2="1"/>
                <line class="cls-1" y1="11" x2="51.83" y2="11"/>
                <line class="cls-1" y1="21" x2="51.83" y2="21"/>
            </g>
        </svg>
        <p class="col-span-full m-col-span-1 header-date">May 1-4, 2025</p>
        <div class="m-col-span-1 sm-icons-header">
            <p class="follow-text bolder">Follow Us:</p>
            <div class="sm-icons-con">
                <a href="https://t.co/J5iWSBYduP" class= "sm-icon" target="_blank">
                    <img src="../images/social_media_icons/discord-icon-svgrepo-com.svg" alt="Discord Logo">
                </a>
    
                <a href="https://www.twitch.tv/emblemcon" class= "sm-icon" target="_blank">
                    <img src="../images/social_media_icons/icons8-twitch.svg" alt="Twitch Logo">
                </a>

                <a href="https://tiltify.com/@emblemcon/profile" class="sm-icon" target="_blank">
                    <img src="../images/social_media_icons/tiltify-logo.png" alt="Tiltify Logo">
                </a>
    
                <a href="https://bsky.app/profile/emblemcon.bsky.social" class= "sm-icon" target="_blank">
                    <img src="../images/social_media_icons/bluesky-1.svg" alt="Bluesky Logo">
                </a>
    
                <a href="https://x.com/theemblemcon?lang=en" class= "sm-icon" target="_blank">
                    <img src="../images/social_media_icons/icons8-x.svg" alt="X Logo">
                </a>
    
                <a href="https://www.instagram.com/theemblemcon/" class= "sm-icon" target="_blank">
                    <img src="../images/social_media_icons/icons8-instagram.svg" alt="Instagram Logo">
                </a>
            </div>
        </div>

        <div class="col-span-full header-links">
            <a class="header-link about-button">ABOUT ▼</a>
            <a class="header-link events-button">EVENT INFO ▼</a>
            <a class="header-link guest-button">GUESTS ▼</a>
            <a class="header-link" href="apply.html">APPLICATIONS</a>
            <a class="header-link contact-button">CONTACT ▼</a>

            <div class="sub-links-events">
                <a class="header-link" href="../schedule.html">SCHEDULE</a>
                <a class="header-link" href="../announcements.html">ANNOUNCEMENTS</a>
                <a class="header-link" href="../off-season.html">OFF-SEASON EVENTS</a>
                <a class="header-link" href="../contest.html">CONTESTS</a>
            </div>

            <div class="sub-links-guests">
                <a class="header-link" href="../guests.html">VOICE ACTORS & GUESTS</a>
                <a class="header-link" href="../artist-exhibitor.html">ARTISTS, CREATIVES, & EXHIBITORS</a>
            </div>

            <div class="sub-links-about">
                <a class="header-link" href="../register.html">REGISTRATION</a>
                <a class="header-link" href="../history.html">HISTORY</a>
                <a class="header-link" href="../experience.html">OVERVIEW</a>
                <a class="header-link" href="../reviews.html">REVIEWS</a>
                <a class="header-link" href="../team.html">MOD TEAM</a>
                <a class="header-link" href="../archive.html">MOD CREATIONS</a>
                <a class="header-link" target="_blank" href="https://docs.google.com/document/d/1_cDZk7ylTlnkT4UQgRJ-2_Y89slCWmm9SofVBeFB0Uw/edit?usp=sharing">FAQ</a>
            </div>

            <div class="sub-links-contact">
                <a class="header-link" href="../contact.html">CONTACT THE CON</a>
                <a class="header-link" href="../submit-review.html">SUBMIT A REVIEW / MESSAGE</a>
            </div>
        </div>
    </header>

    <section id="admin-con" class="grid-con">
        <div id="info-display-con" class="col-span-full">
            <select id="info-selection">
                <option disabled selected>--Please Select What You Wish To Add--</option>
                <option value="artist">Artists</option>
                <option value="artist-continents">Artists and Continents</option>
                <option value="commission">Creatives</option>
                <option value="guest">Current Guest</option>
                <option value="exhibitor">Exhibitors</option>
                <option value="featured-doodle">Featured Doodle</option>
                <option value="featured-review">Featured Review</option>
                <option value="continents">Fire Emblem Continents</option>
                <option value="mod">Mods</option>
                <option value="panel">Panels</option>
                <option value="previous-guest">Previous Guests</option>
                <option value="comics">Rawr's Comics</option>
                <option value="update">Site Updates</option>
                <option value="users">Users</option>
            </select>
        </div>
    </section>

    <section id="form-con" class="grid-con">
        <div id="artist-continents-form" class="new-form col-span-full">
            <h3>Artist - Continent Form</h3>
                <form action="add-artist-continent.php" class="admin-form" method="POST">
                    <label class="admin-label" for="artist">Artist ID:</label>
                    <input class="admin-input" name="artist" type="number" min="1" required><br><br>

                    <div id="continent-checkbox-con">

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="1">
                        <span class="continent-name">Archanea</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="2">
                        <span class="continent-name">Valentia</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="3">
                        <span class="continent-name">Jugdral</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="4">
                        <span class="continent-name">Thracia</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="5">
                        <span class="continent-name">Elibe (Binding Blade)</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="6">
                        <span class="continent-name">Elibe (Blazing Blade)</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="7">
                        <span class="continent-name">Magvel</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="8">
                        <span class="continent-name">Tellius</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="9">
                        <span class="continent-name">Ylisse</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="10">
                        <span class="continent-name">Fateslandia</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="11">
                        <span class="continent-name">Fodlan</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="12">
                        <span class="continent-name">Japan</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="13">
                        <span class="continent-name">Elyos</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="14">
                        <span class="continent-name">Zenith</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="15">
                        <span class="continent-name">OC</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="16">
                        <span class="continent-name">Other</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="17">
                        <span class="continent-name">Shadowsland</span>
                    </label>

                    <label class="continent-option">
                        <input type="checkbox" name="continent[]" value="18">
                        <span class="continent-name">Pre-Fodlan</span>
                    </label>

                    </div>

                    <input class="admin-input" name="submit" type="submit" value="Add">
                </form>
        </div>

        <div id="artist-form" class="new-form col-span-full">
            <h3>Artist Form</h3>
            <form action="add-artist.php" class="admin-form" method="POST" enctype="multipart/form-data">
                <label class="admin-label" for="name">Name:</label>
                <input class="admin-input" name="name" type="text" required><br><br>
                <label class="admin-label" for="link">Link:</label>
                <input class="admin-input" name="link" type="text"><br><br>
                <label class="admin-label" for="aa_table">AA Table Link:</label>
                <input class="admin-input" name="aa_table" type="text" required><br>

                <input class="admin-input" name="submit" type="submit" value="Add">
            </form>
        </div>

        <div id="comics-form" class="new-form col-span-full">
            <h3>Comic Form</h3>
            <form action="add-comic.php" class="admin-form" method="POST" enctype="multipart/form-data">
                <label class="admin-label" for="title">Title:</label>
                <input class="admin-input" name="title" type="text" required><br><br>
                <label class="admin-label" for="number">Number:</label>
                <input class="admin-input" name="number" type="number" min="1" required><br><br>
                <label class="admin-label" for="image">Comic Image:</label>
                <input class="admin-input image-upload" name="image" type="file" required><br>

                <input class="admin-input" name="submit" type="submit" value="Add">
            </form>
        </div>

        <div id="commission-form" class="new-form col-span-full">
            <h3>Creatives Form</h3>
            <form action="add-commission.php" class="admin-form" method="POST" enctype="multipart/form-data">
                <label class="admin-label" for="name">Name:</label>
                <input class="admin-input" name="name" type="text" required><br><br>
                <label class="admin-label" for="link">Link:</label>
                <input class="admin-input" name="link" type="text"><br>

                <input class="admin-input" name="submit" type="submit" value="Add">
            </form>
        </div>

        <div id="continents-form" class="new-form col-span-full">
            <h3>Continent Form</h3>
            <form action="add-continent.php" class="admin-form" method="POST" enctype="multipart/form-data">
                <label class="admin-label" for="continent">Continent:</label>
                <input class="admin-input" name="continent" type="text" required><br><br>

                <input class="admin-input" name="submit" type="submit" value="Add">
            </form>
        </div>

        <div id="exhibitor-form" class="new-form col-span-full">
            <h3>Exhibitor Form</h3>
            <form action="add-exhibitor.php" class="admin-form" method="POST" enctype="multipart/form-data">
                <label class="admin-label" for="name">Name:</label>
                <input class="admin-input" name="name" type="text" required><br><br>
                <label class="admin-label" for="link">Link:</label>
                <input class="admin-input" name="link" type="text"><br>

                <input class="admin-input" name="submit" type="submit" value="Add">
            </form>
        </div>

        <div id="featured-doodle-form" class="new-form col-span-full">
            <h3>Featured Doodle Form</h3>
            <form action="add-doodle.php" class="admin-form" method="POST" enctype="multipart/form-data">
                <label class="admin-label" for="name">Name:</label>
                <input class="admin-input" name="name" type="text" required><br><br>
                <label class="admin-label" for="image">Doodle:</label>
                <input class="admin-input image-upload" name="image" type="file" required><br>

                <input class="admin-input" name="submit" type="submit" value="Add">
            </form>
        </div>

        <div id="featured-review-form" class="new-form col-span-full">
            <h3>Featured Review Form</h3>
            <form action="add-review.php" class="admin-form" method="POST" enctype="multipart/form-data">
                <label class="admin-label" for="name">Name:</label>
                <input class="admin-input" name="name" type="text" required><br><br>
                <label class="admin-label" for="review">Review:</label>
                <textarea class="admin-input" name="review" type="text" required></textarea><br>

                <input class="admin-input" name="submit" type="submit" value="Add">
            </form>
        </div>

        <div id="guest-form" class="new-form col-span-full">
            <h3>Guest Form</h3>
            <form action="add-guest.php" class="admin-form" method="POST" enctype="multipart/form-data">
                <label class="admin-label" for="name">Name:</label>
                <input class="admin-input" name="name" type="text" required><br><br>
                <label class="admin-label" for="social_media">Social Media:</label>
                <input class="admin-input" name="social_media" type="text" required><br><br>
                <label class="admin-label" for="image_path">Image:</label>
                <input class="admin-input image-upload" name="image_path" type="file" required><br>

                <input class="admin-input" name="submit" type="submit" value="Add">
            </form>
        </div>

        <div id="mod-form" class="new-form col-span-full">
            <h3>Mod Form</h3>
            <form action="add-mod.php" class="admin-form" method="POST" enctype="multipart/form-data">
                <label class="admin-label" for="name">Name:</label>
                <input class="admin-input" name="name" type="text" required><br><br>
                <label class="admin-label" for="handle">Handle:</label>
                <input class="admin-input" name="handle" type="text" required><br><br>
                <label class="admin-label" for="pic">Image:</label>
                <input class="admin-input image-upload" name="pic" type="file" required><br><br>
                <label class="admin-label" for="position">Position:</label>
                <input class="admin-input" name="position" type="text" required><br><br>
                <label class="admin-label" for="mod_date">Mod Since:</label>
                <input class="admin-input" name="mod_date" type="text" required><br><br>
                <label class="admin-label" for="bio">Bio:</label>
                <textarea class="admin-input" name="bio" type="text" required></textarea><br><br>
                <label class="admin-label" for="pronouns">Pronouns:</label>
                <input class="admin-input" name="pronouns" type="text" required><br><br>
                <label class="admin-label" for="character_stan">Character Stan:</label>
                <input class="admin-input" name="character_stan" type="text" required><br>

                <input class="admin-input" name="submit" type="submit" value="Add">
            </form>
        </div>

        <div id="panel-form" class="new-form col-span-full">
            <h3>Panel Form</h3>
            <form action="add-panel.php" class="admin-form" method="POST" enctype="multipart/form-data">
                <label class="admin-label" for="title">Title:</label>
                <input class="admin-input" name="title" type="text" required><br><br>
                <label class="admin-label" for="host">Host:</label>
                <input class="admin-input" name="host" type="text" required><br><br>
                <label class="admin-label" for="day">Day:</label>
                <input class="admin-input" name="day" type="number" min="1" max="7" required><br><br>
                <label class="admin-label" for="time">Time:</label>
                <input class="admin-input" name="time" type="text" required><br><br>
                <label class="admin-label" for="year">Year:</label>
                <input class="admin-input" name="year" type="number" required><br><br>
                <label class="admin-label" for="description">Description:</label>
                <textarea class="admin-input" name="description" type="text" required></textarea><br>

                <input class="admin-input" name="submit" type="submit" value="Add">
            </form>
        </div>

        <div id="previous-guest-form" class="new-form col-span-full">
            <h3>Previous Guest Form</h3>
            <form action="add-previous-guest.php" class="admin-form" method="POST" enctype="multipart/form-data">
                <label class="admin-label" for="name">Name:</label>
                <input class="admin-input" name="name" type="text" required><br><br>
                <label class="admin-label" for="image_path">Image File Name:</label>
                <input class="admin-input" name="image_path" type="text" required><br>

                <input class="admin-input" name="submit" type="submit" value="Add">
            </form>
        </div>

        <div id="update-form" class="new-form col-span-full">
            <h3>Update Form</h3>
            <form action="add-update.php" class="admin-form" method="POST" enctype="multipart/form-data">
                <label class="admin-label" for="image_path">Image:</label>
                <input class="admin-input image-upload" name="image_path" type="file" required><br><br>
                <label class="admin-label" for="title">Title:</label>
                <input class="admin-input" name="title" type="text" required><br><br>
                <label class="admin-label" for="body">Body:</label>
                <input class="admin-input" name="body" type="text" required><br><br>
                <label class="admin-label" for="link">Link:</label>
                <input class="admin-input" name="link" type="text"><br><br>
                <label class="admin-label" for="date">Date:</label>
                <input class="admin-input" name="date" type="text" required><br>

                <input class="admin-input" name="submit" type="submit" value="Add">
            </form>
        </div>

        <div id="users-form" class="new-form col-span-full">
            <h3>User Form</h3>
            <form action="add-user.php" class="admin-form" method="POST" enctype="multipart/form-data">
                <label class="admin-label" for="username">Username:</label>
                <input class="admin-input" name="username" type="text" required><br><br>
                <label class="admin-label" for="password">Password:</label>
                <input class="admin-input" name="password" type="text" required><br>

                <input class="admin-input" name="submit" type="submit" value="Add">
            </form>
        </div>
    </section>

    <section class="grid-con to-top-con">
        <h1 class="hidden">To Top Button</h1>
        <div class="col-span-full line-divider"></div>
        <a class="top-button">↑ To Top</a>
    </section>

    <div class="bg-gradient"></div>
    <div class="bg-texture"></div>

    <section id="main-mobile-menu" class="full-width-grid-con mobile-menu">
        <h1 class="hidden">Mobile Menu</h1>
        <div class="col-start-2 col-span-1 mobile-links">
            <p class="header-link about-mobile-button">ABOUT ▼</p>
            <p class="header-link events-mobile-button">EVENT INFO ▼</p>
            <p class="header-link guest-mobile-button">GUESTS ▼</p>
            <a class="header-link" href="apply.html">APPLICATIONS</a>
            <a class="header-link contact-mobile-button">CONTACT ▼</a>
        </div>

        <div class="col-span-1 mobile-close">
            <p class="close-button">X</p>
        </div>

        <div class="col-span-full sm-icons-header-mobile">
            <p class="follow-text bolder">Follow Us:</p>
            <div class="sm-icons-con">
                <a href="https://t.co/J5iWSBYduP" class= "sm-icon" target="_blank">
                    <img src="../images/social_media_icons/discord-icon-svgrepo-com.svg" alt="Discord Logo">
                </a>
    
                <a href="https://www.twitch.tv/emblemcon" class= "sm-icon" target="_blank">
                    <img src="../images/social_media_icons/icons8-twitch.svg" alt="Twitch Logo">
                </a>

                <a href="https://tiltify.com/@emblemcon/profile" class="sm-icon" target="_blank">
                    <img src="../images/social_media_icons/tiltify-logo.png" alt="Tiltify Logo">
                </a>
    
                <a href="https://bsky.app/profile/emblemcon.bsky.social" class= "sm-icon" target="_blank">
                    <img src="../images/social_media_icons/bluesky-1.svg" alt="Bluesky Logo">
                </a>
    
                <a href="https://x.com/theemblemcon?lang=en" class= "sm-icon" target="_blank">
                    <img src="../images/social_media_icons/icons8-x.svg" alt="X Logo">
                </a>
    
                <a href="https://www.instagram.com/theemblemcon/" class= "sm-icon" target="_blank">
                    <img src="../images/social_media_icons/icons8-instagram.svg" alt="Instagram Logo">
                </a>
            </div>
        </div>
    </section>

    <section id="event-mobile-menu" class="full-width-grid-con mobile-menu">
        <h1 class="hidden">Mobile Event Menu</h1>
        <div class="col-start-2 col-span-1 mobile-links">
            <a class="header-link" href="../schedule.html">SCHEDULE</a>
            <a class="header-link" href="../announcements.html">ANNOUNCEMENTS</a>
            <a class="header-link" href="../off-season.html">OFF-SEASON EVENTS</a>
                <a class="header-link" href="../contest.html">CONTESTS</a>
        </div>

        <div class="col-span-1 mobile-close">
            <p class="close-button">X</p>
        </div>
    </section>

    <section id="guest-mobile-menu" class="full-width-grid-con mobile-menu">
        <h1 class="hidden">Mobile Guest Menu</h1>
        <div class="col-start-2 col-span-1 mobile-links">
            <a class="header-link" href="../guests.html">VOICE ACTORS & GUESTS</a>
            <a class="header-link" href="../artist-exhibitor.html">ARTISTS, CREATIVES, & EXHIBITORS</a>
        </div>

        <div class="col-span-1 mobile-close">
            <p class="close-button">X</p>
        </div>
    </section>

    <section id="about-mobile-menu" class="full-width-grid-con mobile-menu">
        <h1 class="hidden">Mobile About Menu</h1>
        <div class="col-start-2 col-span-1 mobile-links">
            <a class="header-link" href="../register.html">REGISTRATION</a>
            <a class="header-link" href="../history.html">HISTORY</a>
            <a class="header-link" href="../experience.html">OVERVIEW</a>
            <a class="header-link" href="../reviews.html">REVIEWS</a>
            <a class="header-link" href="../team.html">MOD TEAM</a>
            <a class="header-link" href="../archive.html">MOD CREATIONS</a>
            <a class="header-link" target="_blank" href="https://docs.google.com/document/d/1_cDZk7ylTlnkT4UQgRJ-2_Y89slCWmm9SofVBeFB0Uw/edit?usp=sharing">FAQ</a>
        </div>

        <div class="col-span-1 mobile-close">
            <p class="close-button">X</p>
        </div>
    </section>

    <section id="contact-mobile-menu" class="full-width-grid-con mobile-menu">
        <h1 class="hidden">Mobile Contact Menu</h1>

        <div class="col-start-2 col-span-1 mobile-links">
            <a class="header-link" href="../contact.html">CONTACT THE CON</a>
            <a class="header-link" href="../submit-review.html">SUBMIT A REVIEW / MESSAGE</a>
        </div>

        <div class="col-span-1 mobile-close">
            <p class="close-button">X</p>
        </div>
    </section>
</body>
</html>
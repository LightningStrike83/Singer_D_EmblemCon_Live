<!DOCTYPE html>
<html lang="en">

<?php
session_start();

if(!$_SESSION['username']) {
    header('Location: ../admin/login-form-temp.php');
}

?>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="no-store, no-cache, must-revalidate">
	<meta http-equiv="Pragma" content="no-cache">
	<meta http-equiv="Expires" content="0">
    <title>EmblemCon- Homepage</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/grid.css">
    <link rel="stylesheet" href="css/main.css?version=1.0">
    <script type="module" src="js/main.js?version=1.0"></script>
    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png">
    <link rel="manifest" href="/images/favicon/site.webmanifest">
    <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#2b5797">
    <meta name="theme-color" content="#ffffff">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap" rel="stylesheet">
</head>
<body data-page="home">
    <header class="full-width-grid-con">
        <a class="col-start-2 col-span-1 m-col-span-1 header-logo-con" href="index.html"><img class="header-logo" src="images/emblemcon.png" alt="EmblemCon Logo"></a>
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
                    <img src="images/social_media_icons/discord-icon-svgrepo-com.svg" alt="Discord Logo">
                </a>
    
                <a href="https://www.twitch.tv/emblemcon" class= "sm-icon" target="_blank">
                    <img src="images/social_media_icons/icons8-twitch.svg" alt="Twitch Logo">
                </a>

                <a href="https://tiltify.com/@emblemcon/profile" class="sm-icon" target="_blank">
                    <img src="images/social_media_icons/tiltify-logo.png" alt="Tiltify Logo">
                </a>
    
                <a href="https://bsky.app/profile/emblemcon.bsky.social" class= "sm-icon" target="_blank">
                    <img src="images/social_media_icons/bluesky-1.svg" alt="Bluesky Logo">
                </a>
    
                <a href="https://x.com/theemblemcon?lang=en" class= "sm-icon" target="_blank">
                    <img src="images/social_media_icons/icons8-x.svg" alt="X Logo">
                </a>
    
                <a href="https://www.instagram.com/theemblemcon/" class= "sm-icon" target="_blank">
                    <img src="images/social_media_icons/icons8-instagram.svg" alt="Instagram Logo">
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
                <a class="header-link" href="schedule.html">SCHEDULE</a>
                <a class="header-link" href="announcements.html">ANNOUNCEMENTS</a>
                <a class="header-link" href="off-season.html">OFF-SEASON EVENTS</a>
                <a class="header-link" href="contest.html">CONTESTS</a>
            </div>

            <div class="sub-links-guests">
                <a class="header-link" href="guests.html">VOICE ACTORS & GUESTS</a>
                <a class="header-link" href="artist-exhibitor.html">ARTISTS, CREATIVES, & EXHIBITORS</a>
            </div>

            <div class="sub-links-about">
                <a class="header-link" href="register.html">REGISTRATION</a>
                <a class="header-link" href="history.html">HISTORY</a>
                <a class="header-link" href="experience.html">OVERVIEW</a>
                <a class="header-link" href="reviews.html">REVIEWS</a>
                <a class="header-link" href="team.html">MOD TEAM</a>
                <a class="header-link" href="archive.html">MOD CREATIONS</a>
                <a class="header-link" target="_blank" href="https://docs.google.com/document/d/1_cDZk7ylTlnkT4UQgRJ-2_Y89slCWmm9SofVBeFB0Uw/edit?usp=sharing">FAQ</a>
            </div>

            <div class="sub-links-contact">
                <a class="header-link" href="contact.html">CONTACT THE CON</a>
                <a class="header-link" href="submit-review.html">SUBMIT A REVIEW / MESSAGE</a>
            </div>
        </div>
    </header>
    
    <section class="full-width-grid-con" id="home-slider">
        <h1 class="hidden">Hero Image</h1>
        <a id="hero-link" class="col-span-full"><div class="col-span-full" id="home-picture"></div></a>
        <div class="col-span-full" id="home-text-con">
            <p id="home-text" class="white-text"></p>
        </div>

        <div class="col-span-full" id="home-arrows-con">
            <p id="home-left">◄</p>
            <p id="home-right">►</p>
        </div>
    </section>

    <section class="grid-con" id="about-index">
        <div class="col-span-full m-col-span-9">
            <div id="about-home-con" class="content-section">
                <h3>ABOUT THE CONVENTION</h3>
                <div class="line-divider"></div>
                <div id="home-info">
                    <img id="about-index-image" class="index-images" src="images/website_assets/image09.gif" alt="EmblemCon Mascot and Logo">
                    <p class="about-index-text">EmblemCon is a free digital Discord convention made by Fire Emblem fans, for Fire Emblem fans. Please have a look around each section to find out more about our <a class="index-link" href="schedule.html">events</a> and <a class="index-link" href="guests.html">guests</a>! Feel free to check out our <a class="index-link" href="https://docs.google.com/document/d/1_cDZk7ylTlnkT4UQgRJ-2_Y89slCWmm9SofVBeFB0Uw/edit?usp=sharing">FAQ</a> for more information as well!</p>
                </div>
            </div>

            <div id="started-home-con" class="content-section">
                <h3>GET STARTED</h3>
                <div class="line-divider"></div>
                <div id="started-info">
                    <img id="started-index-image" class="index-images" src="images/website_assets/chibi.png" alt="EmblemCon Mascot and Logo">
                    <p class="about-index-text">Check out our <a href="register.html">registration</a> page to see how you can join the convention and keep an eye out on our <a href="apply.html">applications</a> page to see how you can contribute to the EmblemCon experience! <br><br>Keep an eye out for our <a href="announcements.html">announcements</a> to see when applications open, or to see what EmblemCon has in store for you!</p>
                </div>
            </div>

            <div class="content-section" id="about-trailer">
                <h3>CONVENTION OVERVIEW</h3>
                <div class="line-divider"></div>
                <div id="about-video-text"><div><p>EmblemCon's very own <a target="_blank" class="about-guest-link" href="https://twitter.com/EvernightStudio?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">Daniel Alba</a> has been kind enough to create an overview of the EmblemCon experience. See what it is that brings people from all other the world together and all the different ways they can celebrate their love of the Fire Emblem franchise!<br>You can find additional details about what EmblemCon has to offer <a href="experience.html">here</a>.</p></div> <video id="about-video" controls src="video/twittervid.com_TheEmblemCon_6e7ef9.mp4"></video> </div>
            </div>
        </div>

        <div id="announce-con" class="col-span-full m-col-span-3 content-section">
            <h3 class="col-span-full">LATEST UPDATES</h3>
            <div class="col-span-full line-divider"></div>

            <div id="updates-con"></div>
            <template>
                <div class= "update">
                    <div class="update-text"></div>
                    <div class="line-divider"></div>
                </div>
            </template>

            <a id="home-announce-link" class="col-span-full" href="announcements.html">View All Announcements</a>
        </div>
    </section>

    <section class="grid-con to-top-con">
        <h1 class="hidden">To Top Button</h1>
        <div class="col-span-full line-divider"></div>
        <a class="top-button white-text">↑ To Top</a>
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
                    <img src="images/social_media_icons/discord-icon-svgrepo-com.svg" alt="Discord Logo">
                </a>
    
                <a href="https://www.twitch.tv/emblemcon" class= "sm-icon" target="_blank">
                    <img src="images/social_media_icons/icons8-twitch.svg" alt="Twitch Logo">
                </a>

                <a href="https://tiltify.com/@emblemcon/profile" class="sm-icon" target="_blank">
                    <img src="images/social_media_icons/tiltify-logo.png" alt="Tiltify Logo">
                </a>
    
                <a href="https://bsky.app/profile/emblemcon.bsky.social" class= "sm-icon" target="_blank">
                    <img src="images/social_media_icons/bluesky-1.svg" alt="Bluesky Logo">
                </a>
    
                <a href="https://x.com/theemblemcon?lang=en" class= "sm-icon" target="_blank">
                    <img src="images/social_media_icons/icons8-x.svg" alt="X Logo">
                </a>
    
                <a href="https://www.instagram.com/theemblemcon/" class= "sm-icon" target="_blank">
                    <img src="images/social_media_icons/icons8-instagram.svg" alt="Instagram Logo">
                </a>
            </div>
        </div>
    </section>

    <section id="event-mobile-menu" class="full-width-grid-con mobile-menu">
        <h1 class="hidden">Mobile Event Menu</h1>
        <div class="col-start-2 col-span-1 mobile-links">
            <a class="header-link" href="schedule.html">SCHEDULE</a>
            <a class="header-link" href="announcements.html">ANNOUNCEMENTS</a>
            <a class="header-link" href="off-season.html">OFF-SEASON EVENTS</a>
                <a class="header-link" href="contest.html">CONTESTS</a>
        </div>

        <div class="col-span-1 mobile-close">
            <p class="close-button">X</p>
        </div>
    </section>

    <section id="guest-mobile-menu" class="full-width-grid-con mobile-menu">
        <h1 class="hidden">Mobile Guest Menu</h1>
        <div class="col-start-2 col-span-1 mobile-links">
            <a class="header-link" href="guests.html">VOICE ACTORS & GUESTS</a>
            <a class="header-link" href="artist-exhibitor.html">ARTISTS, CREATIVES, & EXHIBITORS</a>
        </div>

        <div class="col-span-1 mobile-close">
            <p class="close-button">X</p>
        </div>
    </section>

    <section id="about-mobile-menu" class="full-width-grid-con mobile-menu">
        <h1 class="hidden">Mobile About Menu</h1>
        <div class="col-start-2 col-span-1 mobile-links">
            <a class="header-link" href="register.html">REGISTRATION</a>
            <a class="header-link" href="history.html">HISTORY</a>
            <a class="header-link" href="experience.html">OVERVIEW</a>
            <a class="header-link" href="reviews.html">REVIEWS</a>
            <a class="header-link" href="team.html">MOD TEAM</a>
            <a class="header-link" href="archive.html">MOD CREATIONS</a>
            <a class="header-link" target="_blank" href="https://docs.google.com/document/d/1_cDZk7ylTlnkT4UQgRJ-2_Y89slCWmm9SofVBeFB0Uw/edit?usp=sharing">FAQ</a>
        </div>

        <div class="col-span-1 mobile-close">
            <p class="close-button">X</p>
        </div>
    </section>

    <section id="contact-mobile-menu" class="full-width-grid-con mobile-menu">
        <h1 class="hidden">Mobile Contact Menu</h1>

        <div class="col-start-2 col-span-1 mobile-links">
            <a class="header-link" href="contact.html">CONTACT THE CON</a>
            <a class="header-link" href="submit-review.html">SUBMIT A REVIEW / MESSAGE</a>
        </div>

        <div class="col-span-1 mobile-close">
            <p class="close-button">X</p>
        </div>
    </section>
</body>
</html>
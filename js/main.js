import { footerScroll } from "./modules/footer.js?version=2.0";
import { headerSubLinks } from "./modules/header.js?version=2.0";
import { modPopulation } from "./modules/team.js?version=2.0";
import { vaPopulation } from "./modules/va.js?version=2.0";
import { schedulePopulation } from "./modules/schedule.js?version=2.0";
import { artistExhibitor } from "./modules/artist-exhibitor.js?version=2.0";
import { homeContent } from "./modules/home.js?version=2.0";
import { announcementContent } from "./modules/announcements.js?version=2.0";
import { aaFilter } from "./modules/aa-filter.js?version=2.0";
import { comicPopulation } from "./modules/comic-gallery.js?version=2.0";
import { hamburgerMenu } from "./modules/hamburger.js?version=2.0";
import { adminFunctionality } from "./modules/admin.js?version=2.0";
import { addForms } from "./modules/add-forms.js?version=2.0";
import { tableofContents } from "./modules/showcase.js?version=2.0";
import { assetsSlideshow } from "./modules/daniel-assets.js?version=2.0";
import { sylvainGallery } from "./modules/dennys-sylvain.js?version=2.0";
import { yearSwitch } from "./modules/cotc.js?version=2.0";
import { contactForm } from "./modules/contact.js?version=2.0";
import { drawing } from "./modules/drawing.js?version=2.0";
import { submitReview } from "./modules/submit-review.js?version=2.0";
import { switchSubmissions } from "./modules/switch-submissions.js?version=2.0";
import { reviewPopulation } from "./modules/review.js?version=2.0";
import { colourBlindSchedule } from "./modules/colour-blind.js?version=2.0";
import { podcastPopulation } from "./modules/paralogues.js?version=2.0";
import { countdown } from "./modules/countdown.js?version=2.0";
import { stampSwitch } from "./modules/stamp.js?version=2.0";
import { stampPopulation } from "./modules/stamp-rally.js?version=2.0";
import { galleryFunctionality } from "./modules/gallery.js?version=2.0";
import { badgeMaker } from "./modules/badge-maker.js?version=2.0";
import { testImages } from "./modules/test-images.js?version=2.0";
import { guessWhoMode } from "./modules/guess-who-mode.js?version=2.0";
import { randomizeCharacters } from "./modules/randomize-characters.js?version=2.0";

if (document.body.dataset.page !== "test") {
    headerSubLinks()
    footerScroll()
    hamburgerMenu()
}

if (document.body.dataset.page === "voice-actors") {
    vaPopulation()
}

if (document.body.dataset.page === "team") {
    modPopulation()
}

if (document.body.dataset.page === "schedule") {
    schedulePopulation()
    colourBlindSchedule()
}

if (document.body.dataset.page === 'artist-exhibitor') {
    artistExhibitor()
}

if (document.body.dataset.page === 'home') {
    homeContent()
    countdown()
}

if (document.body.dataset.page === 'announcements') {
    announcementContent()
}

if (document.body.dataset.page === 'aa-filter') {
    aaFilter()
}

if (document.body.dataset.page === 'comics') {
    comicPopulation()
}

if (document.body.dataset.page === 'admin') {
    adminFunctionality()
}

if (document.body.dataset.page === 'add-form') {
    addForms()
}

if (document.body.dataset.page === 'archive') {
    tableofContents()
}

if (document.body.dataset.page === 'daniel-assets') {
    assetsSlideshow()
}

if (document.body.dataset.page === 'dennys-sylvain') {
    sylvainGallery()
}

if (document.body.dataset.page === 'cutest') {
    yearSwitch()
}

if (document.body.dataset.page === 'contact') {
    contactForm()
}

if (document.body.dataset.page === 'submit-review') {
    drawing()
    submitReview()
    switchSubmissions()
}

if (document.body.dataset.page === 'review') {
    reviewPopulation()
}

if (document.body.dataset.page === 'podcast') {
    podcastPopulation()
}

if (document.body.dataset.page === 'stamps') {
    stampSwitch()
}

if (document.body.dataset.page === 'stamp-rally') {
    stampPopulation()
}

if (document.body.dataset.page === 'gallery') {
    galleryFunctionality()
}

if (document.body.dataset.page === 'badge-maker') {
    badgeMaker()
}

if (document.body.dataset.page === 'test') {
    testImages()
}


if (document.body.dataset.page === 'randomizer') {
    guessWhoMode()
    randomizeCharacters()
}
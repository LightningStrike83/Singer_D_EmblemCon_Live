import { footerScroll } from "./modules/footer.js?version=0.6";
import { headerSubLinks } from "./modules/header.js?version=0.6";
import { modPopulation } from "./modules/team.js?version=0.6";
import { vaPopulation } from "./modules/va.js?version=0.6";
import { schedulePopulation } from "./modules/schedule.js?version=0.6";
import { artistExhibitor } from "./modules/artist-exhibitor.js?version=0.6";
import { homeContent } from "./modules/home.js?version=0.6";
import { announcementContent } from "./modules/announcements.js?version=0.6";
import { ldContent } from "./modules/ld-showcase.js?version=0.6";
import { aaFilter } from "./modules/aa-filter.js?version=0.6";
import { comicPopulation } from "./modules/comic-gallery.js?version=0.6";
import { hamburgerMenu } from "./modules/hamburger.js?version=0.6";
import { adminFunctionality } from "./modules/admin.js?version=0.6";
import { addForms } from "./modules/add-forms.js?version=0.6";
import { tableofContents } from "./modules/showcase.js?version=0.6";
import { assetsSlideshow } from "./modules/daniel-assets.js?version=0.6";
import { sylvainGallery } from "./modules/dennys-sylvain.js?version=0.6";
import { yearSwitch } from "./modules/cotc.js?version=0.6";
import { contactForm } from "./modules/contact.js?version=0.6";
import { drawing } from "./modules/drawing.js?version=0.6";
import { submitReview } from "./modules/submit-review.js?version=0.6";
import { switchSubmissions } from "./modules/switch-submissions.js?version=0.6";
import { reviewPopulation } from "./modules/review.js?version=0.6";

headerSubLinks()
footerScroll()
hamburgerMenu()

if (document.body.dataset.page === "voice-actors") {
    vaPopulation()
}

if (document.body.dataset.page === "team") {
    modPopulation()
}

if (document.body.dataset.page === "schedule") {
    schedulePopulation()
}

if (document.body.dataset.page === 'artist-exhibitor') {
    artistExhibitor()
}

if (document.body.dataset.page === 'home') {
    homeContent()
}

if (document.body.dataset.page === 'announcements') {
    announcementContent()
}

if (document.body.dataset.page === 'ld-showcase') {
    ldContent()
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
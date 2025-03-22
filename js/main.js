import { footerScroll } from "./modules/footer.js?version=0.4";
import { headerSubLinks } from "./modules/header.js?version=0.4";
import { modPopulation } from "./modules/team.js?version=0.4";
import { vaPopulation } from "./modules/va.js?version=0.4";
import { schedulePopulation } from "./modules/schedule.js?version=0.4";
import { artistExhibitor } from "./modules/artist-exhibitor.js?version=0.4";
import { homeContent } from "./modules/home.js?version=0.4";
import { announcementContent } from "./modules/announcements.js?version=0.4";
import { ldContent } from "./modules/ld-showcase.js?version=0.4";
import { aaFilter } from "./modules/aa-filter.js?version=0.4";
import { comicPopulation } from "./modules/comic-gallery.js?version=0.4";
import { hamburgerMenu } from "./modules/hamburger.js?version=0.4";
import { adminFunctionality } from "./modules/admin.js?version=0.4";
import { addForms } from "./modules/add-forms.js?version=0.4";
import { tableofContents } from "./modules/showcase.js?version=0.4";
import { assetsSlideshow } from "./modules/daniel-assets.js?version=0.4";
import { sylvainGallery } from "./modules/dennys-sylvain.js?version=0.4";
import { yearSwitch } from "./modules/cotc.js?version=0.4";
import { contactForm } from "./modules/contact.js?version=0.5";
import { drawing } from "./modules/drawing.js?version=0.4";
import { submitReview } from "./modules/submit-review.js?version=0.4";
import { switchSubmissions } from "./modules/switch-submissions.js?version=0.4";

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
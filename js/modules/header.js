export function headerSubLinks() {
    const eventLinks = document.querySelector(".sub-links-events")
    const aboutLinks = document.querySelector(".sub-links-about")
    const guestLinks = document.querySelector(".sub-links-guests")
    const contactLinks = document.querySelector(".sub-links-contact")
    const eventButton = document.querySelector(".events-button")
    const aboutButton = document.querySelector(".about-button")
    const guestButton = document.querySelector(".guest-button")
    const contactButton = document.querySelector(".contact-button")
    const activityLinks = document.querySelector(".sub-links-activity")
    const activityButton = document.querySelector(".activity-button")

    function initialState() {
        eventLinks.style.display = "none"
        aboutLinks.style.display = "none"
        guestLinks.style.display = "none"
        contactLinks.style.display = "none"
        activityLinks.style.display = "none"
    }

    initialState()

    function openEventLinks() {
        if (eventLinks.style.display === "none") {
            eventLinks.style.display = "flex"

            if (aboutLinks.style.display === "flex") {
                aboutLinks.style.display = "none"
            }

            if (guestLinks.style.display === "flex") {
                guestLinks.style.display = "none"
            }

            if (contactLinks.style.display === "flex") {
                contactLinks.style.display = "none"
            }

            if (activityLinks.style.display === "flex") {
                activityLinks.style.display = "none"
            }
        } else {
            eventLinks.style.display = "none"
        }
    }

    function openAboutLinks() {
        if (aboutLinks.style.display === "none") {
            aboutLinks.style.display = "flex"

            if (eventLinks.style.display === "flex") {
                eventLinks.style.display = "none"
            }

            if (guestLinks.style.display === "flex") {
                guestLinks.style.display = "none"
            }

            if (contactLinks.style.display === "flex") {
                contactLinks.style.display = "none"
            }

            if (activityLinks.style.display === "flex") {
                activityLinks.style.display = "none"
            }
        } else {
            aboutLinks.style.display = "none"
        }
    }

    function openGuestLinks() {
        if (guestLinks.style.display === "none") {
            guestLinks.style.display = "flex"

            if (eventLinks.style.display === "flex") {
                eventLinks.style.display = "none"
            }

            if (aboutLinks.style.display === "flex") {
                aboutLinks.style.display = "none"
            }

            if (contactLinks.style.display === "flex") {
                contactLinks.style.display = "none"
            }

            if (activityLinks.style.display === "flex") {
                activityLinks.style.display = "none"
            }
        } else {
            guestLinks.style.display = "none"
        }
    }

    function openContactLinks() {
        if (contactLinks.style.display === "none") {
            contactLinks.style.display = "flex"

            if (eventLinks.style.display === "flex") {
                eventLinks.style.display = "none"
            }

            if (aboutLinks.style.display === "flex") {
                aboutLinks.style.display = "none"
            }

            if (guestLinks.style.display === "flex") {
                guestLinks.style.display = "none"
            }

            if (activityLinks.style.display === "flex") {
                activityLinks.style.display = "none"
            }
        } else {
            contactLinks.style.display = "none"
        }
    }

    function openActivityLinks() {
        if (activityLinks.style.display === "none") {
            activityLinks.style.display = "flex"

            if (eventLinks.style.display === "flex") {
                eventLinks.style.display = "none"
            }

            if (aboutLinks.style.display === "flex") {
                aboutLinks.style.display = "none"
            }

            if (guestLinks.style.display === "flex") {
                guestLinks.style.display = "none"
            }

            if (contactLinks.style.display === "flex") {
                contactLinks.style.display = "none"
            }
        } else {
            activityLinks.style.display = "none"
        }
    }

    eventButton.addEventListener("click", openEventLinks)
    aboutButton.addEventListener("click", openAboutLinks)
    guestButton.addEventListener("click", openGuestLinks)
    contactButton.addEventListener("click", openContactLinks)
    activityButton.addEventListener("click", openActivityLinks)
}
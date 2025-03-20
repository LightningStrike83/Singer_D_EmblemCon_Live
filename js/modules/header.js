export function headerSubLinks() {
    const eventLinks = document.querySelector(".sub-links-events")
    const aboutLinks = document.querySelector(".sub-links-about")
    const guestLinks = document.querySelector(".sub-links-guests")
    const eventButton = document.querySelector(".events-button")
    const aboutButton = document.querySelector(".about-button")
    const guestButton = document.querySelector(".guest-button")

    function initialState() {
        eventLinks.style.display = "none"
        aboutLinks.style.display = "none"
        guestLinks.style.display = "none"
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
        } else {
            guestLinks.style.display = "none"
        }
    }

    eventButton.addEventListener("click", openEventLinks)
    aboutButton.addEventListener("click", openAboutLinks)
    guestButton.addEventListener("click", openGuestLinks)
}
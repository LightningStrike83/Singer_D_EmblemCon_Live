export function hamburgerMenu() {
    const hamClose = document.querySelectorAll(".close-button")
    const aboutMobile = document.querySelector("#about-mobile-menu")
    const eventMobile = document.querySelector("#event-mobile-menu")
    const guestMobile = document.querySelector("#guest-mobile-menu")
    const contactMobile = document.querySelector("#contact-mobile-menu")
    const activityMobile = document.querySelector("#activity-mobile-menu")
    const aboutMobileButton = document.querySelector(".about-mobile-button")
    const eventMobileButton = document.querySelector(".events-mobile-button")
    const guestMobileButton = document.querySelector(".guest-mobile-button")
    const contactMobileButton = document.querySelector(".contact-mobile-button")
    const activityMobileButton = document.querySelector(".activity-mobile-button")
    const hamMenu = document.querySelector("#ham-menu")
    const mainMenu = document.querySelector("#main-mobile-menu")

    function hamburgerOpen() {
        mainMenu.style.visibility = "visible"
        mainMenu.style.opacity = "1"
    }

    function hamBurgerClose() {
        if (this.parentNode.parentNode.style.visibility = "visible") {
            this.parentNode.parentNode.style.opacity = "0",
            this.parentNode.parentNode.style.visibility = "hidden"
            hamClose.forEach(ham => {
                ham.textContent = "X"
            })
        }
    }

    function openAboutMenu() {
        aboutMobile.style.visibility = "visible"
        aboutMobile.style.opacity = "1"
        hamClose.forEach(ham => {
            ham.textContent = "←"
        })
    }

    function openEventMenu() {
        eventMobile.style.visibility = "visible"
        eventMobile.style.opacity = "1"
        hamClose.forEach(ham => {
            ham.textContent = "←"
        })
    }

    function openGuestMenu() {
        guestMobile.style.visibility = "visible"
        guestMobile.style.opacity = "1"
        hamClose.forEach(ham => {
            ham.textContent = "←"
        })
    }

    function openContactMenu() {
        contactMobile.style.visibility = "visible"
        contactMobile.style.opacity = "1"
        hamClose.forEach(ham => {
            ham.textContent = "←"
        })
    }

    function openActivityMenu() {
        activityMobile.style.visibility = "visible"
        activityMobile.style.opacity = "1"
        hamClose.forEach(ham => {
            ham.textContent = "←"
        })
    }

    hamMenu.addEventListener("click", hamburgerOpen)
    hamClose.forEach(close => close.addEventListener("click", hamBurgerClose))
    aboutMobileButton.addEventListener("click", openAboutMenu)
    eventMobileButton.addEventListener("click", openEventMenu)
    guestMobileButton.addEventListener("click", openGuestMenu)
    contactMobileButton.addEventListener("click", openContactMenu)
    activityMobileButton.addEventListener("click", openActivityMenu)
}
export function homeContent() {
    const updatesCon = document.querySelector("#updates-con")
    const leftArrow = document.querySelector("#home-left")
    const rightArrow = document.querySelector("#home-right")
    const baseURL = "https://emblemcon.com/lumen/public/"
    const spinner = `<img id="spinner" src="../images/website_assets/shield.gif" alt="Loading image"><br> <p id="spinner-text">Loading...</p>`;
    const trailerText = document.querySelector("#see-trailer")

    let count = 0

    let homeContent = [
        {
            text: "Welcome to EmblemCon! Made by Fire Emblem fans for Fire Emblem fans!",
            image: "emblemcon_banner.png",
            link: "overview.html"
        },

        {
            text: "Panels, Guests, and more!",
            image: "emblemcon_event.png",
            link: "schedule.html"
        },

        {
            text: "Special appearances by voice actors, content creators, and more!",
            image: "title_guests.png",
            link: "guests.html"
        },

        {
            text: "Learn more about the people who make EmblemCon such a success",
            image: "mods.png",
            link: "team.html"
        },
    ]

    function homeSliderContent() {
        const homeText = document.querySelector("#home-text")
        const homeImage = document.querySelector("#home-picture")
        const homeLink = document.querySelector("#hero-link")
        const image = document.createElement("img")

        homeImage.innerHTML = ""

        image.src = `../images/website_assets/${homeContent[count].image}`
        image.setAttribute("alt", `Image for ${homeContent[count].link}`)
        homeLink.setAttribute("href", `${homeContent[count].link}`)

        homeText.textContent = homeContent[count].text
        // homeImage.style.backgroundImage = `url("../images/website_assets/${homeContent[count].image}")`

        homeImage.appendChild(image)
    }

    homeSliderContent()

    function nextContent() {
        count++

        if (count >= homeContent.length) {
            count = 0
        }

        homeSliderContent()
    }

    function previousContent() {
        count --

        if (count < 0) {
            count = homeContent.length-1
        }

        homeSliderContent()
    }

    function dynamicUpdates() {
        updatesCon.innerHTML = spinner
        fetch (`${baseURL}update-three`)
        .then(response => response.json())
        .then(function(response){
            updatesCon.innerHTML = ""
            response.forEach(update => {
                const divCon = document.createElement("div")
                const divText = document.createElement("div")
                const text = document.createElement("p")
                const divider = document.createElement("div")
                const info = document.createElement("p")
                const date = document.createElement("p")

                text.textContent = update.title
                info.innerHTML = update.body
                date.textContent = `Updated on: ${update.date}`

                divText.setAttribute("class", "update-text detail-section")
                divCon.setAttribute("class", "update")
                divider.setAttribute("class", "line-divider")
                info.setAttribute("class", "update-info white-text")
                date.setAttribute("class", "update-date white-text")
                text.setAttribute("class", "white-text")

                divText.appendChild(text)
                divText.appendChild(divider)
                divText.appendChild(info)
                divText.appendChild(date)
                divCon.appendChild(divText)
                updatesCon.appendChild(divCon)
            })
        })
    }

    dynamicUpdates()

    function videoVisibility() {
        const indexVideo = document.querySelector("#index-video")

        if (indexVideo.style.display === "block") {
            indexVideo.style.display = "none"
            trailerText.textContent = "▼ See A Trailer For The Convention ▼"

            if (!indexVideo.paused && !indexVideo.ended) {
                indexVideo.pause();
                indexVideo.currentTime = 0;
            }
        } else {
            indexVideo.style.display = "block"
            trailerText.textContent = "▲ Hide The Trailer For The Convention ▲"
        }
    }

    function latestUpdate() {
        fetch (`${baseURL}recent-date`)
        .then(response => response.json())
        .then(function(response){
            const updateText = document.querySelector("#home-index-recent")
            console.log(response)

            updateText.textContent = response[0].date
        })
    }

    latestUpdate()

    rightArrow.addEventListener("click", nextContent)
    leftArrow.addEventListener("click", previousContent)
    trailerText.addEventListener("click", videoVisibility)
}
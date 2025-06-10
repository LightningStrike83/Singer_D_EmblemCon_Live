export function homeContent() {
    const updatesCon = document.querySelector("#updates-con")
    const leftArrow = document.querySelector("#home-left")
    const rightArrow = document.querySelector("#home-right")
    const baseURL = "http://localhost/Singer_D_EmblemConWebsite_Alpha/lumen/public/"

    let count = 0

    let homeContent = [
        {
            text: "Welcome to EmblemCon! Made by Fire Emblem fans for Fire Emblem fans!",
            image: "feh.png",
        },

        {
            text: "Panels, Guests, and more!",
            image: "day-1.jpg",
        },

        {
            text: "Learn more about the people who make EmblemCon such a success",
            image: "Oscar.png",
        },
    ]

    function homeSliderContent() {
        const homeText = document.querySelector("#home-text")
        const homeImage = document.querySelector("#home-picture")

        homeText.textContent = homeContent[count].text
        homeImage.style.backgroundImage = `url("../images/sample_images/${homeContent[count].image}")`
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
        fetch (`${baseURL}update-three`)
        .then(response => response.json())
        .then(function(response){
            response.forEach(update => {
                const divCon = document.createElement("div")
                const divPic = document.createElement("div")
                const divText = document.createElement("div")
                const text = document.createElement("p")

                text.textContent = update.title
                divPic.style.backgroundImage = `url("../images/sample_images/${update.thumbnail}")`

                divPic.setAttribute("class", "update-pic space-filler")
                divText.setAttribute("class", "update-text detail-section")
                divCon.setAttribute("class", "col-span-full m-col-span-4 update")

                divText.appendChild(text)
                divCon.appendChild(divPic)
                divCon.appendChild(divText)
                updatesCon.appendChild(divCon)
            })
        })
    }

    dynamicUpdates()

    rightArrow.addEventListener("click", nextContent)
    leftArrow.addEventListener("click", previousContent)
}
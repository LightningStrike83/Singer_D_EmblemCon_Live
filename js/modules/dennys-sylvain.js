export function sylvainGallery() {
    const leftArrow = document.querySelector("#ship-left-arrow")
    const rightArrow = document.querySelector("#ship-right-arrow")

    let s = 0

    let images = [
        {
            imagepath: "LeannexElinciaDonation.jpg",
            description: "Leanne x Elincia",
        },

        {
            imagepath: "IkexZelgiusDonation.jpg",
            description: "Ike x Zelgius",
        },

        {
            imagepath: "RosadoxFogadoDonation.jpg",
            description: "Rosado x Fogado",
        },
    ]

    function galleryPopulation() {
        const shipCon = document.querySelector("#ship-con")
        const shipDesc = document.querySelector("#ship-desc")

        shipCon.style.backgroundImage = `url(../images/dennys_sylvain/${images[s].imagepath})`

        shipCon.setAttribute("title", `${images[s].description} Image`)

        shipDesc.textContent = images[s].description
    }

    galleryPopulation()

    function increaseCount() {
        s++

        if (s >= images.length) {
            s = 0
        }

        galleryPopulation()
    }

    function decreaseCount() {
        s--

        if (s < 0) {
            s = images.length-1
        }

        galleryPopulation()
    }

    leftArrow.addEventListener("click", decreaseCount)
    rightArrow.addEventListener("click", increaseCount)
}
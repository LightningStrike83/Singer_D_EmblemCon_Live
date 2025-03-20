export function assetsSlideshow() {
    const leftArrow = document.querySelector("#asset-left-arrow")
    const rightArrow = document.querySelector("#asset-right-arrow")

    let a = 0

    let assets = [
        {
            title: "Graphics",
            type: "img",
            imagepath: "EmblemCon-Discord.gif",
            description: "Icon used for the EmblemCon server",
        },

        {
            title: "Logos",
            type: "img",
            imagepath: "logo.png",
            description: "Logos that Daniel created a gift to EmblemCon for Christmas 2024",
        },

        {
            title: "Guest Announcement Images",
            type: "img",
            imagepath: "EC2024_Guest_XantheHuynh.png",
            description: "Images used for announcements and guest reveals",
        },

        {
            title: "Logo Animation",
            type: "video",
            imagepath: "Intro_EmblemCon.mp4",
            description: "A logo animation to be played before panels",
        },

        {
            title: "Stream Graphics",
            type: "img",
            imagepath: "StartingSoon_sample.png",
            description: "Graphics that are used for streams",
        },

        {
            title: "Website Assets",
            type: "img",
            imagepath: "title_creatives.png",
            description: "Assets used throughout the website"
        }
    ]

    function galleryPopulation() {
        const assetName = document.querySelector("#asset-name")
        const assetCon = document.querySelector("#asset-con")
        const assetDesc = document.querySelector("#asset-desc")
        const asset = document.createElement(`${assets[a].type}`)

        assetName.textContent = assets[a].title

        if (assets[a].imagepath === "Intro_EmblemCon.mp4") {
            assetCon.style.backgroundImage = `none`
            assetCon.innerHTML = ""
            asset.src = `../images/daniel_assets/${assets[a].imagepath}`
            asset.controls = true;
            asset.poster = "../images/daniel_assets/video_poster.png"
            asset.setAttribute("id", "asset-view")

            assetCon.appendChild(asset)
        } else {
            assetCon.innerHTML = ""
            assetCon.style.backgroundImage = `url(../images/daniel_assets/${assets[a].imagepath})`
            assetCon.style.backgroundPosition = 'center'
            assetCon.style.backgroundRepeat = 'norepeat'
            assetCon.style.backgroundSize = 'contain'
        }

        assetCon.setAttribute("title", `${assets[a].title} Image`)

        assetDesc.textContent = assets[a].description
    }

    galleryPopulation()

    function increaseCount() {
        a++

        if (a >= assets.length) {
            a = 0
        }

        galleryPopulation()
    }

    function decreaseCount() {
        a--

        if (a < 0) {
            a = assets.length-1
        }

        galleryPopulation()
    }

    leftArrow.addEventListener("click", decreaseCount)
    rightArrow.addEventListener("click", increaseCount)
}
export function announcementContent() {
    const announcementCon = document.querySelector("#announcement-content-con")
    const baseURL = "https://emblemcon.com/lumen/public/"
    const spinner = `<img id="spinner" src="../images/website_assets/shield.gif" alt="Loading image"><br> <p id="spinner-text">Loading...</p>`;

    function announcementDisplay() {
        announcementCon.innerHTML = spinner

        fetch (`${baseURL}update`)
        .then(response => response.json())
        .then(function(response){
            announcementCon.innerHTML = ""
            response.forEach(update => {
                const divCon = document.createElement("div")
                const imagediv = document.createElement("div")
                const textDiv = document.createElement("div")
                const text = document.createElement ("p")
                const title = document.createElement("p")
                const line = document.createElement("div")

                title.textContent = update.title
                text.textContent = update.body
                imagediv.style.backgroundImage = `url("../images/updates/${update.image_path}")`

                line.setAttribute("class", "col-span-full line-divider")

                divCon.setAttribute("class", "announcement detail-section")
                imagediv.setAttribute("class", "announcement-image space-filler")
                title.setAttribute("class", "announcement-title")
                textDiv.setAttribute("class", "announcement-text")

                textDiv.appendChild(title)
                textDiv.appendChild(line)
                textDiv.appendChild(text)
                divCon.appendChild(imagediv)
                divCon.appendChild(textDiv)

                announcementCon.appendChild(divCon)
            })
        })
    }

    announcementDisplay()
}
export function schedulePopulation() {
    const baseURL = "https://emblemcon.com/lumen/public/"
    let d = 1
    const conDay = document.querySelectorAll(".day")
    const scheduleImage = document.querySelector("#schedule-image")
    const scheduleText = document.querySelector("#schedule-text")
    const spinner = `<img id="spinner" src="../images/website_assets/shield.gif" alt="Loading image"><br> <p id="spinner-text">Loading...</p>`;

    function panelList() {
        scheduleText.innerHTML = spinner
        fetch(`${baseURL}panel/${d}`)
        .then(response => response.json())
        .then(function(response){
            const colourBlindBox = document.querySelector("#colour-blind-box")
            const features = document.querySelector("#schedule-features-con")

            scheduleImage.innerHTML = ""
            scheduleText.innerHTML = ""

            if (d !== "5") {
                let img = document.createElement("img")
                img.src = `../images/schedule_images/day-${d}.png`
                img.setAttribute("id", "schedule-image")
                img.setAttribute("alt", `Image of Day ${d} Schedule`)

                scheduleImage.appendChild(img)

                response.forEach(panel => {
                    const panelTitle = document.createElement("p")
                    const panelTime = document.createElement("p")
                    const panelDescription = document.createElement("p")
                    const scheduleDiv = document.createElement("div")
                    const panelHost = document.createElement("p")

                    const utcTime = panel.time;
                    const utcDateTime = luxon.DateTime.fromFormat(utcTime, "yyyy-MM-dd HH:mm:ss", { zone: "utc" });

                    const userZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    const localTime = utcDateTime.setZone(userZone).toLocaleString(luxon.DateTime.DATETIME_FULL);

                    scheduleDiv.setAttribute("class", "panel-div")
                    panelTitle.textContent = panel.title
                    panelTitle.setAttribute("class", "panel-title")
                    panelTime.textContent = `Time: ${localTime}`
                    panelDescription.textContent = `Description: ${panel.description}`
                    panelHost.textContent = `Hosted by: ${panel.host}`
                    scheduleDiv.setAttribute("data-type", `${panel.type}`)

                    if (panel.type === "m") {
                        scheduleDiv.style.background = "linear-gradient( #0f1ca1, #01034c)"
                    } else if (panel.type === "g") {
                        scheduleDiv.style.background = "linear-gradient( #298933, #032404)"
                    } else if (panel.type === "p") {
                        scheduleDiv.style.background = "linear-gradient( #a78d2e, #523607)"
                    } else if (panel.type === "v") {
                        scheduleDiv.style.background = "linear-gradient( #95032d, #3d0003)"
                    } 

                    scheduleDiv.appendChild(panelTitle)
                    scheduleDiv.appendChild(panelHost)
                    scheduleDiv.appendChild(panelTime)
                    scheduleDiv.appendChild(panelDescription)
                    scheduleText.appendChild(scheduleDiv)

                    colourBlindBox.style.display = "flex"
                    features.style.display = "flex"
                })
            } else {
                const finalDiv = document.createElement("div")
                const p = document.createElement("p")

                const utcTime = "2025-05-04 15:00:00";
                const utcDateTime = luxon.DateTime.fromFormat(utcTime, "yyyy-MM-dd HH:mm:ss", { zone: "utc" });

                const userZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                const localTime = utcDateTime.setZone(userZone).toLocaleString(luxon.DateTime.DATETIME_FULL);

                p.innerHTML = `<p id="closing-info">EmblemCon's Closing Ceremonies will be held on ${localTime}<br>Please feel free to join us for wrap ups, final thoughts, and the yearly chaos!`

                finalDiv.appendChild(p)
                scheduleText.appendChild(finalDiv)

                colourBlindBox.style.display = "none"
                features.style.display = "none"
            }
        })
        .catch(error => {
            const errorMessage = document.createElement("p")

            errorMessage.textContent = `Sorry, something went wrong. Please refresh the page or check your internet connection. If this problem persists, feel free to reach out! ${error}`

            scheduleText.appendChild(errorMessage)
        })
    }

    panelList()

    function dChange() {
        d = this.dataset.day

        panelList()
    }

    conDay.forEach(day => day.addEventListener("click", dChange))
}

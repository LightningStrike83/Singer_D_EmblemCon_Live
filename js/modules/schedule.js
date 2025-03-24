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
            scheduleImage.innerHTML = ""
            scheduleText.innerHTML = ""

            console.log(response)

            let img = document.createElement("img")
            img.src = `../images/schedule_images/day-${d}.jpg`
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

                const utcTimeWithZ = `${utcTime.replace(' ', 'T')}Z`;

                const userTime = new Date(utcTimeWithZ).toLocaleString('en-US', {
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                    timeZoneName: 'short'
                });


                scheduleDiv.setAttribute("class", "panel-div")
                panelTitle.textContent = panel.title
                panelTitle.setAttribute("class", "panel-title")
                panelTime.textContent = `Time: ${userTime}`
                panelDescription.textContent = `Description: ${panel.description}`
                panelHost.textContent = `Hosted by: ${panel.host}`

                scheduleDiv.appendChild(panelTitle)
                scheduleDiv.appendChild(panelHost)
                scheduleDiv.appendChild(panelTime)
                scheduleDiv.appendChild(panelDescription)
                scheduleText.appendChild(scheduleDiv)
            })
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
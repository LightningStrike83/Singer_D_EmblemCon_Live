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

                scheduleDiv.setAttribute("class", "panel-div")
                panelTitle.textContent = panel.title
                panelTitle.setAttribute("class", "panel-title")
                panelTime.textContent = `Time: ${panel.time}`
                panelDescription.textContent = `Description: ${panel.description}`

                scheduleDiv.appendChild(panelTitle)
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
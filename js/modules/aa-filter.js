export function aaFilter() {
    const baseURL = "https://emblemcon.com/lumen/public/"
    const spinner = `<img id="spinner" src="../images/website_assets/shield.gif" alt="Loading image"><br> <p id="spinner-text">Loading...</p>`;
    const continentSelect = document.querySelector("#continent-con")
    const artistDisplay = document.querySelector("#artist-display")

    function continentPopulation() {
        continentSelect.innerHTML = spinner

        fetch(`${baseURL}continents`)
        .then(response => response.json())
        .then(function(response){
            continentSelect.innerHTML = ""
            response.forEach(continent => {
                const li = document.createElement("li")

                li.textContent = continent.continent
                li.setAttribute("data-continent", `${continent.id}`)
                li.setAttribute("class", "continent")
                li.addEventListener("click", displayArtists)
                continentSelect.appendChild(li)
            })
        })
    }

    function displayArtists(e) {
        const continentNumber = this.dataset.continent

        artistDisplay.innerHTML = spinner

        fetch(`${baseURL}artist-continents/${continentNumber}`)
        .then(response => response.json())
        .then(function(response){
            const ul = document.createElement("ul")
            const artistTitle = document.querySelector("#artist-title")
            const continentName = e.target.textContent

            artistDisplay.innerHTML = ""
            artistTitle.textContent = `${continentName} has ${response.length} artists in the Artist Alley`

            response.forEach(artist => {
                const li = document.createElement("li")

                li.textContent = artist.name
                ul.appendChild(li)
            })

            artistDisplay.appendChild(ul)
        })
    }

    continentPopulation()
}
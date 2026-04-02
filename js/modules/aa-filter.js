export function aaFilter() {
    const baseURL = "https://emblemcon.com/lumen/public/"
    const spinner = `<img id="spinner" src="../images/website_assets/shield.gif" alt="Loading image"><br> <p id="spinner-text">Loading...</p>`;
    const continentSelect = document.querySelector("#continent-con")
    const artistDisplay = document.querySelector("#artist-display")
    const continentSelectList = document.querySelector("#continent-select-list")

    function continentPopulation() {
        continentSelect.innerHTML = spinner

        fetch(`${baseURL}continents`)
        .then(response => response.json())
        .then(function(response){
            continentSelect.innerHTML = ""

            const initialOption = document.createElement("option")

            initialOption.textContent = "--Please Select A Continent--"
            initialOption.disabled = true
            initialOption.selected = true

            continentSelectList.appendChild(initialOption)

            response.forEach(continent => {
                const li = document.createElement("li")
                const option = document.createElement("option")


                li.textContent = continent.continent
                li.setAttribute("data-continent", `${continent.id}`)
                li.setAttribute("data-continentName", `${continent.continent}`)
                li.setAttribute("class", "continent")
                li.addEventListener("click", displayArtists)
                continentSelect.appendChild(li)

                option.textContent = continent.continent
                option.setAttribute("class", "continent-option")
                option.setAttribute("data-continent", `${continent.id}`)

                continentSelectList.appendChild(option)
            })

            continentSelectList.addEventListener("change", displayArtists)
        })
    }

    function displayArtists(e) {
        const continentNumber = continentSelectList.options[continentSelectList.selectedIndex].dataset.continent || this.dataset.continent

        const continentName = e?.currentTarget?.dataset.continentname || continentSelectList.options[continentSelectList.selectedIndex].innerText

        artistDisplay.innerHTML = spinner

        fetch(`${baseURL}artist-continents/${continentNumber}`)
        .then(response => response.json())
        .then(function(response){
            const ul = document.createElement("ul")
            const artistTitle = document.querySelector("#artist-title")

            artistDisplay.innerHTML = ""
            artistTitle.textContent = `${continentName} has ${response.length} artists in the Artist Alley`

            response.forEach(artist => {
                const li = document.createElement("li")
                const a = document.createElement("a")


                a.innerHTML = `<a target="_blank" class="ae-guest-name" href="${artist.aa_table}">${artist.name} <img class="external-icon" src="../images/external.svg" alt="External Icon"></a>`

                li.appendChild(a)
                ul.appendChild(li)
            })

            artistDisplay.appendChild(ul)
        })
    }

    continentPopulation()
}
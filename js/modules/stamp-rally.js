export function stampPopulation() {
    const artistList = document.querySelector("#artist-list")
    const baseURL = "https://emblemcon.com/lumen/public/"
    const spinner = `<img id="spinner" src="../images/website_assets/shield.gif" alt="Loading image"><br> <p id="spinner-text">Sending...</p>`;

    function populateArtists() {
         fetch(`${baseURL}stamps`)
        .then(response => response.json())
        .then(function(response){
            response.forEach(artist => {
                const li = document.createElement("li")
                const a = document.createElement("a")

                a.setAttribute("class", "stamp-link")

                a.innerHTML = `• ${artist.name} <img class="external-icon" src="../images/external.svg" alt="External Icon">`
                a.href = `${artist.link}`

                li.appendChild(a)
                artistList.appendChild(li)
            })
        })
        .catch(error => {

        })
    }

    populateArtists()
}
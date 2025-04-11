export function artistExhibitor() {
    const guestSelect = document.querySelectorAll(".guest-select")
    const imageCon = document.querySelector("#ae-image-con")
    const textCon = document.querySelector("#ae-text-con")
    const aeTitle = document.querySelector("#ae-title")
    const aeDesc = document.querySelector("#ae-desc")
    const spinner = `<img id="spinner" src="../images/website_assets/shield.gif" alt="Loading image"><br> <p id="spinner-text">Loading...</p>`;

    let g = "artist"

    function contentPopulation() {
        const baseURL = "https://emblemcon.com/lumen/public/"

        imageCon.innerHTML = ""
        textCon.innerHTML = spinner

        if (g === "artist") {
            aeTitle.textContent = "Artist Alley"
            aeDesc.textContent = "Our artist alley is where artists come to sell their Fire Emblem themed art pieces"

            const div = document.createElement("div")
            const a = document.createElement("a")
            const listCon = document.querySelector("#ae-list-con")

            div.setAttribute("id", "ae-filter-link")
            div.setAttribute("class", "col-span-full")
            a.href = "artist-filter.html"
            a.textContent = "View the Artist Alley Filter"

            div.appendChild(a)
            listCon.appendChild(div)
        }

        if (g === "commission") {
            aeTitle.textContent = "Commissions Corridor"
            aeDesc.textContent = "Our commissions corridor is where our guests can find artists to bring their ideas to life"
        }

        if (g === "exhibitor") {
            aeTitle.textContent = "Exhibitors Hall"
            aeDesc.textContent = "Our Exhibitors Hall is where our vendors sell their Fire Emblem themed merchandise and services"
        }

        fetch(`${baseURL}${g}`)
        .then(response => response.json())
        .then(function(response) {

            textCon.innerHTML = ""
            response.forEach(guest => {
                const a = document.createElement("a")
                const div = document.createElement("div")

                if (guest.name === "hanjyuus x rainymint") {
                    a.innerHTML = `<a target="_blank" class="ae-guest-name" href="https://twitter.com/hanjyuus">hanjyuus</a> <p class="cross">x</p> <a target="_blank" class="ae-guest-name" href="https://twitter.com/rainy_mint">rainymint</a> <img class="external-icon" src="../images/external.svg" alt="External Icon">`
                } else if (guest.link !== "") {
                    a.innerHTML = `<a target="_blank" class="ae-guest-name" href="${guest.link}">${guest.name} <img class="external-icon" src="../images/external.svg" alt="External Icon"></a>`
                } else {
                    a.innerHTML = `<a class="ae-guest-name">${guest.name}</a>`
                }

                div.appendChild(a)
                textCon.appendChild(div)
            })
        })
        .catch(error => {
            const errorMessage = document.createElement("p")

            errorMessage.textContent = `Sorry, something went wrong. Please refresh the page or check your internet connection. If this problem persists, feel free to reach out! ${error}`

            textCon.appendChild(errorMessage)
        })
    }

    contentPopulation()

    function switchGuest() {
        g = this.dataset.guest

        contentPopulation()

        if (g !== "artist") {
            let aeFilter = document.querySelector("#ae-filter-link")

            aeFilter.remove()
        } else {
            let aeFilter = document.querySelectorAll("#ae-filter-link")

            let aeArray = Array.from(aeFilter)

            while (aeArray.length > 1) {
                aeArray.pop().remove();
            }
        }
    }

    guestSelect.forEach(guest=>guest.addEventListener("click", switchGuest))
}
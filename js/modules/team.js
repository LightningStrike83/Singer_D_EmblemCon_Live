export function modPopulation() {
    const baseURL = "https://emblemcon.com/lumen/public/"
    const lordCon = document.querySelector("#lords")
    let spinnerDiv = document.querySelector("#spinner-div")
    const spinner = `<img id="spinner" src="../images/website_assets/shield.gif" alt="Loading image"><br> <p id="spinner-text">Loading...</p>`;

    function modList() {
        spinnerDiv.innerHTML = spinner
        fetch(`${baseURL}mod`)
        .then(response => response.json())
        .then(function(response) {
            response.forEach(mod => {
                const divCon = document.createElement("div")
                const modImg = document.createElement("img")
                const modName = document.createElement("p")
                const modBio = document.createElement("div")
                const modName2 = document.createElement("p")
                const modPosition = document.createElement("p")
                const modPronouns = document.createElement("p")
                const modDate = document.createElement("p")
                const modInfo = document.createElement("p")
                const modCharacter = document.createElement("p")
                const handle = document.createElement("p")

                divCon.setAttribute("class", "col-span-2 m-col-span-3 mod-con detail-section")
                divCon.setAttribute("data-mod", `${mod.name}`)

                modImg.src = `../images/mods/${mod.pic}`
                modImg.setAttribute("alt", `Mod ${mod.name}`)
                modImg.setAttribute("class", "mod-thumbnail")

                modName.setAttribute("class", "mod-name")
                modName.textContent = `${mod.name} ▼`

                modBio.setAttribute("class", "mod-bio")
                handle.setAttribute("class", "mod-handle lord-info")
                modName2.setAttribute("class", "mod-name-second lord-info")
                modPosition.setAttribute("class", "mod-position lord-info")
                modPronouns.setAttribute("class", "mod-pronouns lord-info")
                modDate.setAttribute("class", "mod-date lord-info")
                modInfo.setAttribute("class", "mod-info lord-info")
                modCharacter.setAttribute("class", "mod-character lord-info")

                modName2.innerHTML = `<span class="bolder">Name:</span><br> ${mod.name}`
                handle.innerHTML = `<span class="bolder">Discord Handle:</span><br> ${mod.handle}`
                modPosition.innerHTML = `<span class="bolder">Position:</span><br> ${mod.position}`
                modPronouns.innerHTML = `<span class="bolder">Pronouns:</span><br> ${mod.pronouns}`
                modDate.innerHTML = `<span class="bolder">Mod Since:</span><br> ${mod.mod_date}`
                modInfo.innerHTML = `<span class="bolder">Bio:</span><br> ${mod.bio}`
                modCharacter.innerHTML = `<span class="bolder">Character They Stan:</span><br> ${mod.character_stan}`

                divCon.addEventListener("click", openBio)

                divCon.appendChild(modImg)
                divCon.appendChild(modName)
                modBio.appendChild(modName2)
                modBio.appendChild(handle)
                modBio.appendChild(modPosition)
                modBio.appendChild(modPronouns)
                modBio.appendChild(modDate)
                modBio.appendChild(modInfo)
                modBio.appendChild(modCharacter)
                divCon.appendChild(modBio)
                lordCon.appendChild(divCon)
            })

            spinnerDiv.innerHTML = ""
        })
        .catch (error => {
            const lordCon = document.querySelector("#lords")
            const errorMessage = document.createElement("p")

            errorMessage.textContent = `Sorry, something went wrong. Please refresh the page or check your internet connection. If this problem persists, feel free to reach out! ${error}`

            lordCon.appendChild(errorMessage)
        })
    }

    function openBio() {
        if (this.classList.contains("clicked")) {
            this.style.transform = 'scaleY(0)'
            
            setTimeout(() => {
                this.style.transform = ''; // Reset transform
                this.classList.remove("clicked")
                this.classList.add("m-col-span-3")
                this.classList.remove("m-col-span-6")
            }, 500);
        } else {
            this.style.transform = 'scaleY(0)'
            
            setTimeout(() => {
                this.style.transform = ''; // Reset transform
                this.classList.add("clicked")
                this.classList.remove("m-col-span-3")
                this.classList.add("m-col-span-6")
            }, 500);
        }
    }

    modList()
}
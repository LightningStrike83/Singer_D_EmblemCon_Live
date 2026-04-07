export function randomizeCharacters() {
    const baseURL = "https://emblemcon.com/lightning-pages/guess-who/lumen/public/"
    const generalButton = document.querySelector("#randomize-general-button")
    const generalMode = document.querySelector("#general-mode")
    const guessWhoButton = document.querySelector("#randomize-guess-who-button")
    const guessWhoMode = document.querySelector("#guess-who-mode")
    const modeInform = document.querySelector("#mode-inform")
    const randomizeButton = document.querySelector("#randomize-character-button")

    let preloadResults = []

    function preloadCharacters() {
        fetch(`${baseURL}characters/all`)
        .then(response => response.json())
        .then(function(response) {
            preloadResults = response

            console.log(preloadResults)
        })
    }

    function openGeneralRandomizer() {
        guessWhoMode.style.display = "none"
        generalMode.style.display = "block"

        modeInform.textContent = "General Randomizer"
    }

    function openGuessWho() {
        guessWhoMode.style.display = "block"
        generalMode.style.display = "none"

        modeInform.textContent = "Guess Who"
    }

    preloadCharacters()
    openGeneralRandomizer()

    function randomizeCharacters() {
        const numberInput = document.querySelector("#randomize-number")
        let outputNumber = Number(numberInput.value)
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked')
        const randomizeResultsCon = document.querySelector("#randomize-results-con")

        randomizeResultsCon.innerHTML = ""

        let randomizeResults = []
        let checkedGames = []

        checkboxes.forEach(checkbox => {
            checkedGames.push(checkbox.dataset.game)
        })

        if (checkedGames.length === 0) {
            alert("Please select at least 1 game to randomize characters from. Thank you! :)")
            return
        }

        for (let l = 0; l < outputNumber; l++) {
            let characterCheck
            let attempts = 0

            while (true) {
                attempts++
                if (attempts > 1000) break

                let characterID = Math.floor(Math.random() * preloadResults.length)
                characterCheck = preloadResults[characterID]

                if (
                    checkedGames.includes(characterCheck.game) &&
                    !randomizeResults.some(c => c.id === characterCheck.id)
                ) {
                    break
                }
            }

            if (characterCheck) randomizeResults.push(characterCheck)
        }

        randomizeResults.forEach(character => {
            const div = document.createElement("div")
            const image = document.createElement("img")
            const name = document.createElement("p")

            image.src = `../images/character-randomizer/${character.id}.png`
            image.setAttribute("alt", `Image of ${character.name}`)
            name.textContent = character.name

            div.setAttribute("class", "randomizer-result-con")

            div.appendChild(image)
            div.appendChild(name)
            randomizeResultsCon.appendChild(div)
        })
    }

    generalButton.addEventListener("click", openGeneralRandomizer)
    guessWhoButton.addEventListener("click", openGuessWho)
    randomizeButton.addEventListener("click", randomizeCharacters)
}
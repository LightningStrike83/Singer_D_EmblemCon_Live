export function randomizeCharacters() {
    const baseURL = "https://emblemcon.com/lightning-pages/guess-who/lumen/public/"
    const generalButton = document.querySelector("#randomize-general-button")
    const generalMode = document.querySelector("#general-mode")
    const guessWhoButton = document.querySelector("#randomize-guess-who-button")
    const guessWhoMode = document.querySelector("#guess-who-mode")
    const modeInform = document.querySelector("#mode-inform")

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

    generalButton.addEventListener("click", openGeneralRandomizer)
    guessWhoButton.addEventListener("click", openGuessWho)
}
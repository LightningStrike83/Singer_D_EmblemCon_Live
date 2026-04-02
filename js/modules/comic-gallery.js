export function comicPopulation() {
    const leftArrow = document.querySelector("#comic-left-arrow")
    const rightArrow = document.querySelector("#comic-right-arrow")
    const comicImage = document.querySelector("#comic-con")
    const comicName = document.querySelector("#comic-name")
    const comicSelect = document.querySelector("#comic-select")
    const lbImage = document.querySelector("#lb-image")
    const baseURL = "https://emblemcon.com/lumen/public/"
    let c = ""

    function intialValueSet() {
        let initial = document.createElement("option")

        fetch(`${baseURL}comics`)
        .then(response => response.json())
        .then(function(response) {
            c = response.length-1
        })

        initial.textContent = "--Select A Comic--"

        comicSelect.appendChild(initial)
    }

    function comicContent() {
        fetch(`${baseURL}comics`)
        .then(response => response.json())
        .then(function(response) {
            comicImage.setAttribute("title", `${response[c].title}`)

            comicImage.style.backgroundImage = `url(/images/comics/${response[c].image})`
            lbImage.style.backgroundImage = `url(/images/comics/${response[c].image})`
            comicName.textContent = `${response[c].title}`
        })
    }

    function optionPopulation() {
        fetch(`${baseURL}comics`)
        .then(response => response.json())
        .then(function(response){
            response.forEach(data => {
                const option = document.createElement("option")
                option.textContent = `${data.number}. ${data.title}`
                option.value = `${data.number}`
                option.setAttribute("data-number", `${data.number}`)

                comicSelect.appendChild(option)
            })
        })
    }

    intialValueSet()
    comicContent()
    optionPopulation()

    function changeComic() {
        c = comicSelect.value-1

        comicContent()
    }

    function nextComic() {
        fetch(`${baseURL}comics`)
        .then(response => response.json())
        .then(function(response){
            c++
            comicSelect.value = c+1

            if (c >= response.length-1) {
                c = 0
            }

            comicSelect.value = c+1
        })

        comicContent()
    }

    function previousComic() {
        fetch(`${baseURL}comics`)
        .then(response => response.json())
        .then(function(response){
            c--

            if (c < 0) {
                c = response.length-1
            }

            comicSelect.value = c+1
        })

        comicContent()
    }

    function openComicBox() {
        const lbComic = document.querySelector("#comic-lb-con")

        lbComic.style.display = "grid"
        lbComic.style.visibility = "visible"
        lbComic.style.opacity = "1"
    }

    comicSelect.addEventListener("change", changeComic)
    leftArrow.addEventListener("click", previousComic)
    rightArrow.addEventListener("click", nextComic)
    comicImage.addEventListener("click", openComicBox)
}
export function reviewPopulation() {
    const baseURL = "https://emblemcon.com/lumen/public/"
    const rightArrows = document.querySelectorAll(".right-arrow")
    const leftArrows = document.querySelectorAll(".left-arrow")

    let rLength
    let dLength
    let r = 0
    let d = 0

    function reviewPopulate() {
        fetch(`${baseURL}reviews`)
        .then(response => response.json())
        .then(function(response){
            const reviewText = document.querySelector("#review-text")
            const reviewCredit = document.querySelector("#review-credit")

            rLength = response.length

            reviewText.textContent = response[r].review
            reviewCredit.textContent = `-${response[r].name}`
        })
        .catch(error => {

        })
    }

    function doodlePopulate() {
        fetch(`${baseURL}doodles`)
        .then(response => response.json())
        .then(function(response){
            const div = document.querySelector("#image-div")
            const img = document.createElement("img")
            const credit = document.querySelector("#artist-credit")

            div.innerHTML = ""

            dLength = response.length

            img.src = `images/featured_doodles/${response[d].image_path}`
            img.setAttribute("id", "image-display")
            img.setAttribute("alt", `Doodle from ${response[d].name}`)

            credit.textContent = `From: ${response[d].name}`

            div.appendChild(img)
        })
        .catch(error => {

        })
    }

    function increaseCount() {
        if (this.id === "rr-arrow") {
            r++

            if (r >= rLength) {
                r = 0
            }

            reviewPopulate()
        } else if (this.id === "dr-arrow") {
            console.log("boo")
            d++

            if (d >= dLength) {
                d = 0
            }

            doodlePopulate()
        }
    }

    function decreaseCount() {
        if (this.id === "rl-arrow") {
            r--

            console.log(r)

            if (r < 0) {
                r = rLength-1
            }

            reviewPopulate()
        } else if (this.id === "dl-arrow") {
            d--

            if (d < 0) {
                d = dLength-1
            }

            doodlePopulate()
        }
    }

    reviewPopulate()
    doodlePopulate()

    rightArrows.forEach(arrow => arrow.addEventListener("click", increaseCount))
    leftArrows.forEach(arrow => arrow.addEventListener("click", decreaseCount))
}
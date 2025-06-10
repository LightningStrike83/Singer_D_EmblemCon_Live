export function reviewPopulation() {
    const baseURL = "https://emblemcon.com/lumen/public/"
    const rightArrows = document.querySelectorAll(".right-arrow")
    const leftArrows = document.querySelectorAll(".left-arrow")
    const spinner = `<img id="spinner" src="../images/website_assets/shield.gif" alt="Loading image"><br> <p id="spinner-text">Loading...</p>`;

    let rLength
    let dLength
    let r = 0
    let d = 0

    function reviewPopulate() {
        const reviewText = document.querySelector("#review-text")
        reviewText.innerHTML = spinner
        
        fetch(`${baseURL}featured-reviews`)
        .then(response => response.json())
        .then(function(response){
            const reviewCredit = document.querySelector("#review-credit")

            rLength = response.length

            reviewText.innerHTML = response[r].review
            reviewCredit.textContent = `-${response[r].name}`
            
        })
        .catch(error => {
            const errorText = document.createElement("p")
            
            errorText.textContent = error
            
            reviewText.appendChild(errorText)
        })
    }

    function doodlePopulate() {
        const div = document.querySelector("#image-div")
        
        div.innerHTML = spinner
        
        fetch(`${baseURL}featured-doodles`)
        .then(response => response.json())
        .then(function(response){
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
            const errorText = document.createElement("p")
            
            errorText.textContent = error
            
            div.appendChild(errorText)
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
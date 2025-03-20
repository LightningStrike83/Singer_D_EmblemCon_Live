export function vaPopulation() {
    const baseURL = "https://emblemcon.com/lumen/public/"
    const spinner = `<img id="spinner" src="../images/website_assets/shield.gif" alt="Loading image"><br> <p id="spinner-text">Loading...</p>`;
    const spinnerCon = document.querySelector("#spinner-con")
    const previousGuestCon = document.querySelector("#previous-guests-images")

    function upcomingGuests() {
        spinnerCon.innerHTML = spinner
        fetch(`${baseURL}guest`)
        .then(response => response.json())
        .then(function(response){
            if (response.length > 0) {
                const upcomingGuestCon = document.querySelector("#upcoming-guests-con")
                const p = document.createElement("p")

                response.forEach(guest => {
                    const a = document.createElement("a")
                    const img = document.createElement("img")

                    a.setAttribute("class", "col-span-2 m-col-span-4 upcoming-guest")
                    a.setAttribute("target", "_blank")
                    a.href = `${guest.social_media}`
                    img.src = `../images/guests_va/${guest.image_path}`
                    img.setAttribute("alt", `Image of ${guest.name}`)

                    a.appendChild(img)
                    upcomingGuestCon.appendChild(a)
                })

                p.textContent = "Stay tuned for more announcements!"
                p.setAttribute("class", "col-span-full bolder")
                p.setAttribute("id", "stay-tuned")

                upcomingGuestCon.appendChild(p)
            }

            spinnerCon.innerHTML = ""
        })
        .catch(error => {
            const upcomingGuestCon = document.querySelector("#upcoming-guests-con")
            const errorMessage = document.createElement("p")

            errorMessage.setAttribute("class", "col-span-full")
            errorMessage.textContent = `Sorry, something went wrong. Please refresh the page or check your internet connection. If this problem persists, feel free to reach out! ${error}`

            upcomingGuestCon.appendChild(errorMessage)
        })
    }

    function previousGuests() {
        previousGuestCon.innerHTML = spinner
        previousGuestCon.style.flexDirection = "column"

        fetch(`${baseURL}previous-guest`)
        .then(response => response.json())
        .then(function(response){
            previousGuestCon.innerHTML = ""
            previousGuestCon.style.flexDirection = "row"

            response.forEach(guest => {
                const img = document.createElement("img")

                img.src = `../images/guests_va/${guest.image_path}`
                img.setAttribute("class", "col-span-1 m-col-span-2 previous-guest")
                img.setAttribute("alt", `Image of ${guest.name}`)
                previousGuestCon.appendChild(img)
            })
        })
        .catch(error => {
            const previousGuestCon = document.querySelector("#previous-guests-con")
            const errorMessage = document.createElement("p")

            errorMessage.setAttribute("class", "col-span-full")
            errorMessage.textContent = `Sorry, something went wrong. Please refresh the page or check your internet connection. If this problem persists, feel free to reach out! ${error}`

            previousGuestCon.appendChild(errorMessage)
        })
    }

    upcomingGuests()
    previousGuests()
}
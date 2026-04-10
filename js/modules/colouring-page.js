export function colouringFunctionality() {
    const image = document.querySelectorAll(".colouring-page-image")
    const bigCon = document.querySelector("#big-colouring-picture-con")

    function openBigPicture() {
        console.log(this)
        const bigPage = document.querySelector("#big-page")
        const img = document.createElement("img")
        const button = document.querySelector("#download-page-button")

        bigPage.innerHTML = ""

        img.src = this.src
        img.setAttribute("alt", this.alt)
        button.href = this.src
        button.setAttribute("download", `${this.dataset.tag}`)

        bigCon.style.visibility = "visible"
        bigCon.style.opacity = "1"

        bigPage.appendChild(img)
    }

    image.forEach(page => page.addEventListener("click", openBigPicture))
}
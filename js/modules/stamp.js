export function stampSwitch() {
    const stampButton = document.querySelectorAll(".stamp-button")

    function switchYear() {
        const image = document.querySelector("#stamp-image")
        const year = document.querySelector("#stamp-year")

        image.src = `images/stamp_rally/${this.dataset.stamp}.png`
        year.textContent = this.dataset.stamp
        image.setAttribute("alt", `Image of ${this.dataset.stamp} stamp rally`)
    }

    stampButton.forEach(button => button.addEventListener("click", switchYear))
}
export function stampPopulation() {
    const tocText = document.querySelector("#rally-toc-text")
    const table = document.querySelector("#rally-links")

    function openRallyTOC() {
        if (table.style.display === "flex") {
            table.style.display = "none"
            tocText.textContent = "Rally Table of Contents ▼"
        } else {
            table.style.display = "flex"
            tocText.textContent = "Rally Table of Contents ▲"
        }
    }

    function setInitialState() {
        table.style.display = "none"
    }

    setInitialState()

    tocText.addEventListener("click", openRallyTOC)
}
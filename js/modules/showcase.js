export function tableofContents() {
    const tocText = document.querySelector("#archive-toc p")

    function toggleToC() {
        const links = document.querySelector("#archive-links")
        const divider = document.querySelector("#archive-toc .line-divider")

        if (links.style.display !== "flex") {
            links.style.display = "flex"

            divider.style.display = "block"

            tocText.textContent = "Table of Contents ▲"
        } else {
            links.style.display = "none"

            divider.style.display = "none"

            tocText.textContent = "Table of Contents ▼"
        }
    }

    tocText.addEventListener("click", toggleToC)
}
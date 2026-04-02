export function footerScroll() {
    const topButton = document.querySelector(".to-top-con")

    function topScroll() {
        window.scrollTo(0, 0)
    }

    topButton.addEventListener("click", topScroll)
}
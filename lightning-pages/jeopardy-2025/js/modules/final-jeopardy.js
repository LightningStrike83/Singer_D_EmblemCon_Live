export function finalJeopardy() {
    const button = document.querySelector("#fj-text")

    function activateFinalJeopardy() {
        const fjQuestionCon = document.querySelector("#fj-question-con")
        const fjCon = document.querySelector("#fj-con-con")
        const fjCategory = document.querySelector("#fj-category-con")

        fjCon.style.display = "grid"
        fjCategory.style.display = "grid"
        fjQuestionCon.style.display = "grid"

        gsap.to(window, { duration: 1, scrollTo: (0)})
    }

    button.addEventListener("click", activateFinalJeopardy)

    document.addEventListener("DOMContentLoaded", (event) => {
        gsap.registerPlugin(ScrollToPlugin)});
}
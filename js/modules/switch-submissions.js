export function switchSubmissions() {
    const reviewCons = document.querySelectorAll(".feedback-switch")
    const doodleForm = document.querySelector("#doodle-form")
    const reviewForm = document.querySelector("#review-form-con")

    function switchDisplay() {

        if (this.dataset.submission === "doodle") {
            doodleForm.style.display = "block"
            reviewForm.style.display = "none"
        } else if (this.dataset.submission === "review") {
            doodleForm.style.display = "none"
            reviewForm.style.display = "flex"
        }
    }

    reviewCons.forEach(button => button.addEventListener("click", switchDisplay))
}
export function addForms() {
    const infoSelection = document.querySelector("#info-selection")

    function displayForm() {
        const value = infoSelection.value
        const form = document.querySelector(`#${value}-form`)
        const newForm = document.querySelectorAll(".new-form")
        
        newForm.forEach(form => form.style.display = "none")
        form.style.display = "grid"
    }

    infoSelection.addEventListener("change", displayForm)
}
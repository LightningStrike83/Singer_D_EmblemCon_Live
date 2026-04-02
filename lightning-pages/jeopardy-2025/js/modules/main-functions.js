export function mainFunctions() {
    const categoryTitles = document.querySelectorAll(".category-title-con")
    const questionCon = document.querySelectorAll(".question-text-con")
    const zoomCon = document.querySelector("#question-zoom-con")
    const nameSubmit = document.querySelectorAll(".name-submit")
    const moneySubmit = document.querySelectorAll(".money-submit")
    const closeButton = document.querySelectorAll(".close-button")

    function nameChange() {
        const parentCheck = this.parentNode 
        const nameValueCheck = parentCheck.querySelector(".name-value")
        const nameValue = nameValueCheck.value
        const dataCheck = parentCheck.dataset.player
        const nameTextCheck = document.querySelector(`#player-${dataCheck}`)
        const name = nameTextCheck.querySelector(".player-name")

        name.textContent = nameValue
        nameValueCheck.value = ""
    }

    function changeMoney() {
        const parentCheck = this.parentNode 
        const moneyValueCheck = parentCheck.querySelector(".money-value")
        const moneyValue = moneyValueCheck.value
        const dataCheck = parentCheck.dataset.player
        const moneyTextCheck = document.querySelector(`#player-${dataCheck}`)
        const moneySelect = moneyTextCheck.querySelector(".money-amount")
        const money = moneySelect.textContent
        const newValue = parseFloat(moneyValue)
        const oldValue = parseFloat(money)
        const newAmount = newValue + oldValue

        moneySelect.textContent = newAmount
        moneyValueCheck.value = ""
    }

    function revealCategory() {
        const title = this.querySelector(".category-title")

        title.style.display = "flex"
    }

    function revealQuestion() {
        const value = this.querySelector(".value")
        const question = this.querySelector(".question-text")
        const bigQuestion = document.querySelector("#big-question-text")
        const dd = this.dataset.dailydouble
        const dailyDouble = document.querySelector("#daily-double-con")
        
        value.style.display = "none"

        bigQuestion.innerHTML = question.innerHTML

        zoomCon.style.display = "grid"

        console.log(this)

        if (dd === "dd") {
            dailyDouble.style.display = "grid"
        }
    }

    function closeZoomCon() {
        this.parentNode.parentNode.style.display = "none"
    }

    categoryTitles.forEach(category => category.addEventListener("click", revealCategory))
    questionCon.forEach(question => question.addEventListener("click", revealQuestion))
    nameSubmit.forEach(button => button.addEventListener("click", nameChange))
    moneySubmit.forEach(button => button.addEventListener("click", changeMoney))
    closeButton.forEach(close => close.addEventListener("click", closeZoomCon))
}
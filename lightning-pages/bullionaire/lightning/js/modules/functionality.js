import { questions } from "./questions.js";

export function bullionaireFunctionality() {
    const leftArrow = document.querySelector("#left-arrow")
    const rightArrow = document.querySelector("#right-arrow")
    const questionText = document.querySelector("#question-text")
    const answer1 = document.querySelector("#a1")
    const answer2 = document.querySelector("#a2")
    const answer3 = document.querySelector("#a3")
    const answer4 = document.querySelector("#a4")
    const questionAnswers = document.querySelector("#questions-answers")
    let answers = document.querySelectorAll(".answer")
    let perk = document.querySelectorAll(".perk")
    let i = -1

    function setQuestion() {
        answers.forEach(answer => {
            answer.style.backgroundColor = "transparent"
        })

        questionText.textContent = questions[i].question
        answer1.textContent = questions[i].a1
        answer2.textContent = questions[i].a2
        answer3.textContent = questions[i].a3
        answer4.textContent = questions[i].a4

        questionAnswers.dataset.game = questions[i].data

        answers.forEach(answer => answer.addEventListener("click", incorrectAnswer))

        let rightAnswer = document.querySelector(`#${questions[i].right}`)
        rightAnswer.removeEventListener("click", incorrectAnswer)
        rightAnswer.addEventListener("click", correctAnswer)

        function incorrectAnswer() {
            this.style.opacity = "100%"
            this.style.backgroundColor = "red"

            answers.forEach(answer => answer.removeEventListener("click", incorrectAnswer))
            rightAnswer.removeEventListener("click", correctAnswer)
        }

        function correctAnswer() {
            let game = questionAnswers.dataset.game
            let gameCross = document.querySelector(`#${game}`)
            let correctSection = document.querySelector(`#${questions[i].right}`)
    
            gameCross.style.textDecoration = "line-through"
            correctSection.style.backgroundColor = "green"

            this.style.opacity = "100%"

            answers.forEach(answer => answer.removeEventListener("click", incorrectAnswer))
            rightAnswer.removeEventListener("click", correctAnswer)
        }
    }

    function previousQuestion() {
        i--;

        if (i < 0) {
            i = questions.length-1;
        }

        setQuestion()
    }

    function nextQuestion() {
        i++;

        if (i>=questions.length) {
            i = 0
        }

        setQuestion()
    }

    function selectedLifeline() {
        this.style.opacity = "20%"
    }

    leftArrow.addEventListener("click", previousQuestion)
    rightArrow.addEventListener("click", nextQuestion)
    perk.forEach(perk => perk.addEventListener("click", selectedLifeline))
}

const leftArrow = document.querySelector("#left-arrow")
const rightArrow = document.querySelector("#right-arrow")
const questionText = document.querySelector("#question")
let count = 0

question = [
    {
        question: "Welcome EmblemCon!",
        image: "emblemcon.png"
    },

    {
        question: "Which character do you think deserves a different ending? Happier is optional",
        image: "better-ending.jpg"
    },

    {
        question: "Sell me on your OTP",
        image: "ship.png"
    },

    {
        question: "Which character would trick sorority girls into summoning a demon?",
        image: "demon.jpg"
    },

    {
        question: "Which character (or characters) would show up to Area 51 raids the year after?",
        image: "area51.jpg"
    },

    {
        question: "Which character would start a fight in a Denny’s parking lot? (Credit to JaidenAnimations)",
        image: "dennys.jpg"
    },

    {
        question: "Which character would star in a sequel to “Cats”",
        image: "cats-poster.jpg"
    },

    {
        question: "Why didn’t Alear receive any sleep last night?",
        image: "Alear.png"
    },

    {
        question: "Who would you want Henry to swap bodies with?",
        image: "Henry.png"
    },

    {
        question: "Who’s cuter than Hortensia?",
        image: "Hortensia.png"
    },

    {
        question: "What’s the weirdest item(s) Byleth has found? (Returned is optional)",
        image: "Byleth.png"
    },

    {
        question: "What was the most baffling commission Ignatz has received?",
        image: "Ignatz.png"
    },

    {
        question: "FINAL QUESTION! Go find me an outfit for Rosado to wear. Cutest wins!",
        image: "Rosado.png"
    },
]

function questionApply() {
    const pictureArea = document.querySelector("#hostess-area")
    const img = document.createElement("img")

    pictureArea.innerHTML = ""

    questionText.textContent = question[count].question
    img.src = `images/${question[count].image}`
    img.setAttribute("id", "question-image")

    pictureArea.appendChild(img)
}

questionApply()

function nextQuestion() {
    count++

    console.log(count)

    if (count>=question.length) {
        count = 0
    }

    questionApply()
}

function previousQuestion() {
    count--

    if (count < 0) {
        count = question.length-1
    }

    questionApply()
}

leftArrow.addEventListener("click", previousQuestion)
rightArrow.addEventListener("click", nextQuestion)
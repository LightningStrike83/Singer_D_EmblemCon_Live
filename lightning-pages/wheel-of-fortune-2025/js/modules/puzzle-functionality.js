import { puzzleCreation } from "./puzzles.js";

export function puzzleFunctionality() {
    const boardPieces = document.querySelectorAll(".board-piece");
    const puzzles = puzzleCreation();
    const letter = document.querySelectorAll(".letter")
    const categoryText = document.querySelector("#category-content")
    const nextPuzzleText = document.querySelector("#next-puzzle-text")

    let puzzle = 0

    function puzzlePopulation() {
        let value = 1;
        boardPieces.forEach(piece => {
            const p = document.createElement("p");
            p.setAttribute("class", "active-letter")

            let content = puzzles[puzzle][`piece${value}`];

            if (content) {
                const div = document.createElement("div")

                p.textContent = content;

                piece.style.backgroundColor = "white";
                piece.style.position = "relative"

                div.setAttribute("class", "active-box")
                div.addEventListener("click", disappearBox)

                piece.appendChild(div)
                piece.appendChild(p);
            }
            value++;

            categoryText.textContent = puzzles[puzzle].category

            checkPunctuation()
        });

        document.body.style.backgroundImage= `url('../images/bgs/${puzzles[puzzle].background}')`
    }

    function disappearBox() {
        this.style.display = "none"
    }

    function checkPunctuation() {
        const activeLetter = document.querySelectorAll(".active-letter")

        activeLetter.forEach(letter => {
            const parentNode = letter.parentNode
            let div = parentNode.querySelector("div")

            if (letter.textContent === "'" || letter.textContent === "!" || letter.textContent === "," || letter.textContent === "?" || letter.textContent === "&") {
                div.style.display = "none"
            }
        })
    }

    puzzlePopulation();

    function changeBoxColour() {
        const letterFind = this.querySelector("p")
        const activeLetter = document.querySelectorAll(".active-letter")

        this.style.opacity = "70%"
        this.style.backgroundColor = "#656565"

        activeLetter.forEach(letter => {
            if (letterFind.textContent === letter.textContent) {
                const parentNode = letter.parentNode
                const boxFind = parentNode.querySelector(".active-box")

                boxFind.style.backgroundColor = "blue"
            }
        })
    }

    function loadNextPuzzle() {
        boardPieces.forEach(piece => {
            piece.replaceChildren();
            piece.style.backgroundColor = "#0A6B0D"
        });

        letter.forEach(letter => {
            letter.style.backgroundColor = "white"
            letter.style.opacity = "1"
        })
    
        puzzle++;
        puzzlePopulation();
    }

    letter.forEach(letter => letter.addEventListener("click", changeBoxColour))
    nextPuzzleText.addEventListener("click", loadNextPuzzle)
}

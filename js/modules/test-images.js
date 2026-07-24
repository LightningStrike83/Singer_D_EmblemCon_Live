export function testImages() {
    const baseURL = "https://emblemcon.com/lumen/public/"
    const testCon = document.querySelector("#test-home-con")

    fetch (`${baseURL}badge/characters`)
    .then(response => response.json())
    .then(function(response){
        response.forEach(character => {
            const div = document.createElement("div")
            const imagediv = document.createElement("div")
            const headshot = document.createElement("img")
            const doodle = document.createElement("img")
            const chibi = document.createElement("img")
            const name = document.createElement("p")

            headshot.src = `../images/badge-portraits/${character.id}.png`
            chibi.src = `../images/badge-chibis/${character.id}.png`
            headshot.setAttribute("class", "test-image")
            chibi.setAttribute("class", "test-image")
            doodle.src = `../images/badge-doodles/${character.id}.png`
            doodle.setAttribute("class", "test-image")

            imagediv.appendChild(headshot)
            imagediv.appendChild(chibi)
            imagediv.appendChild(doodle)
            imagediv.setAttribute("class", "test-image-div")
            div.appendChild(imagediv)

            name.textContent = character.name
            name.setAttribute("class", "test-name")
            div.appendChild(name)

            div.setAttribute("class", "test-div")

            testCon.appendChild(div)
        })
    })
}
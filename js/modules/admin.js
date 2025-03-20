export function adminFunctionality() {
    const baseURL = "https://emblemcon.com/lumen/public/"
    const select = document.querySelector("#info-selection")
    const listCon = document.querySelector("#list-con")
    const adminURL = "http://emblemcon.com/admin/"

    function databasePopulation() {
        const value = select.value
        const title = select.options[select.selectedIndex].innerText

        fetch(`${baseURL}${value}`)
        .then(response => response.json())
        .then(function(response){
            const h3 = document.createElement("h3")
            const infoHome = document.createElement("div") 

            console.log(response)

            listCon.innerHTML = ""

            h3.textContent = title

            infoHome.setAttribute("id", "info-home")

            response.forEach(response => {
                const div = document.createElement("div")

                div.setAttribute("class", "admin-info-div")

                if (value === 'artist') {
                    const number = document.createElement("p")
                    const link = document.createElement("p")
                    const actionCon = document.createElement("div")
                    const editButton = document.createElement("a")
                    const deleteButton = document.createElement("a")

                    number.textContent = `Artist: ${response.name}`
                    link.textContent = `Link: ${response.link}`

                    editButton.textContent = "Edit"
                    deleteButton.textContent = "Delete"

                    editButton.href = `${adminURL}edit-artist-form.php?id=${response.id}`
                    deleteButton.href = `${adminURL}delete-artist.php?id=${response.id}`

                    actionCon.appendChild(editButton)
                    actionCon.appendChild(deleteButton)
                    actionCon.setAttribute("class", "action-div")

                    div.appendChild(number)
                    div.appendChild(link)
                    div.appendChild(actionCon)
                }

                if (value === 'artist-continents') {
                    const number = document.createElement("p")
                    const continent = document.createElement("p")
                    const actionCon = document.createElement("div")
                    const editButton = document.createElement("a")
                    const deleteButton = document.createElement("a")

                    number.textContent = `Artist: ${response.name}`
                    continent.textContent = `Continent: ${response.continent}`

                    editButton.textContent = "Edit"
                    deleteButton.textContent = "Delete"

                    editButton.href = `${adminURL}edit-artist-continent-form.php?id=${response.id}`
                    deleteButton.href = `${adminURL}delete-artist-continent.php?id=${response.id}`

                    actionCon.appendChild(editButton)
                    actionCon.appendChild(deleteButton)
                    actionCon.setAttribute("class", "action-div")

                    div.appendChild(number)
                    div.appendChild(continent)
                    div.appendChild(actionCon)
                }

                if (value === 'comics') {
                    const number = document.createElement("p")
                    const comicPath = document.createElement("p")
                    const actionCon = document.createElement("div")
                    const editButton = document.createElement("a")
                    const deleteButton = document.createElement("a")

                    number.textContent = `Comic Number ${response.number}: ${response.title}`
                    comicPath.textContent = `Comic Path: ${response.image}`

                    editButton.textContent = "Edit"
                    deleteButton.textContent = "Delete"

                    editButton.href = `${adminURL}edit-comics-form.php?id=${response.id}`
                    deleteButton.href = `${adminURL}delete-comics.php?id=${response.id}`

                    actionCon.appendChild(editButton)
                    actionCon.appendChild(deleteButton)
                    actionCon.setAttribute("class", "action-div")

                    div.appendChild(number)
                    div.appendChild(comicPath)
                    div.appendChild(actionCon)
                }

                if (value === 'commission') {
                    const number = document.createElement("p")
                    const link = document.createElement("p")
                    const actionCon = document.createElement("div")
                    const editButton = document.createElement("a")
                    const deleteButton = document.createElement("a")

                    number.textContent = `Artist: ${response.name}`
                    link.textContent = `Link: ${response.link}`

                    editButton.textContent = "Edit"
                    deleteButton.textContent = "Delete"

                    editButton.href = `${adminURL}edit-commission-form.php?id=${response.id}`
                    deleteButton.href = `${adminURL}delete-commission.php?id=${response.id}`

                    actionCon.appendChild(editButton)
                    actionCon.appendChild(deleteButton)
                    actionCon.setAttribute("class", "action-div")

                    div.appendChild(number)
                    div.appendChild(link)
                    div.appendChild(actionCon)
                }

                if (value === 'continents') {
                    const number = document.createElement("p")
                    const actionCon = document.createElement("div")
                    const editButton = document.createElement("a")
                    const deleteButton = document.createElement("a")

                    number.textContent = `${response.id}. ${response.continent}`

                    editButton.textContent = "Edit"
                    deleteButton.textContent = "Delete"

                    editButton.href = `${adminURL}edit-continent-form.php?id=${response.id}`
                    deleteButton.href = `${adminURL}delete-continent.php?id=${response.id}`

                    actionCon.appendChild(editButton)
                    actionCon.appendChild(deleteButton)
                    actionCon.setAttribute("class", "action-div")

                    div.appendChild(number)
                    div.appendChild(actionCon)
                }

                if (value === 'exhibitor') {
                    const number = document.createElement("p")
                    const link = document.createElement("p")
                    const actionCon = document.createElement("div")
                    const editButton = document.createElement("a")
                    const deleteButton = document.createElement("a")

                    number.textContent = `Exhibitor: ${response.name}`
                    link.textContent = `Link: ${response.link}`

                    editButton.textContent = "Edit"
                    deleteButton.textContent = "Delete"

                    editButton.href = `${adminURL}edit-exhibitor-form.php?id=${response.id}`
                    deleteButton.href = `${adminURL}delete-exhibitor.php?id=${response.id}`

                    actionCon.appendChild(editButton)
                    actionCon.appendChild(deleteButton)
                    actionCon.setAttribute("class", "action-div")

                    div.appendChild(number)
                    div.appendChild(link)
                    div.appendChild(actionCon)
                }

                if (value === 'guest') {
                    const number = document.createElement("p")
                    const link = document.createElement("p")
                    const image = document.createElement("p")
                    const actionCon = document.createElement("div")
                    const editButton = document.createElement("a")
                    const deleteButton = document.createElement("a")

                    number.textContent = `Guest: ${response.name}`
                    link.textContent = `Link: ${response.social_media}`
                    image.textContent = `Image Path: ${response.image_path}`

                    editButton.textContent = "Edit"
                    deleteButton.textContent = "Delete"

                    editButton.href = `${adminURL}edit-guest-form.php?id=${response.id}`
                    deleteButton.href = `${adminURL}delete-guest.php?id=${response.id}`

                    actionCon.appendChild(editButton)
                    actionCon.appendChild(deleteButton)
                    actionCon.setAttribute("class", "action-div")

                    div.appendChild(number)
                    div.appendChild(link)
                    div.appendChild(image)
                    div.appendChild(actionCon)
                }

                if (value === 'mod') {
                    const number = document.createElement("p")
                    const handle = document.createElement("p")
                    const image = document.createElement("p")
                    const position = document.createElement("p")
                    const date = document.createElement("p")
                    const bio = document.createElement("p")
                    const pronouns = document.createElement("p")
                    const character = document.createElement("p")
                    const actionCon = document.createElement("div")
                    const editButton = document.createElement("a")
                    const deleteButton = document.createElement("a")

                    number.textContent = `Mod: ${response.name}`
                    handle.textContent = `Discord Handle: ${response.handle}`
                    image.textContent = `Image Path: ${response.pic}`
                    position.textContent = `Position: ${response.position}`
                    date.textContent = `Date: Since ${response.mod_date}`
                    bio.textContent = `Bio: ${response.bio}`
                    pronouns.textContent = `Pronouns: ${response.pronouns}`
                    character.textContent = `Character They Stan: ${response.character_stan}`

                    editButton.textContent = "Edit"
                    deleteButton.textContent = "Delete"

                    editButton.href = `${adminURL}edit-mod-form.php?id=${response.id}`
                    deleteButton.href = `${adminURL}delete-mod.php?id=${response.id}`

                    actionCon.appendChild(editButton)
                    actionCon.appendChild(deleteButton)
                    actionCon.setAttribute("class", "action-div")

                    div.appendChild(number)
                    div.appendChild(handle)
                    div.appendChild(image)
                    div.appendChild(position)
                    div.appendChild(date)
                    div.appendChild(bio)
                    div.appendChild(pronouns)
                    div.appendChild(character)
                    div.appendChild(actionCon)
                }

                if (value === 'panel') {
                    const number = document.createElement("p")
                    const day = document.createElement("p")
                    const year = document.createElement("p")
                    const time = document.createElement("p")
                    const desc = document.createElement("p")
                    const actionCon = document.createElement("div")
                    const editButton = document.createElement("a")
                    const deleteButton = document.createElement("a")

                    number.textContent = `${response.id}. ${response.title}`
                    day.textContent = `Day: ${response.day}`
                    year.textContent = `Year: ${response.year}`
                    time.textContent = `Time: ${response.time}`
                    desc.textContent = `Description: ${response.description}`

                    editButton.textContent = "Edit"
                    deleteButton.textContent = "Delete"

                    editButton.href = `${adminURL}edit-panel-form.php?id=${response.id}`
                    deleteButton.href = `${adminURL}delete-panel.php?id=${response.id}`

                    actionCon.appendChild(editButton)
                    actionCon.appendChild(deleteButton)
                    actionCon.setAttribute("class", "action-div")

                    div.appendChild(number)
                    div.appendChild(day)
                    div.appendChild(year)
                    div.appendChild(time)
                    div.appendChild(desc)
                    div.appendChild(actionCon)
                }

                if (value === 'previous-guest') {
                    const number = document.createElement("p")
                    const image = document.createElement("p")
                    const actionCon = document.createElement("div")
                    const editButton = document.createElement("a")
                    const deleteButton = document.createElement("a")

                    number.textContent = `Previous Guest: ${response.name}`
                    image.textContent = `Image Path: ${response.image_path}`

                    editButton.textContent = "Edit"
                    deleteButton.textContent = "Delete"

                    editButton.href = `${adminURL}edit-previous-guest-form.php?id=${response.id}`
                    deleteButton.href = `${adminURL}delete-previous-guest.php?id=${response.id}`

                    actionCon.appendChild(editButton)
                    actionCon.appendChild(deleteButton)
                    actionCon.setAttribute("class", "action-div")

                    div.appendChild(number)
                    div.appendChild(image)
                    div.appendChild(actionCon)
                }

                if (value === 'update') {
                    const number = document.createElement("p")
                    const image = document.createElement("p")
                    const body = document.createElement("p")
                    const link = document.createElement("p")
                    const actionCon = document.createElement("div")
                    const editButton = document.createElement("a")
                    const deleteButton = document.createElement("a")

                    number.textContent = `${response.id}. ${response.title}`
                    image.textContent = `Image: ${response.image_path}`
                    body.textContent = `Body: ${response.body}`
                    link.textContent = `Link: ${response.link}`

                    editButton.textContent = "Edit"
                    deleteButton.textContent = "Delete"

                    editButton.href = `${adminURL}edit-update-form.php?id=${response.id}`
                    deleteButton.href = `${adminURL}delete-update.php?id=${response.id}`

                    actionCon.appendChild(editButton)
                    actionCon.appendChild(deleteButton)
                    actionCon.setAttribute("class", "action-div")

                    div.appendChild(number)
                    div.appendChild(image)
                    div.appendChild(link)
                    div.appendChild(body)
                    div.appendChild(actionCon)
                }

                if (value === 'users') {
                    const number = document.createElement("p")
                    const actionCon = document.createElement("div")
                    const editButton = document.createElement("a")
                    const deleteButton = document.createElement("a")

                    number.textContent = `${response.id}. ${response.username}`

                    editButton.textContent = "Edit"
                    deleteButton.textContent = "Delete"

                    editButton.href = `${adminURL}edit-user-form.php?id=${response.id}`
                    deleteButton.href = `${adminURL}delete-user.php?id=${response.id}`

                    actionCon.appendChild(editButton)
                    actionCon.appendChild(deleteButton)
                    actionCon.setAttribute("class", "action-div")

                    div.appendChild(number)
                    div.appendChild(actionCon)
                }

                infoHome.appendChild(div)
            })

            listCon.appendChild(h3)
            listCon.appendChild(infoHome)
        })
    }

    select.addEventListener("change", databasePopulation)
}
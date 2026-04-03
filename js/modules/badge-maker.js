export function badgeMaker() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get("access_token");
    const baseURL = "https://emblemcon.com/lumen/public/"

    let badgeSource = ""

    if (token) {
        fetch("https://discord.com/api/users/@me", {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => res.json())
        .then(user => {
            const badgeButton = document.querySelector("#badge-button")
            const avatar = document.querySelector("#badge-avatar")
            const username = document.querySelector("#badge-username")

            badgeButton.innerText = "Discord Connected"

            avatar.style.backgroundImage = `url(https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png)`
            username.textContent = user.username

            populateLists()

            // document.body.innerHTML = `
            // <h1>${user.username}</h1>
            // <img src="https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=256">
            // `;
        });
    }

    async function populateLists() {
        const characterSelects = document.querySelectorAll(".badge-character-select")

        fetch (`${baseURL}badge/characters`)
        .then(response => response.json())
        .then(function(response){
            characterSelects.forEach(select => {
                response.forEach(character => {
                    const option = document.createElement("option")

                    option.setAttribute("data-id", character.id)
                    option.innerText = character.name

                    select.appendChild(option)
                })
            })
        })

        characterSelects.forEach(select => {
            select.addEventListener("change", updateBadge)
        })
    }

    function convertList() {
        selectList.forEach(select => {
            const $select = $(select);

                if (!$select.hasClass("select2-hidden-accessible")) {
                $select.select2();
                }

                $select.off("select2:select");

                $select.on("select2:select", updateBadge);
            });

        applySelect2iOSTouchFix();
    }

    function applySelect2iOSTouchFix() {
        $(".select2-container")
            .off("touchstart")
            .on("touchstart", function (e) {
            e.stopPropagation();
            })
            .siblings("select")
            .off("select2:open")
            .on("select2:open", function () {
            $(".select2-results__options")
                .off("touchstart")
                .on("touchstart", "li", function (e) {
                e.stopPropagation();
                });
        });
    }

    function updateBadge() {
        const dataLink = this.id
        const imageHomes = document.querySelectorAll(".image-home")

        imageHomes.forEach(home => {
            const imageLink = home.dataset.link
            const image = home.querySelector("img")

            if (dataLink === imageLink) {
                image.src = `../images/${badgeSource}/${this.options[this.selectedIndex].value}.png`
            }
        })
    }
}
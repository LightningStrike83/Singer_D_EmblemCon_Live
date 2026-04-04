export function badgeMaker() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get("access_token");
    const baseURL = "https://emblemcon.com/lumen/public/"
    const radioLabel = document.querySelectorAll(".radio-label")
    const chibiSelectCon = document.querySelector("#chibi-select-con")
    const nameButton = document.querySelector("#name-button")
    const typeCon = document.querySelector("#type-select-con")
    const badgeClose = document.querySelector("#badge-close")
    const previewButton = document.querySelector("#preview-badge")
    const downloadButtons = document.querySelectorAll(".download-button")

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
            const divide1 = document.querySelector("#divide-1")

            badgeButton.innerText = "Discord Connected"

            avatar.style.backgroundImage = `url(https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png)`
            username.textContent = user.username

            typeCon.style.display = "block"
            divide1.style.display = "block"

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

        convertList()
    }

    function convertList() {
        const selectList = document.querySelectorAll("select")

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

            console.log(this.options[this.selectedIndex].dataset.id)

            if (dataLink === imageLink) {
                const parentNode = image.parentNode

                image.src = `../images/${badgeSource}/${this.options[this.selectedIndex].dataset.id}.png`
                image.setAttribute("alt", `Badge image of ${this.options[this.selectedIndex].innerText}`)

                parentNode.style.display = "flex"

            }
        })
    }

    function changeImageType() {
        const type = this.dataset.type

        badgeSource = type

        if (chibiSelectCon.style.display !== "block") {
            const divide2 = document.querySelector("#divide-2")
            const divide3 = document.querySelector("#divide-3")
            const divide4 = document.querySelector("#divide-4")
            const nameCon = document.querySelector("#custom-name-con")
            const finalizeCon = document.querySelector("#finalize-con")

            chibiSelectCon.style.display = "block"
            nameCon.style.display = "block"
            finalizeCon.style.display = "block"

            divide2.style.display = "block"
            divide3.style.display = "block"
            divide4.style.display = "block"
        }
    }

    function submitNewName() {
        const nameInput = document.querySelector("#custom-name")
        const username = document.querySelector("#badge-username")
        const submitMessage = document.querySelector("#submit-message")

        username.textContent = nameInput.value

        submitMessage.textContent = "Submitted!"
    }

    function closePreview() {
        const badgeCreationCon = document.querySelector("#badge-creation-con")

        badgeCreationCon.style.display = "none"
    }

    function openPreview() {
        const badgeCreationCon = document.querySelector("#badge-creation-con")

        badgeCreationCon.style.display = "grid"
    }

    function downloadBadge() {
        const badgeCreationCon = document.querySelector("#badge-creation-con")

        if (badgeCreationCon.style.display !== "grid") {
            badgeCreationCon.style.display = "grid"
        }

        const scale = 3; // increase for more quality (2–4 is good)
        const node = document.querySelector("#emblemcon-badge");
        const rect = node.getBoundingClientRect();

        domtoimage.toPng(node, {
            bgcolor: null,
            quality: 1,
            width: rect.width * scale,
            height: rect.height * scale,
            style: {
                transform: `scale(${scale})`,
                transformOrigin: "top left",
                width: `${rect.width}px`,
                height: `${rect.height}px`
            }
        })
        .then(dataUrl => {
            const link = document.createElement('a');
            link.download = 'emblemcon-badge-2026.png';
            link.href = dataUrl;
            link.click();

            badgeCreationCon.style.display = "none"
        })
        .catch(error => {
            console.error('Error exporting div:', error);
        });
    }

    radioLabel.forEach(radio => radio.addEventListener("click", changeImageType))
    nameButton.addEventListener("click", submitNewName)
    badgeClose.addEventListener("click", closePreview)
    previewButton.addEventListener("click", openPreview)
    downloadButtons.forEach(button => button.addEventListener("click", downloadBadge))
}
export function galleryFunctionality() {
    const leftArrow = document.querySelector("#asset-left-arrow")
    const rightArrow = document.querySelector("#asset-right-arrow")
    const galleryImage = document.querySelector("#gallery-image")

    let i = 0

    let images = [
        {
            description: "Badge for attendees to EmblemCon (2025)",
        },

        {
            description: "Live gameplay of various games in the franchise, sometimes with twists! (2025 ft. Mysti & ???)",
        },

        {
            description: "Discussions with other fans of the franchise! (2025)",
        },

        {
            description: "Live voice actor discussions and Q & A's! (2025 ft. Sarah Blandy)",
        },

        {
            description: "Where artists can share their merch for attendees to easily find and purchase! (2025 ft. Kagayaki Cafe)",
        },

        {
            description: "Artists coming together to draw characters from the franchise (2025)",
        },

        {
            description: "Stamp Rally fun, with major thanks to participating artists for their generousity (2025)",
        },

        {
            description: "Live discussion panels for others to present their ideas and have others listen or weigh in! (2025 ft. Okke & Sothe)",
        },

        {
            description: "Fun and chaos is sure to ensue! (2025 ft. Christian La Monte)",
        },

        {
            description: "Special panels and gameshows galore! (2025 ft. Lightning & Ducessa)",
        },

        {
            description: "A safe place to share and talk cosplay! (2025 ft. erica)",
        },

        {
            description: "You can host your own panels in cosplay (and in character too)! (2025 ft. Yu Puffin)",
        },

         {
            description: "Live game demonstrations! (2025 ft. Flamingo & TheKimersonShow)",
        },

        {
            description: "Surprises and freebies found throughout the convention! (2025 ft. Robin)",
        },

        {
            description: "Live music performances! (2025 ft. Flautist Acacia)",
        },

        {
            description: "You're always welcome to submit ideas from other conventions to share with EmblemCon! (2025 ft. Weebwitched)",
        },

        {
            description: "Share your collection with other fans! (2025 ft. Hati)",
        },

        {
            description: "Make and share your art with others! (2025 ft. RawrCanDraw)",
        },

        {
            description: "With panels that return each year from our regular panelists (2025 ft. Streets™)",
        },

        {
            description: "Giving platforms for new panelists to share their ideas and spread their wings! (2025 ft. Lady Noriko)",
        },

        {
            description: "Chat with artists and show your support! (2025)",
        },

        {
            description: "The yearly Codenames game where the mod team come together for a night of fun! (2025)",
        },

        {
            description: "Supportive and welcoming messaging from the mod team! (2025 ft. Daniel)",
        },

        {
            description: "Create and share your memes! (2025)",
        },

        {
            description: "Where everyone has fun and always looks forward to the next year! (2025)",
        },

        {
            description: "Where some want to maximize the experience until full closing of the convention (2025)",
        },
    ]

    function galleryPopulation() {
        const assetDesc = document.querySelector("#asset-desc")

        galleryImage.src = `../images/gallery/${i+1}.png`
        galleryImage.setAttribute("alt", `${images[i].description}`)

        assetDesc.textContent = images[i].description
    }

    function increaseCount() {
        i++

        if (i >= images.length) {
            i = 0
        }

        galleryPopulation()
    }

    function decreaseCount() {
        i--

        if (i < 0) {
            i = images.length-1
        }

        galleryPopulation()
    }

    leftArrow.addEventListener("click", decreaseCount)
    rightArrow.addEventListener("click", increaseCount)
}
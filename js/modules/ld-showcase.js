export function ldContent() {
    const ldCon = document.querySelector("#ld-showcase-con")

    let ldInfo = [
        {
            title: "Wheel of Fortune",
            image: "wof.png",
            desc: "Using Adobe XD, Lightning and Ducessa made interactive puzzles for the EmblemCon mods to solve",
            link: "https://xd.adobe.com/view/d16ab1a5-e88d-4ea2-ae26-fb045bb1921c-8439/screen/98695c11-d32a-4e89-bc51-cd1bdb277eba/?fullscreen",
            link2: "https://xd.adobe.com/view/3ec3dbbc-f05b-453d-bab0-1c10d45e8717-6b90/",
        },

        {
            title: "Jeopardy",
            image: "jeopardy.png",
            desc: "In Photoshop, Lightning and Ducessa created a plethora of Fire Emblem themed trivia questions to stump the mods",
            link: "https://drive.google.com/drive/u/0/folders/1SxqUFfoD2wHGU_sjjzbKXjFxiU0oxxi9",
        },

        {
            title: "Who Wants To Be A Bullionaire",
            image: "wwtbab.png",
            desc: "Per Bard's suggestion, Lightning and Ducessa created a series of questions to put each other in the hot seat and see who could be a Bullionaire",
            link: "../lightning-pages/bullionaire/ducessa/index.html",
            link2: "../lightning-pages/bullionaire/lightning/index.html",
        },

        {
            title: "Find The Fake FEH Art",
            image: "fake-feh.png",
            desc: "Based off Nokimon's Find the Fake Shiny series, Lightning created a series of fake FEH arts to stump mods and Ducessa",
            link: "https://docs.google.com/presentation/d/1VnQb4pap5NGHE2LJUi5h4KCQLY5xUb9CVDfIenHupBw/edit#slide=id.p",
        },

        {
            title: "Arbitrary Gameshow",
            image: "arbitrary.png",
            desc: "Based off JaidenAnimation's gameshows, Lightning created a series of questions for the mods and Ducessa to debate and dole out points however she sees fit",
            link: "../lightning-pages/arbitrary-gameshow/index.html",
        },

        // {
        //     title: "Guess Who",
        //     image: "guess-who.png",
        //     desc: "A browser-based Guess Who game featuring all the characters from Fire Emblem",
        //     link: "../lightning-pages/guess-who/index.html"
        // }
    ]

    function ldContentPopulation() {
        ldInfo.forEach((info, index) => {
            const div = document.createElement("div");
            const title = document.createElement("h3");
            const desc = document.createElement("p");
            const imageDiv = document.createElement("div");
            const contentDiv = document.createElement("div");
            const link = document.createElement("a");
            const divider = document.createElement("div");
            const infoDiv = document.createElement("div");
            const link2 = document.createElement("a");
            const link3 = document.createElement("a");
        
            div.setAttribute("class", "ld-project detail-section");
            title.setAttribute("class", "ld-title");
            imageDiv.setAttribute("class", "ld-image");
            imageDiv.setAttribute("title", `${info.title}`);
            link.setAttribute("class", "ld-link");
            link2.setAttribute("class", "ld-link")
            contentDiv.setAttribute("class", "ld-content");
            desc.setAttribute("class", "ld-desc");
            divider.setAttribute("class", "line-divider");
        
            title.textContent = info.title;
            desc.textContent = info.desc;
            imageDiv.style.backgroundImage = `url(../images/ld_projects/${info.image})`;

            infoDiv.style.display = "flex"
            infoDiv.style.flexDirection = "column"

            if (index === 0) {
                link.href = info.link;
                link.setAttribute("target", "_blank");
                link.textContent = "View the 2024 Puzzles >>";

                link2.href = info.link2;
                link2.setAttribute("target", "_blank");
                link2.textContent = "View the 2023 Puzzles >>";
                link2.style.order = "10";
                infoDiv.appendChild(link2);
            } else if (index === 2) {
                link.href = info.link;
                link.setAttribute("target", "_blank");
                link.textContent = "View Ducessa's Game >>";

                link2.href = info.link2;
                link2.setAttribute("target", "_blank");
                link2.textContent = "View Lightning's Game >>";
                link2.style.order = "10";
                infoDiv.appendChild(link2);
            } else {
                link.href = info.link;
                link.setAttribute("target", "_blank");
                link.textContent = "View the project >>";
            }
        
            contentDiv.appendChild(imageDiv);
            infoDiv.appendChild(desc);
            contentDiv.appendChild(infoDiv);
            infoDiv.appendChild(link);
            div.appendChild(title);
            div.appendChild(divider);
            div.appendChild(contentDiv);
            ldCon.appendChild(div);
        });
                
    }

    ldContentPopulation()
}
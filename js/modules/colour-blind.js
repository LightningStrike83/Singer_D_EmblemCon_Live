export function colourBlindSchedule() {
    const toggle = document.querySelector("#cb-toggle")
    const scheduleIndicator = document.querySelector("#toggle-indicator")
    const currentTheme = localStorage.getItem("theme");

    let theme = currentTheme || "default";

    function checkTheme() {
        if (theme === "default") {
            setTimeout(() => {
            toggleScheduleColours()
            }, "500");
        }
    }

    function toggleScheduleColours() {
        const panelDiv = document.querySelectorAll(".panel-div")

        if (scheduleIndicator.textContent === "Off") {
            toggle.src = "../images/website_assets/toggle-on.svg"
            scheduleIndicator.textContent = "On"

            panelDiv.forEach(panel => {
             if (panel.dataset.type === "m") {
                panel.style.background = "linear-gradient( #0f1ca1, #01034c)"
            } else if (panel.dataset.type === "g") {
                panel.style.background = "linear-gradient( #298933, #032404)"
            } else if (panel.dataset.type === "p") {
                panel.style.background = "linear-gradient( #a78d2e, #523607)"
            } else if (panel.dataset.type === "v") {
                panel.style.background = "linear-gradient( #95032d, #3d0003)"
            }

           })

           theme = "default"
        } else if (scheduleIndicator.textContent === "On") {
            toggle.src = "../images/website_assets/toggle-off.svg"
            scheduleIndicator.textContent = "Off"

           panelDiv.forEach(panel => {
                panel.style.background = "transparent"
           }) 
           
           theme = "colour-blind"
        }

        localStorage.setItem("theme", theme);
    }

    toggle.addEventListener("click", toggleScheduleColours)
    window.addEventListener("load", checkTheme);
}
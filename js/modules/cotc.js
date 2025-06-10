export function yearSwitch() {
    const year = document.querySelectorAll(".year")

    function changeYear() {
        const yearCon = document.querySelectorAll(".winner-con")
        const yearSelect = this.dataset.cotc
        const thisYear = document.querySelector(`#winners-${yearSelect}`)

        yearCon.forEach(con => {
            con.style.display = "none"
        })

        thisYear.style.display = "block"
    }

    year.forEach(year => year.addEventListener("click", changeYear))
}
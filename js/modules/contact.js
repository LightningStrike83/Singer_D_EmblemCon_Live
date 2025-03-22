export function contactForm() {
    const contactButton = document.querySelectorAll(".contact-switch")
    const formCon = document.querySelector("#contact-form-con")
    const helpDesk = document.querySelector("#help-desk-info")

    const privacyCheckbox = document.querySelector("#privacy")
    const form = document.querySelector("#contact-form");
    const errorMessage = document.querySelector("#error-text");
    const errorCon = document.querySelector("#other-errors");
    const spinner = `<img id="spinner" src="../images/website_assets/shield.gif" alt="Loading image"><br> <p id="spinner-text">Sending...</p>`;

    function switchMethod() {
        if (this.dataset.method === "form") {
            formCon.style.display = "flex"
            helpDesk.style.display = "none"
        } else if (this.dataset.method === "help") {
            formCon.style.display = "none"
            helpDesk.style.display = "flex"
        }
    }

    function submitForm(event) {
        event.preventDefault();
    
        errorCon.innerHTML = spinner;
        const url = "../includes/contact-form.php";
        const formData = new URLSearchParams(new FormData(event.target)).toString();
    
        if (privacyCheckbox.checked === true) {
            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: formData
            })
                .then(response =>
                    response.json().catch(() => {
                        throw new Error("Invalid JSON response");
                    })
                )
                .then(responseText => {
                    errorCon.innerHTML = "";
        
                    if (responseText.errors) {
                        const errors = Object.values(responseText.errors);
        
                        errors.forEach(error => {
                            const p = document.createElement("p");
                            p.textContent = error;
                            errorCon.appendChild(p);
                        });
                    } else {
                        form.reset();
                        errorMessage.textContent = "Thank you for your message! We'll be in contact as soon as possible!";
                    }
                })
                .catch(error => {
                    errorMessage.textContent = `Sorry, something went wrong! ${error}`;
                    errorCon.innerHTML = "";
                    console.log(error)
                });
        } else {
            errorMessage.textContent = `Please accept the privacy policy before submitting`;
            errorCon.innerHTML = "";
        }
    }

    contactButton.forEach(button => button.addEventListener("click", switchMethod))
    form.addEventListener("submit", submitForm);
}
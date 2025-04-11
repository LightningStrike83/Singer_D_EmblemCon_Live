export function submitReview() {
    const baseURL = "https://emblemcon.com/lumen/public/"
    const submitDoodle = document.querySelector("#submit-doodle")
    const submitReview = document.querySelector("#submit-review")

    const spinner = `<img id="spinner" src="../images/website_assets/shield.gif" alt="Loading image"><br> <p id="spinner-text">Sending...</p>`;

    function reviewSubmit(event) {
        const reviewErrorCon = document.querySelector("#error-message-review");
        const spinnerBoxR = reviewErrorCon.querySelector("#other-errors")
        const errorMessage = reviewErrorCon.querySelector("#error-text")
        const reviewForm = document.querySelector("#review-form")
        const reviewPrivacy = reviewForm.querySelector("#privacy")
        let consentCheck = document.querySelector("#consent")
        const url = "../includes/review.php";

        let consentValue = ""

        if (consentCheck.checked === true) {
            consentValue = "y"
        } else {
            consentValue = "n"
        }

        event.preventDefault()

        spinnerBoxR.innerHTML = ""

        const formData = {
            name: reviewForm.querySelector("#name").value,
            review: reviewForm.querySelector("#message").value,
            consent: consentValue
        }

        if (reviewPrivacy.checked === true) {
            spinnerBoxR.innerHTML = spinner

            const urlEncodedData = new URLSearchParams(formData).toString();

            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: urlEncodedData
            })
                .then(response =>
                    response.json().catch(() => {
                        throw new Error("Invalid JSON response");
                    })
                )
                .then(responseText => {
                    spinnerBoxR.innerHTML = "";
        
                    if (responseText.errors) {
                        const errors = Object.values(responseText.errors);
        
                        errors.forEach(error => {
                            const p = document.createElement("p");
                            p.textContent = error;
                            spinnerBoxR.appendChild(p);
                        });
                    } else {
                        reviewForm.reset();
                        errorMessage.textContent = "Thank you for your review!";
                    }
                })
                .catch(error => {
                    errorMessage.textContent = `Sorry, something went wrong! ${error}`;
                    reviewErrorCon.innerHTML = "";
                });
        } else {
            spinnerBoxR.innerHTML = `<p>Please accept the privacy policy before submitting</p>`;
        }
    }

    function doodleSubmit(event) {
        const doodleErrorCon = document.querySelector("#error-message-doodle")
        const doodlePrivacy = document.querySelector("#privacy-con-doodle")
        const doodlePrivacyCheck = doodlePrivacy.querySelector("#privacy")
        const spinnerBoxD = doodleErrorCon.querySelector("#other-errors")
        const errorMessage = doodleErrorCon.querySelector("#error-text")
        const imageExport = document.querySelector(".drawing-board")
        const board = document.querySelector("#drawing-board")
        const doodleForm = document.querySelector("#doodle-form")
        const consentDoodleCheck = doodleForm.querySelector("#consent-doodle")
        const consentNameCheck = doodleForm.querySelector("#consent-name")
        const nameCon = document.querySelector("#name-con")
        const url = "../includes/doodle.php";
        
        let consentDoodleValue = ""
        let consentNameValue = ""

        if (consentDoodleCheck.checked === true) {
            consentDoodleValue = "y"
        } else {
            consentDoodleValue = "n"
        }

        if (consentNameCheck.checked === true) {
            consentNameValue = "y"
        } else {
            consentNameValue = "n"
        }

        event.preventDefault()

        spinnerBoxD.innerHTML = ""

        if (doodlePrivacyCheck.checked === true) {
            spinnerBoxD.innerHTML = spinner

            board.style.border = "none"

            html2canvas(imageExport).then((canvas) => {
                const dataUrl = canvas.toDataURL("image/png");

                const formData = {
                    name: nameCon.querySelector("#name").value,
                    image: dataUrl,
                    consentDoodle: consentDoodleValue,
                    consentName: consentNameValue
                }

                const urlEncodedData = new URLSearchParams(formData).toString();

                fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: urlEncodedData
                })
                    .then(response =>
                        response.json().catch(() => {
                            throw new Error("Invalid JSON response");
                        })
                    )
                    .then(responseText => {
                        spinnerBoxD.innerHTML = "";
            
                        if (responseText.errors) {
                            const errors = Object.values(responseText.errors);
            
                            errors.forEach(error => {
                                const p = document.createElement("p");
                                p.textContent = error;
                                spinnerBoxD.appendChild(p);
                            });
                        } else {
                            errorMessage.textContent = "Thank you for your doodle!";
                        }
                    })
                    .catch(error => {
                        errorMessage.textContent = `Sorry, something went wrong! ${error}`;
                        doodleErrorCon.innerHTML = "";
                    });
              });

              board.style.border = "3px solid #ffdf7f;"
        } else {
            spinnerBoxD.innerHTML = `<p>Please accept the privacy policy before submitting</p>`
        }
    }

    submitReview.addEventListener("click", reviewSubmit)
    submitDoodle.addEventListener("click", doodleSubmit)
}
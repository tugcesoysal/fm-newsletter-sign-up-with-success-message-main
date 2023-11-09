const submitButton = document.querySelector(".sub-button");
const emailInput = document.querySelector("input");
const errorMessage = document.querySelector(".error-message");



function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

emailInput.addEventListener("input", function() {
    if (emailInput.value === "") {
        emailInput.classList.add("email-input");
        emailInput.classList.remove("error-input");
        errorMessage.setAttribute("hidden", "true");
    }
});


submitButton.addEventListener("click", function(event) {
    event.stopPropagation();
    emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
    const email = emailInput.value;
    if (!isValidEmail(email)) {
        event.preventDefault(); 
        emailInput.classList.remove("email-input");
        emailInput.classList.add("error-input");
        errorMessage.removeAttribute("hidden");
    } else {
        window.location.href= "thank-you.html"
    }
});

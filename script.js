const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const Passwort = document.getElementById("passwort");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();

});

email.addEventListener("blur", () => {
    checkInputEmail();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        errorInput(username, "Geben Sie einen Benutzernamen ein");
    } else {
        successInput(username);
    }
}

function checkInputEmail() {
    const emailValue = email.value;


    if (emailValue === "") {
        errorInput(email, "E-Mail ist erforderlich.");
    } else if (!isValidEmail(emailValue)) {
        errorInput(email, "Bitte geben Sie eine gültige E-Mail-Adresse ein.");
    } else {
        successInput(email);
    }
}

function checkInputPassword() {
    const passwordValue = Passwort.value;

    if (passwordValue === "") {
        errorInput(Passwort, "Passwort ist erforderlich.");
    } else if (passwordValue.length < 8) {
        errorInput(Passwort, "Das Passwort muss mindestens 8 Zeichen lang sein.");
    } else {
        successInput(Passwort);
    }
}
function checkInputPasswordConfirmation() {
    const confirmationPasswordValue = passwordConfirmation.value;

    if (confirmationPasswordValue === "") {
        errorInput(passwordConfirmation, "Die Bestätigung des Passworts ist erforderlich!");
    } else if (ConfirmationPasswordValue.length !== passwordValue) {
        errorInput(passwordConfirmation, "Die Passwörter stimmen nicht überein.");
    } else {
        const formItem = passwordConfirmation.parentElement;
        form.className = "form-content"
    }
}
function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItem = form.querySelectorAll(".form-content")

    const isValid = [...formItem].every((item) => {
        return item.className === "form-content"
    });

    if (isValid) {
        alert("Erfolkreich registriert!!")
    }

}
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = message;
    textMessage.style.visibility = "visible";
    formItem.className = "form-content error";
}


function successInput(input) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a");

    textMessage.innerText = "";
    textMessage.style.visibility = "hidden";
    formItem.className = "form-content";
}

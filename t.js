// Function 1: Affiche

function Affiche() {
    document.getElementById("message").innerText = "Bienvenue";
}

// Function 2: clique

function clique() {
    var passwordInput = document.getElementById("password");
    passwordInput.placeholder = "Vas y introduit ton mot de passe";
     }

// Function 3: verify

function verify() {
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    if (password === "") {
        message.innerText = "Le mot de passe saisi est invalide: Il est vide.";
    }
    else if (password.length < 8) {
        message.innerText = "Le mot de passe saisi est invalide: Il doit contenir au moins 8 caractères.";
    }
    else if (password[0] !== password[0].toUpperCase()) {
        message.innerText = "Le mot de passe saisi est invalide: La première lettre doit être en majuscule.";
    }
    else if (password[0] !== password[0].toUpperCase()) {
        message.innerText = "Le mot de passe saisi est invalide: La première lettre doit être en majuscule.";
    }
    else if (!password.includes('x')) {
        message.innerText = "Le mot de passe saisi est invalide: Il doit contenir au moins une fois la lettre 'x'.";
    }
    else {
        message.innerText = "Le mot de passe saisi est valide.";
    }
}

window.onload = Affiche;

document.querySelector("label[for='password']").onclick = clique;

document.querySelector("button").onclick = verify;
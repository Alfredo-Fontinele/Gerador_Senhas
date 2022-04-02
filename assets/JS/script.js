let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");


let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@";

let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
        //charAt() ==> serve para pegar uma posição
        // Math.floor() ==> serve para gerar um número inteiro
        // Math.random() ==> serve para gerar valores aleatoriamente
    };

    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}; 

function copyPassword() {
    navigator.clipboard.writeText(novaSenha);
    alert("Senha Copiada com Sucesso");
}
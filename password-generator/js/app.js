const input = document.querySelector("#password");
const button = document.querySelector("#btn")
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@$+_-?!";
const passwordLen = 16;

function generatePassword() {
    let password = '';
    for (let index = 0; index < passwordLen; index++) {
        let randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);

    }
    input.value = password;
}

button.addEventListener('click', generatePassword)
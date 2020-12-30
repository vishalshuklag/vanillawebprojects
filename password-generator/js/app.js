const input = document.querySelector("#password");
const button = document.querySelector("#btn")
const copyImg = document.querySelector('.copy');
const alertDiv = document.querySelector('.alert');
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz#@$+_-?!";
const passwordLen = 16;
let password = '';
function generatePassword() {
    password = '';
    for (let index = 0; index < passwordLen; index++) {
        let randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1);
    }
    input.value = password;
}

function copyPassword() {
    input.select();
    input.setSelectionRange(0, 9999);
    document.execCommand('copy');
}


button.addEventListener('click', generatePassword)
copyImg.addEventListener('click', copyPassword)
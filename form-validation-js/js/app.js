const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function checkInputs () {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();

    if (usernameValue === ''){
        // Add error class to parent 
        // Show error message
        showError(username, 'Username cannot be blank');
    } else {
        showSuccess(username);
    }

    if (emailValue == '') {
        showError(email, 'Email cannot be blank')
    } else if (!isEmail(emailValue)) {
        showError(email, 'Email is not valid!')
    } else{
        showSuccess(email)
    }

    if (passwordValue === ''){
        showError(password, 'Password cannot be null')
    } else if ( ! passwordSrength(passwordValue) ){
        console.log(passwordSrength(passwordValue), passwordValue.length)
        showError(password, 'Password is not strong!')
    }else {
        showSuccess(password)
    }

    if ( (confirmPasswordValue !== '') && (confirmPasswordValue !== passwordValue)){
        showError(confirmPassword, 'Passwords do not match!')
    } else {
        showSuccess(confirmPassword)
    }
}

function showError(input, message){
    const parentDiv = input.parentElement; //.form-control
    const smallTag = parentDiv.querySelector('small');

    //Adding error class
    parentDiv.className = 'form-control error';
    //show error message
    smallTag.innerText = message;
}
function showSuccess (input){
    const parentDiv = input.parentElement;
    parentDiv.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function passwordSrength (password){
    return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
}

form.addEventListener('submit', e => {
    e.preventDefault();
	checkInputs();
});
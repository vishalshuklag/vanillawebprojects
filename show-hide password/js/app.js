const toggle = document.getElementById('toggle');
const passwordInput = document.getElementById('password');

function togglePassword() {
    if (passwordInput.type === 'password'){
        passwordInput.setAttribute('type', 'text');
        toggle.classList.add('show');
    } else {
        passwordInput.setAttribute('type', 'password');
        toggle.classList.remove('show');
    }
}

toggle.addEventListener('click', togglePassword)
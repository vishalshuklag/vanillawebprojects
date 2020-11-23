const form = document.querySelector('[name="verify"]');
const inputs = document.querySelectorAll('.inputs input');
const submitButton = document.getElementById("focus");
function handleInput (e) {
    
    // console.log(e.target, e.currentTarget);
    // check for data entered, and if there is next input box focus on it
    const input = e.target;
    if (input.nextElementSibling && input.value){
        
        input.nextElementSibling.focus();
        input.nextElementSibling.select();
    }
    if (input.nextElementSibling === null) {
        submitButton.focus();
    }

}

function handlePaste (e){
    const paste = e.clipboardData.getData('text');
    // loop over each input and populate with the index of string
    inputs.forEach( (input, index) => {
        input.value = paste[index] || '';
    })
    if (paste.length === inputs.length) {
        submitButton.focus()
    }
    
}

inputs[0].addEventListener('paste', handlePaste);
form.addEventListener('input', handleInput);

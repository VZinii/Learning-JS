const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;
let capsLockAtivado = false;

form.addEventListener('submit', e => {
    // the default event of submit is to refresh the page, to stop default events, we just need to use preventDefault()
    e.preventDefault(); 
    
    const username = form.username.value;

    console.log(username);

    if (usernamePattern.test(username)){
        feedback.textContent = "username available";
    } else {
        feedback.textContent = "username unavailable";
    }

});

// To get a reference to the input elements inside a form, we just need to set an id or a name for them in the form
// This way, when we get a reference to the form itself, we're gonna be able to look for the inputs using dot notation
// for exemple: form.username; form.password; form.age...

// testing RegEx
// ^ stands for the start of the sentence
// $ stands for the end of the sentence
// [a set of characters] {the mininum of characters, the maximum} 

const username = 'vito@rg';
const pattern = /[a-z]{6,}$/;

// let result = pattern.test(username);

// if ( result ){
//     console.log('regex test passed :) ');
// }
// else {
//     console.log('regex test failed :( ');
// }

// the string method search searches for a pattern inside the string. So it returns the index of the first character where the pattern was found,
// if it's found. Otherwise, it returns -1;

let result = username.search(pattern);

// Now an event for analysing the keyboard typing on live
// live feedback

form.username.addEventListener('keyup', e => {

    console.log(usernamePattern.test(e.target.value));

    if (e.key === "CapsLock"){
        capsLockAtivado = !capsLockAtivado;
    }

    if ( capsLockAtivado ){
        feedback.textContent = "CapsLock Ligado!";
    }
    else {
        feedback.textContent = "";
    }


    if (usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }

});

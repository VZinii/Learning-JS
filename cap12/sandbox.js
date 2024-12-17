// A guide for web development to study later: https://developer.mozilla.org/pt-BR/docs/Learn

fetch('todos/vitor.json').then(response => {
    console.log('resolved', response);
    return response.json(); // This is a promise, so we can use .then to receive the data resolved
}).then(data => {
    console.log(data);
}).catch(error => {
    console.log('rejected', error);
});
// A guide for web development to study later: https://developer.mozilla.org/pt-BR/docs/Learn

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 ){
        if ( request.status === 200 ){
            console.log(request.responseText);
        }
        else {
            console.log('could not fetch the data');
        }
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();
// A guide for web development to study later: https://developer.mozilla.org/pt-BR/docs/Learn

const getTodos = (resource) => {
    
    return new Promise((resolve, reject) => {

        const request = new XMLHttpRequest();
        
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 ){
                if ( request.status === 200 ){
                    // JSON = JavaScript Object Notation. It's essencialy a string, because that's how information is passed through the internet. By text
                    // So we need to convert the string into javascript objects, so we can work better with the data
                    const data = JSON.parse(request.responseText);
                    resolve(data);
                }
                else {
                    reject('could not fetch data');
                }
            }
        });
        
        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resource);
        request.send();

    });

};

// It looks a lot better dealing with the request this way than the other way
getTodos('todos/vitor.json').then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
});

// Promises are a way of treating data in JavaScript

// Basic example of Promises:

// const getSomething = () => {
//     // The Promise has two built-in parameters we can work with (resolve and reject)
//     return new Promise((resolve, reject) => {
//         // fetching some data
//         // resolve('some data');
//         // reject('some error');
//     });

// };

// getSomething().then(data => {
//     console.log(data);
// }).catch(error => {
//     console.log(error);
// });


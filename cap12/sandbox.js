// A guide for web development to study later: https://developer.mozilla.org/pt-BR/docs/Learn

const getTodos = (resource, callback) => {
    const request = new XMLHttpRequest();
    
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 ){
            if ( request.status === 200 ){
                // JSON = JavaScript Object Notation. It's essencialy a string, because that's how information is passed through the internet. By text
                // So we need to convert the string into javascript objects, so we can work better with the data
                const data = JSON.parse(request.responseText);
                callback(undefined, data);
            }
            else {
                callback('Could not fetch data', undefined);
            }
        }
    });
    
    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.open('GET', resource);
    request.send();
};

console.log(1);
console.log(2);

// This getTodos is an asyncrinous code, it will start after the 2, and finish after the 4. The callback function is gonna be fired after the rest of the code.

// This is callback hell: 
// getTodos('todos/vitor.json', (err, data) => {
//     console.log(data);
//     getTodos('todos/pedro.json', (err, data) => {
//         console.log(data);
//         getTodos('todos/raissa.json', (err, data) => {
//             console.log(data);
//         });
//     });
// });
// To avoid them we can use promises, because sometimes we need to stay some responde to make another request

// Promises is a form of treating data in JavaScript


console.log(3);
console.log(4);

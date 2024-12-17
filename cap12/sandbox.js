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

getTodos('todos/vitor.json').then(data => {
    console.log('promise 1 resolved:', data);
    return getTodos('todos/pedro.json');
}).then(data => {
    console.log('promise 2 resolved:', data);
    return getTodos('todos/raissa.json');
}).then(data => {
    console.log('promise 3 resolved:', data);
}).catch(error => {
    console.log('some promise was rejected:', error);
});

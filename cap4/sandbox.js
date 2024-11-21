// Functions declarations and expressions

// Function declarations are hoisted to the top of the JS file, so you can declare them after calling them and it should work.
function newSection(){
    console.log('-------------------------------------------------------------\n')
}

// This one is preferable, because its not hoisted by the file. That means you need to declare the function before using it.
const hello = function(name = 'John', time = 'night', age = 37){
    console.log(`Good ${time}, ${name}.\n`);
    console.log(`You're ${age} years old, right?`);
};

hello('Vítor', 'morning', 21);
hello();

newSection();
//  Rerturning Values

const calcArea = function(radius){
    return 3.14 * radius**2;
};

const calcVolumn = function(radius, height){
    return calcArea(radius) * height;
};

console.log(calcVolumn(10, 10));

newSection();

// Arrow Functions

// Just a new and a shorter way to write down functions

// const greet = function(){
//     return 'hello, world';
// };


// const greetArrow = () => 'Hello, world';

// const greetArrow2 = () => {
//     return 'Hello, World 2!';
// };

// const greetArrow3 = () => 'Hello, World 3!';

// console.log(greetArrow3());

const bill = function(products, tax){
    let total = 0;
    for (let i=0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

const billArrow = (products, tax) => {
    let total = 0;
    for (let i=0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};

console.log(`The total is ${billArrow([10, 35, 20], 0.2)}`);

/*
So in brief, it's recommended to user function expressions, storing them into a constant, because then you will be forced to establish a flow of coding.
That means you can only use a function if you have declared it before. It makes sure you organize your file. But if you are having trouble, I imagine you can just
use a function declaration instead. Therefore, once you are using function expressions, there's a shorter way to declare them, that's using arrow functions.
*/

newSection();

// Callback Functions

// This is just a function being passed as a parameter to another function
// We can see that in the foreach method of an array:

const people = ['Vitor', 'Daniel', 'Raissa'];

const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 19, 23];

const helloArrow = nome => {
    console.log(`Hello ${nome}`);
};

people.forEach(helloArrow);

people.forEach( nome => {
    console.log(`Good evening, ${nome}`);
});

people.forEach( (nome, index) => {
    console.log(`${index + 1}: Good evening, ${nome}`);
});

primeNumbers.forEach( (number, index) => {
    console.log(`${index + 1}: ${number}`);
});

newSection();

// Let's try an example of callback functions use:

const ul = document.querySelector('.people');

let lista = ``;

people.forEach( pessoa => {
    lista += `<li style="color: red;">${pessoa}</li>`;
});

ul.innerHTML = lista;

// That's it for this chapter
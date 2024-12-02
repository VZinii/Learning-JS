const newSection = () => {
    console.log('------------------------------------------------------------------');
};

const scores = [10, 30, 15, 25, 50, 40, 5];

// const approved = scores.filter(score => {
//     return score > 20;
// });

// console.log(approved);

const users = [
    {name: 'yasuo', premium: true},
    {name: 'zed', premium: false},
    {name: 'jinx', premium: false},
    {name: 'ahri', premium: true}
];

// Flter method is not destructive:
const premiumUsers = users.filter(user => user.premium);

console.log(premiumUsers);

newSection();

const prices = [20, 10, 30, 25, 15, 40, 80, 5];

// const products = prices.map(price => price / 2);
// console.log(products);

const products = [
    {name: 'milk', price: 20},
    {name: 'cookie', price: 40},
    {name: 'beans', price: 30},
    {name: 'soda', price: 10},
    {name: 'rice', price: 50},
];

const saleProducts = products.map(product => {
    // Applying the offer only to the products with the price over 30
    if ( product.price > 30 ){
        // We need to create a new object here, because we don't want to change the original array.
        return {name: product.name, price: product.price / 2};
    }
    else {
        return product;
    }
});

console.log(products);
console.log(saleProducts);

newSection();

// The reduce method takes a callback function and the initial value of the accumulator as parameters
// and this callback function takes 2 parameters: an accumulator and the current element of the array.
// The objective is to return a single value based on the values inside the array.
// Let's see two examples:

const scores2 = [10, 20, 60, 40,70, 90, 30];

const result2 = scores2.reduce((accumulator, current) => {
    // Let's see how many scores over 50 are in the array
    if ( current > 50 ){
        accumulator++;
    }
    return accumulator;
}, 0);

console.log(result2);

// Now let's get the total score of the player named 'Mario':

const scores3  = [
    {name: 'Mario', score: 100},
    {name: 'Vitor', score: 50},
    {name: 'Luigi', score: 40},
    {name: 'John', score: 20},
    {name: 'Crystal', score: 30},
    {name: 'Crystal', score: 90},
    {name: 'Karol', score: 50},
    {name: 'Tod', score: 40},
    {name: 'Mario', score: 70},
    {name: 'Mario', score: 20}
];

const result3 = scores3.reduce((acc, curr) => {
    if ( curr.name === 'Mario' ){
        acc += curr.score;
    }
    return acc;
}, 0);

console.log(result3);

newSection();

// The find method takes a callback function that return either true or false for a certain condition over the array elements
// It will return the first occurence of the condition in the array.

const scores4 = [10, 20, 30, 90, 40];

const firstHighScore = scores4.find(score => score > 50);

console.log(firstHighScore);

newSection();

// The sort method has a built-in algorithm that sorts by alfabethical order a string array.
// But with numbers, we have to give a function that returns what will come first in the array.

const scores5 = [5, 70, 4, 40, 20, 10, 35, 29];

scores5.sort((a,b) => a - b); // a - b is going to be ascending order. b - a is going to be descending order

console.log(scores5);

const players = [
    {name: 'Mario', score: 100},
    {name: 'Vitor', score: 50},
    {name: 'Luigi', score: 40},
    {name: 'John', score: 20},
    {name: 'Crystal', score: 30},
    {name: 'Crystal', score: 90},
    {name: 'Karol', score: 50},
    {name: 'Tod', score: 40}
];

// If the score of b is higher, than the result is positive, what means that they should switch
// If the score of a is higher, than the result is negative, what means that they shouldn't switch
// It the score of both are equal, than the result is zero, what means not switch is needed
players.sort((a,b) => b.score - a.score);

// The reverse method just invert the array order.
// So if it was ascendig, it would get descending and vice-versa

console.log(players);

newSection();

const products2 = [
    {name: 'milk', price: 20},
    {name: 'cookie', price: 40},
    {name: 'beans', price: 30},
    {name: 'soda', price: 10},
    {name: 'rice', price: 50}
];

// const produtosMaisCaros = products2.filter(product => product.price > 20);

// const produtosComOferta = produtosMaisCaros.map((product) => {
//     return `${product.name} por apenas ${product.price / 2} reais`;
// });

// Chaining the array methods in a good way

const promos = products
    .filter(product => product.price > 20)
    .map(product => `${product.name} por apenas ${product.price / 2} reais`);

console.log(promos);
// Changing some data in the html

const firstParagraph = document.querySelector('p');

console.log(firstParagraph.innerText);

firstParagraph.innerText = 'Overwriting the text';

const thirdParagraph = document.querySelector('.error');

console.log(thirdParagraph.innerText);

thirdParagraph.innerText += ' | NEW TEXT!';

const content = document.querySelector('.content');

console.log(content.innerHTML);

const people = ['vitor', 'heitor', 'matheus'];

people.forEach( person => {
    console.log(person);
    content.innerHTML += `<p>${person}</p>`;
});

// innerText is the text inside an element.
// innerHTML is the html inside an element.
// both of them are properties, not methods.


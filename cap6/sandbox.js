// DOM (Document Object Model)

// The DOM is the html document represented by an object, which contains tons of properties and methods we can use to interact with the web page.
// The DOM is created by the browser. We can use it to grab, change, remove elements in a html file.

const newSection = () => {
    console.log('------------------------------------------------------------');
};

// Query Selector and Query Selector All. The best ways to grab elements in Web Ninja's opinion.
// They use CSS selectors to especify the element you are looking for inside the html file.

const elemento = document.querySelector('p');

console.log(elemento);

const elemento2 = document.querySelector('.error');

console.log(elemento2);

const elementos = document.querySelectorAll('p');

// console.log(elementos.values().forEach(key => {console.log(key)}));

elementos.forEach( elemento => {
    console.log(elemento);
});

// console.log(elementos.entries());

// const vetor = elementos.entries();

// vetor.forEach( elemento => {
//     console.log(elemento);
// });

const primeiraDivComErro = document.querySelector('div.error');

console.log(primeiraDivComErro);

newSection();

// Get an element By ID

const titulo = document.getElementById('titulo');

console.log(titulo);

// Get elements by their class name

const erros = document.getElementsByClassName('error');

console.log(erros);
console.log(erros[0]);

// Get elements by their tag name

const paragrafos = document.getElementsByTagName('p');

console.log(paragrafos);
console.log(paragrafos[0]);
// console.log(paragrafos.namedItem('teste'))

// It's possible to cycle through the Node Lists returned by Query Selectors, but you can't cycle through
// HtmlColletions, which are returned by getElementById, getElementsByClassName and getElementsByTagName
// So it's better to use Query Selector, because you can get any element and still be able to cycle through the elements.

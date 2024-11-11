// Getting and setting atributtes in the html elements

const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.github.com/VZinii');
link.innerText = 'Acesse meu GitHub';

const firstDiv = document.querySelector('.error');

console.log(firstDiv.getAttribute('class'));

const content = document.querySelector('.content');

content.setAttribute('style', 'color: blue; font-size: 36px;');

// It's better to set the properties directly using the style proptertie of an html element, as below:
// Because, if you use the setAtributte method to set some style, it'll overwrite the previous style.

const firstParagraph = document.querySelector('p');

console.log(firstParagraph.style);
console.log(firstParagraph.style.color);

firstParagraph.style.color = 'blue';
firstParagraph.style.margin = '50px';
firstParagraph.style.fontSize = '60px';
firstParagraph.style.margin = '';

// It's better to set the styles in a separeted css file and add, change or remove your css classes in the html file.
const newSection = () => {
    console.log('-----------------------------------------------------------------------');
};

/**
 * Parents, children and siblings
 */

const article = document.querySelector('article');

console.log(article.children); // It's an HTML colletion, we can't make a foreach for it.

// Let's turn it into an array

const articleChildren = Array.from(article.children);

console.log(articleChildren);

// Now we are good to go

articleChildren.forEach( child => {
    child.classList.add('article-element');
});

// We can also find nearby siblings and the parent of an element:

const articleTitle = document.querySelector('article>h2');

console.log(articleTitle);
console.log(articleTitle.nextElementSibling);
console.log(articleTitle.nextElementSibling.parentElement);
console.log(articleTitle.nextElementSibling.parentElement.children);

newSection();

/**
 * Adding events on html elements
 */

const ul = document.querySelector('ul');

// First step, grab the element you want to add an event on

const button = document.querySelector('button');

// Second, you use the method addEventListener('typeOfEvent', callbackFunction);

button.addEventListener('click', () => {
    // console.log('you clicked me');
    const li = document.createElement('li');
    li.textContent = 'New Todo Item';
    // ul.append(li); // insert on the bottom
    ul.prepend(li); // insert on the top
});

// Now, let's get an event for each list item

const items = document.querySelectorAll('li');

items.forEach(item => {
    item.addEventListener('click', e => {
        // console.log(item);
        // console.log(e.target);
        // e.target.style.textDecoration = 'line-through';
        e.target.remove(); // Remove an html element
    });
});


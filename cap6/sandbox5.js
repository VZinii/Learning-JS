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
console.log('Events, bubbling, delegation');

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

// const items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', e => {
//         // console.log(item);
//         // console.log(e.target);
//         // e.target.style.textDecoration = 'line-through';
//         e.target.remove(); // Remove an html element
//     });
// }); BAD SOLUTION ^^

// Instead of attaching an event for each LI element, we should use the JavaScript event bubbling, because it's more efficient
// For this, we attach an event to the parent of the elements we want an event on and verify if we clicked on them in a if statment:

ul.addEventListener('click', e => {
    if (e.target.tagName === 'LI'){
        e.target.remove();
    }
    else {
        console.log(e.target);
    }
}); // Now, even if we add new LI elements in the ul, it will still bubble up the event to the parent (UL), so it will remove as well.

newSection();

 
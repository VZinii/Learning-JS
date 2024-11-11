// Adding, removing and toggling classes in html elements.

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    const text = para.textContent;

    if ( text.includes('sucess') ){
        para.classList.add('sucess');
    }

    if ( text.includes('error') ){
        para.classList.add('error');
    }
});

// innerText is going to grab all the text on the page that is visible.
// textContent in other hand is going to get all the text, either is visible or not.

const titulo = document.querySelector('.title');

titulo.classList.toggle('title'); // Removing

// const procurandoDepoisDeRemover = document.querySelector('.title');

// console.log(teste);

titulo.classList.toggle('title'); // Adding again

const formAdicionar = document.querySelector('.add');
const lista = document.querySelector('.todos');
const inputBuscar = document.querySelector('.search input');

// Função que gera o html da lista, caso haja uma outra maneira de adicionar todos, basta chamar essa função novamente
const gerenateTemplate = todo => {

    const html = `
        <li class="list-group-item text-light d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="fas fa-trash-alt delete"></i>
        </li>
    `;

    lista.innerHTML += html;
}

// Adicionando todos
formAdicionar.addEventListener('submit', e => {
    // Para evitar o reload da página
    e.preventDefault();

    const userInput = formAdicionar.add.value.trim();

    if ( userInput.length > 0 ){

        gerenateTemplate(userInput);

        formAdicionar.reset();
    }
}); 

// Deletando todos
lista.addEventListener('click', e => {
    // Se eu clicar no ícone:
    if ( e.target.tagName === 'I' ){
        e.target.parentElement.remove();
    }
});

const filterTodos = userInput => {

    Array.from(lista.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(userInput))
        .forEach(todo => todo.classList.add('filtered'));

    Array.from(lista.children)
        .filter(todo => todo.textContent.toLowerCase().includes(userInput))
        .forEach(todo => todo.classList.remove('filtered'));

    // Another way of doing it:
    
    // const todos = document.querySelectorAll('.todos li');

    // todos.forEach(todo => {

    //     if ( !todo.textContent.includes(userInput) ){
    //         todo.classList.add('d-none');
    //     }
    //     else {
    //         todo.classList.remove('d-none');
    //     }
    // });
};

// Filtrando todos
inputBuscar.addEventListener('keyup', () => {

    const userInput = inputBuscar.value.trim().toLowerCase();

    filterTodos(userInput);
});



// Object Literal Notation
// It's not complex as it seems to be

const newSection = () => {
    console.log('----------------------------------------------------');
};

// Actually, this is a record, it doesn't repects some of the object oriented programming rules
let pessoa = {
    nome: 'Vítor',
    idade: 21,
    email: 'vitorzini@gmail.com'
};

console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa.idade);

// This way of getting an attribute can be usefull if you pass a variable inside the square brackets, I can't imagine an example of using this, but...
let variavel = 'email'
console.log(pessoa['nome']);
console.log(pessoa[variavel]);

console.log(typeof pessoa);

newSection();
// Object Literal Notation

// Actually, this is a record, it does not respects object orienteded programming rules

const newSection = () => {
    console.log('----------------------------------------------------');
};

const filmes = [
    { titulo: 'O protetor', genero: 'ação', duracao: 92 },
    { titulo: 'Maze Runner', genero: 'Ficção Científica', duracao: 96 }
];

console.log(filmes);

//
newSection();
//


let pessoa = {
    nome: 'Vítor',
    idade: 21,
    email: 'vitorzini@gmail.com',
    idiomas: ['ingles', 'portugues', 'japones', 'frances', 'russo', 'italiano', 'espanhol'],
    filmesFavoritos: filmes,
    logar(){
        console.log('Você logou!');
    },
    deslogar(){
        console.log('Você deslogou!');
    },
    imprimirIdiomas(){
        this.idiomas.forEach( (idioma, i) => {
            console.log(`${i + 1}: ${idioma}`);
        });
    },
    imprimirFilmesFavoritos(){
        this.filmesFavoritos.forEach( (filme, i) => {
            console.log(`${i + 1}: Título: ${filme.titulo}; Gênero: ${filme.genero}; Duração: ${filme.duracao} min`);
        });
    },
};

console.log(pessoa);

console.log(pessoa.nome);

console.log(pessoa.idade);

pessoa.logar();

pessoa.deslogar();

pessoa.imprimirIdiomas();

pessoa.imprimirFilmesFavoritos();

//
newSection();
//

// Math Object

console.log(Math);

console.log(Math.PI);

console.log(Math.E);

const number = 7.3;

console.log(Math.round(number));
console.log(Math.floor(number));
console.log(Math.ceil(number));
console.log(Math.trunc(number));

const random = Math.random();

console.log(random);

console.log(Math.round(random * 100));

//
newSection();
//

// Primitive Types and Reference Types

/*
This is similar to Java, but Strings are primitive types in JavaScript
*/

let nome = 'vitor';

let nome2 = nome;

console.log(nome, nome2);

nome2 = 'Heitor';

console.log(nome, nome2);

const botao = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const fechar = document.querySelector('.popup-close');

botao.addEventListener('click', () => {
    popup.style.display = 'block';
});

fechar.addEventListener('click', () => {
    popup.style.display = 'none';
});

popup.addEventListener('click', e => {
    if ( e.target.classList.contains('popup-wrapper') ){
        // console.log(e.target.classList);
        popup.style.display = 'none';
    }
    // else {
    //     console.log(e.target.classList);
    // }
})
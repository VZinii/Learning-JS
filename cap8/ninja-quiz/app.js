const correctAnswers = ['B', 'B', 'B', 'B'];
const numberOfQuestions = 4;
const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    // So it won't refresh the page:
    e.preventDefault();

    let score = 0;

    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, i) => {

        if ( answer === correctAnswers[i] ){
            score++;
        }

    });

    scoreRate = score / numberOfQuestions * 100;

    // Taking the user to the top of the page:
    scrollTo(0,0);

    // First, I need to remove the display none class from the result div:
    result.classList.remove('d-none');

    // Animating the score on the page
    let output = 0;

    // This funcion is similiar to setTimeOut, but it keeps firing the function until you clear the interval.
    // So to do that, you need to store the interval in a varible and call the window function clearInterval(reference to the interval);
    const timer = setInterval(() => {
        // Now, I need to set the text of the result equal to the score:
        result.querySelector('span').textContent = output + '%';
        if ( output >= scoreRate ){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 8); // From 8 to 8 milliseconds it will fire this callback function

});

// setTimeout(() => {
//     // Do something after 3000 milliseconds (after 3 seconds)
// }, 3000);
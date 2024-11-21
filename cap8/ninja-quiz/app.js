const correctAnswers = ['B', 'B', 'B', 'B'];
const numberOfQuestions = 4;
const form = document.querySelector('.quiz-form');

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

    console.log(`You're ${scoreRate} % Ninja!`);

});
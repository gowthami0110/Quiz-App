const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [
    {
        question: "Which planet is known as the Red Planet?",
        answers: {
            a: "Earth",
            b: "Mars",
            c: "Jupiter"
        },
        correctAnswer: "b"
    },
    {
        question: "Who wrote 'Harry Potter'?",
        answers: {
            a: "J.K. Rowling",
            b: "J.R.R. Tolkien",
            c: "George R.R. Martin"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: {
            a: "Atlantic Ocean",
            b: "Indian Ocean",
            c: "Pacific Ocean"
        },
        correctAnswer: "c"
    }
];

function buildQuiz() {
    const output = [];

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
             <div class="answers">${answers.join('')}</div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    quizQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `You got ${numCorrect} out of ${quizQuestions.length} correct.`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);

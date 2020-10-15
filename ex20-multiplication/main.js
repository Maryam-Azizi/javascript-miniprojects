const btnStart = document.getElementById('btn-start');
const multipleQuestionElm = document.getElementById('multiple-question');
const feedbackElm = document.getElementById('feedback');
const participantAnswer = document.querySelector("#input-answer");

const btnCheckAnswer = document.getElementById('btn-check-answer');
let correctAnswer = [];
let answerParticipant = [];

btnStart.addEventListener('click', createRandomNumbers);
btnCheckAnswer.addEventListener('click', checkAnswer);

function createRandomNumbers() {
    
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    multipleQuestionElm.innerHTML =
        `
        ${num1} * ${num2} = 
        
        `
    correctAnswer = [num1 * num2];

}

function checkAnswer() {
   let answer = participantAnswer.value;
    if (answer === "") {

        alert('Enter your answer');
    }
    if (correctAnswer == answer) {
        feedbackElm.innerHTML = `correct`;
        document.querySelector("#input-answer").value = "";

        createRandomNumbers();
    }
    else {
        feedbackElm.innerHTML = `wrong answer, try again`;
        document.querySelector("#input-answer").value = "";

    }

}

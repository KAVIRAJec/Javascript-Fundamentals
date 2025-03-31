const question = document.querySelector(".question");
const questionNo = document.querySelector(".question-no");
const options = document.querySelectorAll(".option");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

async function getQuizData() {
    const response = await fetch("quiz.json");
    if (!response.ok) {
        throw new Error("HTTP error " + response.status);
    }
    const data = await response.json();
    return data;
}

let currentQuestion = 0;
let score = 0;
let Status = 0;

async function updateData() {
    const quizData = await getQuizData();
    questionNo.textContent = `Question ${currentQuestion + 1}/${quizData.length}`;
    question.textContent = quizData[currentQuestion].question
    options.forEach((option, index) => {
        option.textContent = quizData[currentQuestion].options[index];
    })
}

async function verifyAnswerAndUpdate(answer) {
    Status = 1;
    const quizData = await getQuizData();
    const correctAnswer = quizData[currentQuestion].answer;

    if (answer === correctAnswer) {
        console.log("Correct");
        score++;
    } else {
        console.log("Incorrect");
    }

    if (currentQuestion + 1 < quizData.length) {
        currentQuestion++;
        updateData();
        Status = 0;
    } else {
        questionNo.textContent = `Quiz Completed`;
        question.textContent = `Your Score is ${score}/${quizData.length}`;
        options.forEach((option, index) => {
            option.style.display = 'none'
        })
        nextBtn.style.display = 'none'
    }
}


document.addEventListener("DOMContentLoaded", async () => {
    updateData();    
})
nextBtn.addEventListener("click", () => {

    if(currentQuestion + 1 < 15){
        if(Status == 0){
            alert("Please select an option");
            return;
        }
        currentQuestion++;
        updateData();
    }
})
// prevBtn.addEventListener("click", () => {
//     if(currentQuestion - 1 >= 0){
//         currentQuestion--;
//         updateData();
//     }
// })
options.forEach(option => {
    option.addEventListener("click", (e) => {
        verifyAnswerAndUpdate(e.target.textContent);
    })
})
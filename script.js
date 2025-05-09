const questions = [
    {
        question:"how many headings tag in html",
        answers:[
            {text:"3",correct:false},
            {text:"4",correct:false},      
            {text:"5",correct:false},      
            {text:"6",correct: true},    
        ] 
    },

    {
        question:"what is the extenion of javascript ?",
        answers:[
            {text:".html",correct:false},
            {text:".css",correct:false},      
            {text:".js",correct:true},       
            {text:".java",correct:false},    
        ] 
    },

    {
        question:"whic is the samlllest continent in the world ?",
        answers:[
            {text:"usa",correct:false},
            {text:"austrial",correct:true},      
            {text:"asia",correct:false},      
            {text:"africa",correct:false},    
        ] 
    }
]; 

 
const questionElement= document.getElementsById("question");
const answerButton= document.getElementsById("ans-button");
const nextButton= document.getElementsById("next-btn");

let currentQuestionindex= 0;
let score = 0;

function startQuiz() {
    currentQuestionindex = 0;
    score = 0;
    nextButton.innnerHTML = "next";
    showQuestion();
}


function showQuestion(){
    let currentQuestionindex = questions[currentQuestionindex];
    let questionNo=currentQuestionindex + 1;
    questionElement.innerHTML =questionNo+" ."+ currentQuestion.
    question;

    currentQuesti(answer=> {
        const button = document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    });
}

startQuiz();



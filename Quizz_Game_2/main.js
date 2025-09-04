

let questions=[]

async function loadQuestions1() {
    const res = await fetch("question1.json"); // đọc file
    questions = await res.json(); // chuyển thành object JS
    console.log("da tai cau hoi");
    renderQuestion();
    showQuestion();
}
async function loadQuestions() {
    const res = await fetch("question.json"); // đọc file
    questions = await res.json(); // chuyển thành object JS
    console.log("da tai cau hoi");
    renderQuestion();
    showQuestion();
}
let listQuestion=document.querySelector(".list-questions");
let listButton=[]
listQuestion.style.gridTemplateColumns = "repeat(11, 1fr)";
function renderQuestion(){
    for(let i=0;i<questions.length;i++)
{
    let btn2=document.createElement("button");
    btn2.classList.add("listQuestionButton");
    btn2.textContent=`${i+1}`;
    listQuestion.append(btn2);
    listButton.push(btn2);
}
}

let check= new Map();
let indexQuestion=0;
let answer=document.querySelector(".answer_option");
let question=document.querySelector("#cntQuestion");
let nextAnswer=document.querySelector(".next")
let calScore=0;
let score=document.querySelector(".scores");
function showQuestion(){
    answer.innerHTML="";
    question.textContent=`Câu ${indexQuestion+1}: `+questions[indexQuestion].question;
    for(let btn of questions[indexQuestion].answers)
    {
        let btnAnswer=document.createElement("button")
        btnAnswer.classList.add("btn");
        btnAnswer.textContent=btn;
        answer.append(btnAnswer);
    }
    let buttonAnswer=document.querySelectorAll(".btn");
    for(let btnAnswer of buttonAnswer)
    {
         btnAnswer.addEventListener("click",function(){
        showAnswer();
        if(checkAnswer(btnAnswer.textContent))
        {
            calScore++
            listButton[indexQuestion].classList.add("correctAnswer");
        }
        else{
            listButton[indexQuestion].classList.add("wrongAnswer");

        }
        if(indexQuestion<questions.length)
        { 
            do
                {indexQuestion=Math.floor(Math.random()*questions.length);
                console.log(check.get(indexQuestion))
                }
             while(check.get(indexQuestion));
             check.set(indexQuestion,true);
            setTimeout(showQuestion,2000);
        }})
        btnAnswer.addEventListener("click",showScore);
    }
    
}
function showScore(){
    score.textContent=`${calScore}/90`;
}
function showAnswer(){
    let button=document.querySelectorAll(".btn")
    for(let btn of button)
    {
        if(checkAnswer(btn.textContent))
        {
            btn.classList.add("correctAnswer")
        }
        else{
            btn.classList.add("wrongAnswer")
        }
    }
}
function checkAnswer(option)
{
    if(option===questions[indexQuestion].correct)
    {  
       return true;
    }
    else
    {
        return false;
    }
}
let chose=document.querySelector("#chose");
let btn=document.querySelector("#read");
btn.onclick=function(){
    chose.parentElement.removeChild(chose);
    loadQuestions();
}
   showScore();
let btn1=document.querySelector("#write");
btn1.onclick=function(){
    chose.parentElement.removeChild(chose);
    loadQuestions1();
}

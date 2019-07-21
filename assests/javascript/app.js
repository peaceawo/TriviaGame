

var questions=[{
        
    question:"Press to Start",
    answers:["","","",""]
},
{
    question:"What movie did Thanos first appear?",
    answers:["Iron Man", "Thor", "Avengers", "Avengers: Age of Ultron"],
    correctAnswer:2,
    gifImage:""
},
{
    question:"How many infinity stones are there?",
    answers:["4", "5", "6", "7"],
    correctAnswer:1,
    gifImage:""
},

{
    question:"What does Loki tell Thanos when he takes over the Asgardian ship?",
    answers:["You will never be a god", "You will fail in the end”", "There are others”", "You will never make it"],
    correctAnswer:0,
    gifImage:""
},

{
    question:"Including Lady Siv, how many warriors are known for being at Thor’s side?",
    answers:["2", "3", "4", "5"],
    correctAnswer:2,
    gifImage:""
},

{
    question:"Who does Stan Lee play in the first Iron Man?",
    answers:["Bill Gates", "Hugh Hefner", "Warren Buffet", "Mark Zuckerberg"],
    correctAnswer:1,
    gifImage:""
},

{
    question:"According to the comics, which two characters spent time at the Red Room?",
    answers:["Black Widow and Winter Soldier", "Black Widow and Hawkeye", "Winter Soldier and Hawkeye", "Black Widow and Nick Fury"],
    correctAnswer:0,
    gifImage:""
},

{
    question:"Who did Tony Stark claim ‘stole a suit’ in Iron Man 2?",
    answers:["Black Widow", "Thor", "Nick Fury", "James Rhodes"],
    correctAnswer:3,
    gifImage:""
},

{
    question:"T'Challa is the king of Wakanda. What was the previous king, T'Challa's father, called?",
    answers:["S'Yan", "Shuri", "T'Chaka", "W'Kabi"],
    correctAnswer:2,
    gifImage:""
}

]

//Declare Varaiblles

var counter;
var questionNum = 0;
var timer = 30;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var selectedAnswer =  "";
var displayQuestion = questions[questionNum] 
  
    displayQuestion = questions[questionNum]
    $("#start").text(displayQuestion.question)
    $("#start").mouseup(function(){
        $("#start").remove()
        display()
    })

    $('.ques').mouseup(function(){
    clearInterval(counter)
    if(this.textContent === displayQuestion.answers[displayQuestion.correctAnswer]){
    correctAnswer();
    } 
    else{
        wrongAnswer()
}
    })
 $(document).on("click","#reset",function(){
    reset()
 })

//countdown
function count(){
    timer--;
    $('#time-remaining').text("Time Remaining: "+timer+" Seconds")
    if(timer<=0){
        console.log("your time is up")
        timeUp()
    }
}  
//Upload questions
function display(){  
    counter = setInterval(count, 1000);
    questionNum++
    displayQuestion = questions[questionNum]
    $('#question').text(displayQuestion.question)
    for(var i=0; i<displayQuestion.answers.length;i++){
    $('#possible-answers1').text(displayQuestion.answers[0])
    $('#possible-answers2').text(displayQuestion.answers[1])
    $('#possible-answers3').text(displayQuestion.answers[2])
    $('#possible-answers4').text(displayQuestion.answers[3])
    }
}
//next question

function nextQuestion(){
    timer = 30;
    $('#time-remaining').text("Time Remaining: "+timer+" Seconds");
    questionNum++;
    display()
}

//timeup
function timeUp(){
    clearInterval(counter);
    unanswered++
    $('#question').text("OUT OF TIME")
    $('#possible-answers1').text("The correct answer was: "+ displayQuestion.answers[displayQuestion.correctAnswer])
    $("#time-remaining, #possible-answers2, #possible-answers3, #possible-answers4").empty();

    if(questionNum==questions.length-1){
        setTimeout(results, 3000)
    }else{
        setTimeout(nextQuestion, 3000);
    }
    
}

//result
function results(){
    clearInterval(counter)
    $('#question').text("ALL DONE!")
    $("#possible-answers1").text("Number of Correct Answers: "+ correctAnswers)
    $("#possible-answers2").text("Number of Incorrect Answers: "+ incorrectAnswers)
    $('#possible-answers3').text("Number of unanswerd questions: "+unanswered)
    $('#possible-answers4').append("<button> id = 'reset'>RESET</button>")
    $("#time-remaining").empty();
}



//clicled
function clicled(){
clearInterval(counter)
if(this.textContent === displayQuestion.answers[displayQuestion.correctAnswer]){
    correctAnswer();
} 
else{
    wrongAnswer()
}
}

//answered correctly

function correctAnswer(){
    clearInterval(counter)
    correctAnswers++
    if(questionNum==questions.length-1){
        setTimeout(results, 3000)
    }else{
        setTimeout(nextQuestion, 3000);
    }
    console.log("You dont suck")
}

//answered incorrectly
function wrongAnswer(){
    clearInterval(counter)
    incorrectAnswers++
    $('#question').text("INCORRECT")
    $('#possible-answers1').text("The correct answer was: "+ displayQuestion.answers[displayQuestion.correctAnswer])
    $("#time-remaining, #possible-answers2, #possible-answers3, #possible-answers4").empty()
    if(questionNum==questions.length-1){
        setTimeout(results, 3000)
    }else{
       setTimeout(nextQuestion, 3000);
    }
    console.log("You suck")
}
//reset
function reset(){
questionNum = 0;
timer = 0
correctAnswers = 0;
incorrectAnswers = 0;
unanswered = 0;
display()
}
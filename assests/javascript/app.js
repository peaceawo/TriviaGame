
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
var numOfQues = 7;



    //display the questions and asnwers
   displayQuestion = questions[questionNum]
    console.log(displayQuestion)

    // Click to Start the game
    $("#start").text(displayQuestion.question)


    $("#start").mouseup(function(){
        
        $("#start").remove()


        function display(){
            
            if(questionNum <= numOfQues){
            questionNum++
            displayQuestion = questions[questionNum]

            timerReset()
    
            $('#question').text(displayQuestion.question)
            $('#possible-answers1').text(displayQuestion.answers[0])
            $('#possible-answers2').text(displayQuestion.answers[1])
            $('#possible-answers3').text(displayQuestion.answers[2])
            $('#possible-answers4').text(displayQuestion.answers[3])
            
            }
            else{
            results();
            console.log("nope")
            }
        }
        $('#time-remaining').text("Time Remaining: "+timer+" Seconds")
        counter = setInterval(count, 1000);
        


        display()
        
        
        $('.ques').mouseup(function(){
             if(this.textContent==questions[questionNum].answers[questions[questionNum].correctAnswer]){
                console.log('lol nice 1')
                correctAnswers++
                console.log(correctAnswers)
                questionNum++
                displayQuestion = questions[questionNum]
                $('#question').text(displayQuestion.question)
                $('#possible-answers1').text(displayQuestion.answers[0])
                $('#possible-answers2').text(displayQuestion.answers[1])
                $('#possible-answers3').text(displayQuestion.answers[2])
                $('#possible-answers4').text(displayQuestion.answers[3])

                timerReset()
            }

            else{
                incorrectAnswers++
                console.log('wrong')
                console.log(incorrectAnswers)
                //Show the next question
                display()
                timerReset()
            }  
        })

    })

    
    //count
    function count(){
        timer--;
        $('#time-remaining').text("Time Remaining: "+timer + " seconds")

        if(timer==0){
            clearTimeout(counter);
            selectedAnswer = ""
            unanswered++
           
        }
            //Show the next question
            questionNum++
        }   
    
    //reset the timer
    function timerReset(){
        timer = 30;
    }
//final results function
function results(){
questionNum = 0;
$("#time-remaining").remove();
$('#question').text("All done!! Here is how you did")
$("#possible-answers1").text("Number of Correct Answers: "+ correctAnswers)
$("#possible-answers2").text("Number of Incorrect Answers: "+ incorrectAnswers)
$('#possible-answers3').text("Number of unanswerd questions: "+unanswered)
$('#possible-answers4').text("Click to Restart")


}

//restart button 

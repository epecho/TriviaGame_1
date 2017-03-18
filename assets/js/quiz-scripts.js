// What we need our script to do
// 1. Select a question, from the questions array
// 2. Select the options, for the questions array
// 3. The User makes a selection presses a button
// 4. Check to see what button The User pressed
// 5. Check the value of the button that was pressed agienst answer
// 6. The User presses the next question button
// 7. The script loads a new question and options
// 8. Capture the option The User selected
// 9. Display score after quiz has been completed

/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    "use strict";

    var score = 0,
        numberOfQuestions = questions.length,
        //Variabels that are tied to HTML elements
        containerEl = $("#quizContainer"),
        questionEl = $("#question"),
        opt1El = $("#opt1"),
        opt2El = $("#opt2"),
        opt3El = $("#opt3"),
        opt4El = $("#opt4"),
        // answerToQuestion = $(".option")answer,
        nextButtonEl = $("#nextButton"),
        counter = 0;

    function loadQuestion(questionIndex) {


        console.log("This is the length of questions I have " + numberOfQuestions);

        var currentQuestion = questions[questionIndex];

        questionEl.html(currentQuestion.question);
        console.log(currentQuestion.question);

        opt1El.html(currentQuestion.option1);
        console.log(currentQuestion.option1);

        opt2El.html(currentQuestion.option2);
        console.log(currentQuestion.option2);

        opt3El.html(currentQuestion.option3);
        console.log(currentQuestion.option3);

        opt4El.html(currentQuestion.option4);
        console.log(currentQuestion.option4);
        
        // answerToQuestion.html(currentQuestion.option4);
        // console.log(currentQuestion.option4);
        
}
     
        
    loadQuestion(0);

    nextButtonEl.on("click", function () {

            counter++;

            loadQuestion(counter);

        });

});
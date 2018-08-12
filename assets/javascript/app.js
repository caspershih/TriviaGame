// defining varibles
const timer;
const questionArea = $("#slides")
const countNumber = 10;


// Make an array for questions
const questionArray = [ {
    question: "Which of the following is not an insect?",
    answers: ["Ant", "Spider"],
    correctedAnswer: ["Spider"]
}, {
    question: "",
    answers: ["", ""],
    correctedAnswer: [""]
}
];

//
const game = {

    questions: questions,
    currentQuestion: 0,
    counter: countNumber,
    correct: 0,
    incorrect: 0,

    countDown: function() {
        game.counter--;
        $("#counter-number").text(game.counter);
        if (game.counter === 0) {
            console.log("TIMES UP!");
            game.timeUp();
        }
    },

    getQuestions: function() {
        
        clearInterval(timer);


    }
}
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
        
        setInterval(game.countDown, 1500);

        panel.html("<h1>" + question[this.currentQuestion].question + "</h2>");

        for (var i = 0; i < question[this.currentQuestion].answers.length; i ++) {
            
            panel.append("<button class='answer-button' id='button' data-name='" + questions[this.currentQuestion].answers[i]
      + "'>" + questions[this.currentQuestion].answers[i] + "</button>");
        }
    },
    
    nextQuestion: function() {
        game.counter = countNumber;
        $("#Counter-Number").text(game.counter);
        game.currentQuestion++;
        game.getQuestions();
    },

    timeUp: function() {

        clearInterval(timer);

        
    }
}

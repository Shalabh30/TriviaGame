// Define a variable "question" to hold 6 questions, 3 choice of answers / question and correct answer
// define variables to hold correct answers, incorrect answers
// define a varibale to hold the timer
// If answer to question is correct then increment correct answer else increment incorrect answer


var panel = $("#quiz-area");

// Question set
var questions = [{
  question: "Which is the closest planet to Sun?",
  answers: ["Earth", "Mercury", "Neptune", "Venus"],
  correctAnswer: "Mercury"
}, {
  question: "How many moon does mars have?",
  answers: ["13", "1", "2", "50"],
  correctAnswer: "2"
}, {
  question: "which is the smallest planet?",
  answers: ["Earth", "Mercury", "Neptune", "Venus"],
  correctAnswer: "Mercury"
}, {
  question: "which is the largest planet?",
  answers: ["Earth", "Jupiter", "Saturn", "Mars"],
  correctAnswer: "Jupiter"
}, {
  question: "what are comets mostly made of?",
  answers: ["Liquid", "Dust", "Metals", "Rock"],
  correctAnswer: "Dust"
}, {
  question: "The largest volcano in solar system is called Olympus Mons. Where is it located?",
  answers: ["Earth", "Jupiter", "Saturn", "Mars"],
  correctAnswer: "Mars"
}, {
   question: "what is sun mainly made of?",
  answers: ["Gas", "Iron", "Rock", "Lava"],
  correctAnswer: "Gas"
}, {
  question: "Which planet has ring?",
  answers: ["Earth", "Jupiter", "Saturn", "Mars"],
  correctAnswer: "Saturn"
}, {
  question: "Which planet is known as the Red Planet?",
  answers: ["Earth", "Jupiter", "Saturn", "Mars"],
  correctAnswer: "Mars"
}];

// Variable that will hold the setInterval
var timer;

var game = {

  correct: 0,
  incorrect: 0,
  counter: 90,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id='counter-number'>90</span> Seconds</h2>");

    $("#start").remove();

    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }

    panel.append("<button id='done'>Done</button>");
  },

  done: function() {

    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() === questions[0].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() === questions[6].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() === questions[7].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() === questions[8].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub-wrapper h2").remove();

    panel.html("<h2>Time Up!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});

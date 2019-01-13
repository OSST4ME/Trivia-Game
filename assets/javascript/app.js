var panel = $('#quiz-area');

$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});

var questions = [{
    question: "1 . What's the name of the company that creates all of Wile E. Coyote's many devices ?",
    answers: ["Acme", "Acne", "boom", "Rocket"],
    correctAnswer: "Acme"
  }, {
    question: "2 . What does Marvin the Martian call his stick of dynomite?",
    answers: ["The P-43 Thermal Detonator", "The Illudium Q-36 Explosive Space Modulator", "The Ultimate Nullifier", "The Galactic Terminator"],
    correctAnswer: "The Illudium Q-36 Explosive Space Modulator"
  }, {
    question: "3 . What century does Duck Dodgers call home?",
    answers: ["The 21st and a half Century", "The 22nd and a half Century", "The 23rd and a half Century", "The 24th and a half Century"],
    correctAnswer: "The 24th and a half Century"
  }, {
    question: "4 . The short 'What's Opera Doc?' lampoons the works of which composer?",
    answers: ["Mozart", "Wagner", "Verdi", "Chopin"],
    correctAnswer: "Wagner"
  }, {
    question: "5 . What was the name of Looney Tunes' sister series?",
    answers: ["Silly Symphonies", "Merrie Melodies", "Happy Harmonies", "Loonie Toonies"],
    correctAnswer: "Merrie Melodies"
  }, {
    question:  "6 . Which Looney Tunes character had the earliest debut?",
    answers: ["Daffy Duck", "Tazmanian Devil", "Tweety", "Porky Pig"],
    correctAnswer: "Porky Pig"
  }, {
    question: "7 . Complete this Buggs Bunny quote, 'I knew I should have taken that left turn at ______?",
    answers: ["Pismo Beach", "Albuquerque", "Tallahassee", "Brooklyn"],
    correctAnswer: "Albuquerque"
  }, {
    question: "8 . Which major character did Mel Blanc NOT originally voice?",
    answers: ["Sylvester the Cat", "Marvin Martian", "Yosemite Sam", "Elmer Fudd"],
    correctAnswer: "Elmer Fudd"
  }, {
    question: "9 . What color was the original 'Tweety'?",
    answers: ["Pink", "Yellow", "Baby Blue", "Green"],
    correctAnswer: "Pink"
  }, {
    question: "10 . What is the name of the theme song played during the opening?",
    answers: ["The Wheels On The Bus", "Rubber Duckie", "Merry Go Round Broke Down", "Zany In The Brainy"],
    correctAnswer: "Merry Go Round Broke Down"
  }];

var game = {
  correct:0,
  incorrect:0,
  counter:30,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">30</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Done</button>');
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() == questions[8].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-9']:checked"), function() {
      if ($(this).val() == questions[9].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>All Done!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};
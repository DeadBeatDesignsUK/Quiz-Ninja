alert('Welcom to the Quiz Ninja!');

const quiz = [  // quiz array including questions and answers
    ["What is superman's real name?", "Clark Kent"],
    ["What is wonder woman's real name?", "Diana Prince"],
    ["what is batman's real name?", "Bruce Wayne"]
];

function start (quiz) {
    let score = 0; // initialise score
}
    // main loop game
for (const [question,answer] of quiz){
    const response = ask(question);
    check(response,answer);
}

    // end of main game loop
    
    gameOver();

    // function declarations
   function ask(question) {
        return prompt(question);
    }

    function check(response,answer) {
        if (response === answer) {
            alert ('correct');
            score++;
        } else {
            alert(`Wrong! The correct answer was ${answer}`);
        }
    }

    function gameOver() {
        alert(`Game over, you scored ${score} point${score != 1 ? 's' : ''}`);
    }
    start(quiz); 
   
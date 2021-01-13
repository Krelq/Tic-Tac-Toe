// settings
var fields = [
    '', '', '',
    '', '', '',
    '', '', ''
];

const winningSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

var player = [
    'X', 'O'
];

var turn = 0;

var gameFreeze = false;

const winnerText = document.getElementById('winner')
const button = document.getElementById('reset');
button.addEventListener("click", function() {
    resetGame();
});
// settings

// functions
function makeMove(field) {
    if(gameFreeze === true) return;
    if(fields[field] !== '') return;
    document.getElementById(field).innerHTML = player[turn];
    fields[field] = turn;
    if (isWinner()) {
        gameFreeze = true;
        button.style.visibility = 'visible';
        button.style.opacity = '100%';
        winnerText.style.visibility = 'visible';
        winnerText.style.opacity = '100%';
        winnerText.innerHTML += player[turn];
        return
    }
    if(isDraw()) {
        gameFreeze = true;
        button.style.visibility = 'visible';
        button.style.opacity = '100%';
        winnerText.style.visibility = 'visible';
        winnerText.style.opacity = '100%';
        winnerText.innerHTML = 'DRAW';
        return
    }
    if (turn === 0) {
        turn = 1;
    } else {
        turn = 0;
    }
}

function isWinner() {
    for (var i = 0; i <= 7; i++) {
        const winSequence = winningSequences[i];
        let a = fields[winSequence[0]];
        let b = fields[winSequence[1]];
        let c = fields[winSequence[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            return true;
        }
    }
}

function isDraw() {
    var counter = 0;
    for(var i = 0; i < 8; i++) {
        if(fields[i] !== '') counter++;
    }
    if(counter === 8) {
        return true;
    }
}

function resetGame() {
    gameFreeze = false;
    turn = 0;
    fields = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    for(i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = '';
    }
    console.log('elo');
    button.style.visibility = 'hidden';
    button.style.opacity = '0%';
    winnerText.style.visibility = 'hidden';
    winnerText.style.opacity = '0%';
    winnerText.innerHTML = "Winner: ";
}
// functions
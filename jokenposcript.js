const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

const rockMachine = document.getElementById('rock-machine')
const paperMachine = document.getElementById('paper-machine')
const scissorsMachine = document.getElementById('scissors-machine')

let humanScoreNumber = 0
let machineScoreNumber = 0

const GAME_OPTIONS = {
     ROCK: 'rock',
     PAPER: 'paper',
     SCISSORS: 'scissors'
}

const COLOR_OPTIONS = {
    RED: 'red',
    BLACK: 'black'
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}



const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]

    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}

const playTheGame = (human, machine) => {
    console.log("Humano: " + human + "Maquina: " + machine)

    if(human === machine){
        result.innerHTML = "Deu empate!"
    } else if ( (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
                (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
                (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER) ){
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!"
    } else {
        result.innerHTML = "Você perdeu!"

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
    }
    
    if (machine === 'rock') {
        rockMachine.style.backgroundColor = COLOR_OPTIONS.RED
        scissorsMachine.style.backgroundColor = COLOR_OPTIONS.BLACK
        paperMachine.style.backgroundColor = COLOR_OPTIONS.BLACK
    } else if (machine === 'paper') {
        rockMachine.style.backgroundColor = COLOR_OPTIONS.BLACK
        scissorsMachine.style.backgroundColor = COLOR_OPTIONS.BLACK
        paperMachine.style.backgroundColor = COLOR_OPTIONS.RED
    } else if (machine === 'scissors') {
        rockMachine.style.backgroundColor = COLOR_OPTIONS.BLACK
        scissorsMachine.style.backgroundColor = COLOR_OPTIONS.RED
        paperMachine.style.backgroundColor = COLOR_OPTIONS.BLACK
    }
}

function reiniciarJogo() {
    location.reload();
  }
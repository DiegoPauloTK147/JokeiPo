const playHuman = (humanChoice) => {
    console.log(humanChoice)
    changeMachineChoise()
}

function changeMachineChoise() {
    const span = document.getElementById('showChoiceMachine');
    span.textContent = playMachine()
}
    


const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors']

    const randomNumber = Math.floor(Math.random() * 3)


    return choices[randomNumber]
}


const pointHuman = document.getElementById("pointHuman")

pointHuman = 0

const pointMachine = document.getElementById("pointMachine")

pointMachine = 0

if (playHuman === playMachine){
    console.log("empate")
}
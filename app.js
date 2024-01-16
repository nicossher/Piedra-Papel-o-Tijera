let userScore = 0;
let compuScore = 0;
const userScore_span = document.getElementById("user-score");
const compuScore_span = document.getElementById("compu-score");
const tablero = document.querySelector(".tablero");
const resultado = document.querySelector(".ganador");
const piedra = document.getElementById("piedra");
const papel = document.getElementById("papel");
const tijera = document.getElementById("tijera");

function getCompuChoice () {
    const choices = [`piedra`, `papel`, `tijera`];
    const numeroRandom = Math.floor(Math.random() * 3);
    return choices[numeroRandom];
}

function ganar (user, compu){
    userScore++;
    userScore_span.innerHTML = userScore;
    resultado.innerHTML = `${user} gana a ${compu}, GANASTE`;
    document.getElementById(user).classList.add(`verde-ganador`);
    setTimeout(() => document.getElementById(user).classList.remove(`verde-ganador`), 300);
} 
function perder (user, compu){
    compuScore++;
    compuScore_span.innerHTML = compuScore;
    resultado.innerHTML = `${user} pierde con ${compu}, PERDISTE`;
    document.getElementById(user).classList.add(`rojo-perdedor`);
    setTimeout(() => document.getElementById(user).classList.remove(`rojo-perdedor`), 300);
    
} 
function empate (user, compu){
    resultado.innerHTML = `ambos elijeron ${user}, EMPATASTE`;
    document.getElementById(user).classList.add(`gris-empate`);
    setTimeout(() => document.getElementById(user).classList.remove(`gris-empate`), 300);
} 


function game (choice) {
    const compuChoice = getCompuChoice();
    switch (choice + "-" + compuChoice){
        case "piedra-piedra":
        case "papel-papel":
        case "tijera-tijera":
            empate(choice, compuChoice);
            break;
        case "piedra-tijera":
        case "papel-piedra":
        case "tijera-papel":
            ganar(choice, compuChoice);
            break;
        case "piedra-papel":
        case "papel-tijera":
        case "tijera-piedra":
            perder(choice, compuChoice);
            break;
    }
}

function main (){
piedra.addEventListener(`click`,() => game("piedra"));
papel.addEventListener(`click`,() => game("papel"));
tijera.addEventListener(`click`,() => game("tijera"));
}

main ();
const OPTIONS = ["rock","paper","scissors"]
const WIN = "You win! :D"
const LOOSE = "You loose.."
const TIE = "It's a tie! Get ready for the next round."
let playerPlay
let playerScore=0
let computerScore=0
let roundCounter=0
let check
let playerValidated

commands();
//Helper functions -------------------------
//General 
function commands(){
    console.info("Welcome hooman. You can start a new game by typing \"game()\" in the console.")
}
//Ask user to start new game. If true, initialize points and rounds.
function initialize(){
    if (confirm("Do you want to start a new game?")===true){
    console.log("Okay, we're starting a new game!")
    alert("Okay, we're starting a new game!")
    playerPlay=0;
    computerScore=0;
    roundCounter=0;
    game()
    }
    else {
        alert("Roger that! If you want to play a new game later, write \"game()\" in the console.")
    }
} 
function computerPlay() {
    return OPTIONS[Math.floor(Math.random()*OPTIONS.length)]
}
//Prompts user to input a valid string
function playerValidate(playerPlay){
    playerPlay= prompt("Choose your weapon! You can choose between \"Rock\", \"Paper\", \"Scissors\"")
    while (!OPTIONS.includes(playerPlay.toLowerCase())){
        playerPlay = prompt(`The \"${playerPlay}\" is a mighty forbidden weapon! Make sure to select either \"Rock\", \"Paper\" or \"Scissors\"`);
    }
    playerValidated=playerPlay.toLowerCase();
    }
//Criers show results to user
function crierScoreChecker() {
    if (check.includes(TIE)) {
        contentScore.textContent = `Round ${roundCounter}: ${TIE}`
        console.log(`Round ${roundCounter}: ${TIE}`)
    }
    else if (check.includes(WIN)){
        playerScore++;
        console.log(`Round ${roundCounter}: Nice job with this round, ${check} \nYour score: ${playerScore} | Computer score: ${computerScore}`)
        contentScore.textContent = (`Round ${roundCounter}: Nice job with this round, ${check} \nYour score: ${playerScore} | Computer score: ${computerScore}`)
    }
    else if (check.includes(LOOSE)) {
        computerScore++;
        console.log(`Round ${roundCounter}: Unfortunately this time ${check} \nYour score: ${playerScore} | Computer score: ${computerScore}`)
        contentScore.textContent = (`Round ${roundCounter}: Unfortunately this time ${check} \nYour score: ${playerScore} | Computer score: ${computerScore}`);
    }
    else {
        console.log("Something went wrong while checking scores.")
        ontentScore.textContent = "Something went wrong while checking scores."
        return
    }
}

function crierGameResults(){
    if (playerScore===5){
        console.log(`Rejoice mortal! You won in ${roundCounter} rounds! \nYour score: ${playerScore} | Computer score: ${computerScore}`)
        contentScore.textContent = `Rejoice mortal! You won in ${roundCounter} rounds! \nYour score: ${playerScore} | Computer score: ${computerScore}`
    }
    else if (computerScore===5) {
        console.log(`The computer won. Neverlucky. The game lasted ${roundCounter} rounds \nYour score: ${playerScore} | Computer score: ${computerScore}`)
        contentScore.textContent = `The computer won. Neverlucky. The game lasted ${roundCounter} rounds \nYour score: ${playerScore} | Computer score: ${computerScore}`
    }
    else {
        console.log("How did we achieve such a result?")
    }
}
//End of helper functions ------------------

//Plays a single round and return a string.
function singleRound(playerPlay,computerPlay) {
    let computerPlayLc=computerPlay();
    if (playerPlay === computerPlayLc) {
        check=TIE
    }
    else {
        switch (playerPlay+computerPlayLc) {
            case ("rockpaper"):
                check=`Paper wraps Rock! ${LOOSE}`;
                break;
            case ("rockscissors"):
                check=`Rock blunts Scissors! ${WIN}`;
                break;
            case ("paperrock"):
                check=`Paper wraps Rock! ${WIN}`;
                break;
            case("paperscissors"):
                check=`Scissors cut Paper! ${LOOSE}`;
                break;
            case("scissorsrock"):
                check=`Rock blunts Scissors! ${LOOSE}`;
                break;
            case("scissorspaper"):
                check=`Scissors cut Paper! ${WIN}`;
                break;
            default:
                check="You broke it. Or the dev did. Whatever, go home script, you're drunk..";
        }
    }
    gameControl()
}
//Game control
function gameControl(){
    if (playerScore!==5 && computerScore!==5) {
    roundCounter++;
    crierScoreChecker();
    divScore.appendChild(contentScore)
    }
    else {
        crierGameResults();
    }
}

const choices = document.querySelectorAll("button.option")
const divScore = document.querySelector("div.score-checker")
const contentScore = document.createElement("p")



choices.forEach(element => {
    element.addEventListener("click", (e) => {
        singleRound(e.target.id, computerPlay)
    });
});
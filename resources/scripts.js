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
function initialize(){
    playerPlay=0;
    computerScore=0;
    roundCounter=0;
} 
function computerPlay() {
    return OPTIONS[Math.floor(Math.random()*OPTIONS.length)]
}
function playerValidate(playerPlay){
    playerPlay= prompt("Choose your weapon! You can choose between \"Rock\", \"Paper\", \"Scissors\"")
    while (!OPTIONS.includes(playerPlay.toLowerCase())){
        playerPlay = prompt(`The \"${playerPlay}\" is a mighty forbidden weapon! Make sure to select either \"Rock\", \"Paper\" or \"Scissors\"`);
    }
    playerValidated=playerPlay.toLowerCase();
    }
//Add points to player or computer score.
function scoreChecker() {
    if (check.includes(TIE)) {
        console.log(`Round ${roundCounter}: You both choosed ${TIE}`)
    }
    else if (check.includes(WIN)){
        console.log(`Round ${roundCounter}: Nice job with this round, ${WIN}`)
        playerScore++;
    }
    else if (check.includes(LOOSE)) {
        console.log(`Round ${roundCounter}: Unfortunately this time ${LOOSE}`)
        computerScore++;
    }
    else {
        console.log("Something went wrong while checking scores.")
        return        
    }
}
//Criers show results to user
function crierScores(){
    console.log(`Your score was: ${playerScore}, while computer was: ${computerScore}`)
}

function crierGameResults(){
    if (playerScore===5){
        console.log(`Rejoice mortal! You won in ${roundCounter} rounds!`)
        crierScores()
    }
    else if (computerScore===5) {
        console.log(`The computer won. Neverlucky. The game lasted ${roundCounter} rounds`)
        crierScores()
    }
    else {
        console.log("How did we achieve such a result?")
        crierScores()
    }
}
//End of helper functions ------------------

//Plays a single round and return a string.
function singleRound(playerPlay,computerPlay) {
    playerValidate(playerPlay);
    let computerPlayLc=computerPlay();
    if (playerValidated === computerPlayLc) {
        check=TIE
    }
    else {
        switch (playerValidated+computerPlayLc) {
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
    
}
//Game control
function game(){
    while (playerScore<5 && computerScore<5){
    roundCounter++;
    singleRound(playerPlay,computerPlay);
    scoreChecker(singleRound);
    }
    crierGameResults();
    initialize();
}
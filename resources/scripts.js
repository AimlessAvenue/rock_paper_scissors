const OPTIONS = ["rock","paper","scissors"]
const WIN = "You win! :D"
const LOOSE = "You loose.."
const TIE = "It's a tie! Get ready for the next round."
let playerPlay = "RoCk"
let playerScore=0
let computerScore=0
let check
let roundCounter=0

//Helper functions 
function computerPlay() {
    return OPTIONS[Math.floor(Math.random()*OPTIONS.length)]
}
//Add points to player or computer score.
function scoreChecker() {
    if (check.includes(TIE)) {
        console.log(`Round ${roundCounter}: ${TIE}`)
    }
    else if (check.includes(WIN)){
        console.log(`Round ${roundCounter}: Nice job with this round, ${WIN}`)
        playerScore++;
    }
    else if (check.includes(LOOSE)) {
        console.log(`Round ${roundCounter}:Unfortunately this time ${LOOSE}`)
        computerScore++;
    }
    else {
        console.log("Something went wrong while checking scores.")
        return        
    }
}
function crierScores(){
    console.log(`Your score was: ${playerScore}, while computer was: ${computerScore}`)
}
//Logs in console the results of the game.
function crierGameResults(){
    if (playerScore===5){
        console.log(`Rejoice mortal! You won in ${roundCounter} rounds!`)
        crierScores()
    }
    else if (computerScore===5) {
        console.log(`The computer won. Neverlucky. The game lasted ${roundCounter}`)
        crierScores()
    }
    else {
        console.log("How did we achieve such a result?")
        crierScores()
    }
}
//End of helper functions ^^^

//Plays a single round and return a string.
function singleRound(playerPlay,computerPlay) {
    let computerPlayLc=computerPlay();
    let playerPlayLc = playerPlay.toLowerCase()
    if (playerPlayLc === computerPlayLc) {
        check=TIE
    }
    else {
        switch (playerPlayLc+computerPlayLc) {
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
}
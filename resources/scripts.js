const OPTIONS = ["rock","paper","scissors"]
const WIN = "You win! :D"
const LOOSE = "You loose"
let playerPlay = "RoCk"

function computerPlay() {
    return OPTIONS[Math.floor(Math.random()*OPTIONS.length)]
}

function singleRound(playerPlay,computerPlay) {
    let computerPlayLc=computerPlay();
    let playerPlayLc = playerPlay.toLowerCase()
    if (playerPlayLc === computerPlayLc) {
        return "It's a tie! Get ready for the next round."
    }
    else {
        switch (playerPlayLc+computerPlayLc) {
            case ("rockpaper"):
                return `Paper wraps Rock! ${LOOSE}`;
                break;
            case ("rockscissors"):
                return `Rock blunts Scissors! ${WIN}`;
                break;
            case ("paperrock"):
                return `Paper wraps Rock! ${WIN}`;
                break;
            case("paperscissors"):
                return `Scissors cut Paper! ${LOOSE}`;
                break;
            case("scissorsrock"):
                return `Rock blunts Scissors! ${LOOSE}`;
                break;
            case("scissorspaper"):
                return `Scissors cut Paper! ${WIN}`;
                break;
            default:
                return "You broke it. Or the dev did. Whatever, go home script, you're drunk..";
        }
    }
    
}
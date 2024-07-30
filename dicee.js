//player1 random generation
const play = () => {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; // num 1-6
    var imageSrc1 = "images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", imageSrc1);
    //player2 random generation
    var randomNumber2 = Math.floor(Math.random() * 6) + 1; // num 1-6
    var imageSrc2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", imageSrc2);

    //who win condition
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "Player 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").textContent = "Player 2 Wins!";
    }
    else {
        document.querySelector("h1").textContent = "Draw!";
    }
}
const button = document.querySelector('button');
button.addEventListener('click', () => {
    play();
});

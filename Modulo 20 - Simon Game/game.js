var gameStarted = false;
var userClickedIndex = 0;
var level = 0;
var gamePattern = [];
const buttonColours = ["red", "blue", "green", "yellow"];
var levelTitle = $("#level-title");
var body = $("body");

function nextValue() {
    return Math.floor(Math.random() * 4);
}

function nextSequence() {
    userClickedIndex = 0;
    level++;
    levelTitle.text("Level " + level);
    var randomChosenColour = buttonColours[nextValue()];
    gamePattern.push(randomChosenColour);
    var button = $("#" + randomChosenColour);
    button.fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(
        () => $("#"+currentColour).removeClass("pressed"),
        100
    );
}

// click buttons
$(".btn").click(
    function(btn) {
        if (!gameStarted) return;
        userClickedIndex++;
        var pickedColour = btn.target.id;
        animatePress(pickedColour);
        // Eleccion correcta
        if (gamePattern[userClickedIndex-1] === pickedColour) {
            playSound(pickedColour);
            // completa el patron correctamente
            if (userClickedIndex === gamePattern.length) {
                setTimeout(() => nextSequence(), 1000);
            }
        } else {
            body.addClass("game-over");
            setTimeout(() => body.removeClass("game-over"), 200);
            playSound("wrong");
            levelTitle.text("Game Over, Press Any Key to Restart");
            gameStarted = false;
        }
    }
);

// Iniciar o Reiniciar el juego
body.on(
    "keydown",
    () => {
        if (!gameStarted) {
            level = 0;
            gameStarted = true;
            gamePattern = [];
            nextSequence();
        }
    }
);
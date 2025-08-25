function handleClick(){    
    handleEvent(this.textContent);
}

function handleKeyDown(event){
    handleEvent(event.key.toLowerCase());
}

function playAnimation(selection){
    var activeButton = document.querySelector("."+selection);
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 500);
}

function handleEvent(selection){
    var audio;
    switch(selection) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("./sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("./sounds/crash.mp3");
            break;
        case "l":
            audio = new Audio("./sounds/kick-bass.mp3");
            break;
        default:
            return;
    }
    playAnimation(selection);
    audio.play();
}
                                                    
var drums = document.querySelectorAll(".drum");
drums.forEach(
    (drum) => {
        drum.addEventListener("click",  handleClick);
        drum.addEventListener("keydown", (event) => handleKeyDown(event));
        drum.focus()
    }
); 

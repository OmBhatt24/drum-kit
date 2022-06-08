for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {

    document.querySelectorAll(".drum")[index].addEventListener("click", handleClick);
}
function handleClick() {

    var buttonInnerHTML = this.innerHTML;
    keySound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
}

document.addEventListener("keydown",function(event){
    keySound(event.key);
    buttonAnimation(event.key);
});


function keySound(char){
    switch (char) {
        case "w":
            var myAudio = new Audio("sounds/tom-1.mp3");
            myAudio.play();
            break;
        case "a":
            var myAudio = new Audio("sounds/tom-2.mp3");
            myAudio.play();
            break;
        case "s":
            var myAudio = new Audio("sounds/tom-3.mp3");
            myAudio.play();
            break;
        case "d":
            var myAudio = new Audio("sounds/tom-4.mp3");
            myAudio.play();
            break;
        case "j":
            var myAudio = new Audio("sounds/snare.mp3");
            myAudio.play();
            break;
        case "k":
            var myAudio = new Audio("sounds/crash.mp3");
            myAudio.play();
            break;
        case "l":
            var myAudio = new Audio("sounds/kick-bass.mp3");
            myAudio.play();;
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}


function buttonAnimation(currentKey){
    var activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}
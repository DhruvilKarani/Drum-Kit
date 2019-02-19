
for (i=0;i<document.querySelectorAll("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click", function clickSound() {
  var button = this.innerHTML;
  makeSound(button);
  buttonAnimation(button);

}
);
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(button){
  switch (button) {
    case "w":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "w":
      var sound = new Audio("sounds/crash.mp3");
      sound.play();
      break;
    case "a":
      var sound = new Audio("sounds/kick-bass.mp3");
      sound.play();
      break;
    case "s":
      var sound = new Audio("sounds/snare.mp3");
      sound.play();
      break;
    case "d":
      var sound = new Audio("sounds/tom-1.mp3");
      sound.play();
      break;
    case "j":
      var sound = new Audio("sounds/tom-2.mp3");
      sound.play();
      break;
    case "k":
      var sound = new Audio("sounds/tom-3.mp3");
      sound.play();
      break;
    case "l":
      var sound = new Audio("sounds/tom-4.mp3");
      sound.play();
      break;

    default:
      console.log(button)
}
}

function buttonAnimation(key){
  var active = document.querySelector('.'+key);
  active.classList.add("pressed");

  setTimeout(function(){
    active.classList.remove("pressed");
  },200);
}

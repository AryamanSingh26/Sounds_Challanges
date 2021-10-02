for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll('button')[i].addEventListener("click",handleClick);
}


function handleClick() {
  var displayInner= this.innerHTML;
  makeSound(displayInner);
  buttonAnimation(displayInner);
  }
  document.addEventListener('keydown', function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });
  function makeSound(key) {
    switch (key) {
      case "w":
        var audio= new Audio("tom-1.mp3");
        audio.play();
        break;
        case "a":
          var audio= new Audio("tom-2.mp3");
          audio.play();
          break;
        case "s":
          var audi= new Audio("tom-3.mp3");
          audi.play();
          break;
        case "d":
          var aud= new Audio("tom-4.mp3");
          aud.play();
          break;
        case "j":
          var au= new Audio("crash.mp3");
          au.play();
          break;
        case "k":
          var kick= new Audio("kick-bass.mp3");
          kick.play();
          break;
        case "l":
          var snare= new Audio("snare.mp3");
          snare.play();
          break;
      default: alert("you have a wrong input please select from displayed");
  }
}
  function buttonAnimation(currentKey) {
    var activeButton= document.querySelector('.'+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }

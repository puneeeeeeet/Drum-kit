
var numberOfButton = document.querySelectorAll(".drum").length;
for(var i=0; i <numberOfButton;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

  function handleClick(){
    var buttonInnerHTML = this.innerHTML;

          switch (buttonInnerHTML) {
            case "w":
              var crash = new Audio("sound/crash.mp3");
              crash.play();

              break;
            case "a":
              var kick = new Audio("sound/kick-bass.mp3");
              kick.play();
              break;

            case "s":
              var snare = new Audio("sound/snare.mp3");
               snare.play();
               break;

               case "d":
              var tom1 = new Audio("sound/tom-1.mp3");
               tom1.play();
               break;

               case "j":
              var audio1 = new Audio("sound/tom-2.mp3");
               audio1.play();
               break;

               case "k":
              var audio2 = new Audio("sound/tom-3.mp3");
               audio2.play();
               break;
               case "l":
                var audio3 = new Audio("sound/tom-4.mp3");
                 audio3.play();
                 break;

            default:console.log(buttonInnerHTML);
              break;
          }
  }
}

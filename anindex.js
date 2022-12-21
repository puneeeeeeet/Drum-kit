
var numberOfButton = document.querySelectorAll(".drum").length;
for(var i=0; i <numberOfButton;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);

  function handleClick(){
          var audio = new Audio("sound/crash.mp3");
          audio.play();
  }
}

window.onload = function(){
  Game.theme.src = "./Money.mp3";
  
  document.getElementById("start-button").onclick = function() {
    Game.startGame("canvasRock");
    Game.message.pictures = [
      "./img/Kurt_cobain.jpg"
    ]
    console.log(Game.message.pictures)

      

    console.log("It's on!!");
  }
}
function Message (game){
  this.game = game

  this.img = new Image();
  this.pictures = ["./img/winner.png"]
  // this.img.src = this.message[Math.floor(Math.random()*this.message.length)]
  
}
Message.prototype.choose = function(){
  var randomImg = Math.floor(Math.random() * (1 - 0) + 0);
  this.img.src = this.pictures[randomImg]
  
  this.drawImage();
}
Message.prototype.drawImage = function(){
  this.img.onload = function(){

    this.game.ctx.drawImage(this.img,500,0,800,800);
  }.bind(this)
  //debugger;

}
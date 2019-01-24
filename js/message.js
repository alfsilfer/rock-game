function Message (game){
  this.game = game

  this.img = new Image();
  this.pictures = []
  // this.img.src = this.message[Math.floor(Math.random()*this.message.length)]
  
}
Message.prototype.choose = function(){
  var randomImg = Math.round(Math.random() * (1 - 0) + 0);
  this.img.src = this.pictures[randomImg]
  this.drawImage();
}
Message.prototype.drawImage = function(){
  this.game.ctx.drawImage(this.img,650,0,800,800);
  //debugger;

}
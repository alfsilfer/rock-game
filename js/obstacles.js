function Obstacles(game){
this.game = game;

this.arrObs = [
  { x: 180, y: 600, width: 150, height: 30 },
  { x: 70, y: 700, width: 50, height: 25 },
]


} 
Obstacles.prototype.draw = function(){
  for(i=0; i<this.arrObs.length; i++){
    // this.game.ctx.fillStyle = "#fabada";
     this.game.ctx.fillRect(this.arrObs[i].x, this.arrObs[i].y, this.arrObs[i].width, this.arrObs[i].height);
  }

}
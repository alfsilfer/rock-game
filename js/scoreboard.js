function ScoreBoard(game) {
  this.game = game;
  
  }
ScoreBoard.prototype.scores = function(){
    this.game.ctx.font = "30px sans-serif";
    this.game.ctx.fillStyle = "black";
    this.game.ctx.fillText("Mike's hits "+this.game.players.player.score, 20, 50);
    this.game.ctx.fillText("Joe's hits "+this.game.players.player2.score, 1510, 50);
}

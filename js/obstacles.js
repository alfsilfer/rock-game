function Obstacles(game) {
  this.game = game;

  this.arrObs = [
    //Platforms
    { x: 0, y: 150, width: 350, height: 25 },
    { x: 150, y: 400, width: 150, height: 25 },
    { x: 150, y: 600, width: 150, height: 25 },
    { x: 400, y: 350, width: 900, height: 25 },
    { x: 700, y: 625, width: 100, height: 25 },
    { x: 1300, y: 150, width: 500, height: 25 },
    { x: 1600, y: 250, width: 100, height: 25 },
    { x: 1600, y: 400, width: 100, height: 25 },
    { x: 1600, y: 550, width: 100, height: 25 },
    //Square
    { x: 0, y: 500, width: 100, height: 100 },
    { x: 0, y: 300, width: 100, height: 100 },
    { x: 400, y: 150, width: 100, height: 100 },
    { x: 600, y: 150, width: 100, height: 100 },
    { x: 800, y: 150, width: 100, height: 100 },
    //Rectangles
    { x: 350, y: 680, width: 300, height: 150 },
    { x: 800, y: 550, width: 700, height: 100 },
    { x: 1000, y: 250, width: 300, height: 100 }
  ];
}
Obstacles.prototype.draw = function() {
  for (i = 0; i < this.arrObs.length; i++) {
    this.game.ctx.fillStyle = "#B06337";
    this.game.ctx.fillRect(
      this.arrObs[i].x,
      this.arrObs[i].y,
      this.arrObs[i].width,
      this.arrObs[i].height
    );
  }
};

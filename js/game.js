var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  frameCounter: 0,
  // obstacles: [],

  startGame: function() {
    this.background = new Background(this);
    this.player = new Player(this);
    this.obstacles = new Obstacles(this);

    this.canvas = document.getElementById("canvasRock");
    this.ctx = this.canvas.getContext("2d");
    // this.drawAll();

    this.player.setListeners();
    this.player.dontMove();
    this.interval = setInterval(
      function() {
        this.frameCounter++;
        //esto sirve para parar el juego
        if (this.frameCounter >= 1800) {
          this.stop();
        }
        this.clear();
        this.drawAll();
        this.player.updatePosition();
        this.detectObstacles();
      }.bind(this),
      1000 / this.fps
    );
  },
  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function() {
    clearInterval(this.interval);
  },
  drawAll: function() {
    this.background.draw();
    this.player.draw();
    this.obstacles.draw();
  },
  detectObstacles: function() {
    for (i = 0; i < this.obstacles.arrObs.length; i++) {
      var cond1 = this.player.x + this.player.width >= this.obstacles.arrObs[i].x;
      var cond2 = this.obstacles.arrObs[i].x + this.obstacles.arrObs[i].width >= this.player.x;
      var cond3 = this.player.y + this.player.height >= this.obstacles.arrObs[i].y;
      var cond4 = this.obstacles.arrObs[i].y + this.obstacles.arrObs[i].height >= this.player.y + this.player.height;

      if (cond1 && cond2 && cond3 && cond4) {
        this.player.y = this.obstacles.arrObs[i].y - this.player.height;
        this.player.speedY = 0
      }
    }
  }
};

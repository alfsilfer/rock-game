var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  frameCounter: 0,
  // obstacles: [],

  startGame: function(id) {
    this.background = new Background(this);
    this.player = new Player(this);
    this.player2 = new Player2(this);
    this.obstacles = new Obstacles(this);


    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    // this.drawAll();

    this.player.setListeners();
    this.player.dontMove();
    this.player2.setListeners2();
    this.player2.dontMove();
    this.interval = setInterval(
      function() {
        this.frameCounter++;
        //esto sirve para parar el juego
        if (this.frameCounter >= 1800) {
          this.stop();
        }
        this.clear();
        this.drawAll();
        this.detectObstacles();
        this.detectObstaclesP2();
        this.player.updatePosition();
        this.player.boundary();
        this.player2.updatePosition();
        this.player2.boundary();
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
    this.obstacles.draw();
    this.player.draw();
    this.player2.draw();
  },
  detectObstacles: function() {
    var cond1, cond2, cond3, cond4;
    for (i = 0; i < this.obstacles.arrObs.length; i++) {
      cond1 = this.player.x + this.player.width >= this.obstacles.arrObs[i].x;
      cond2 = this.obstacles.arrObs[i].x + this.obstacles.arrObs[i].width >= this.player.x;
      cond3 = this.player.y + this.player.height >= this.obstacles.arrObs[i].y;
      cond4 = this.obstacles.arrObs[i].y + this.obstacles.arrObs[i].height >= this.player.y + this.player.height;

      if (cond1 && cond2 && cond3 && cond4) {
        this.player.y = this.obstacles.arrObs[i].y - this.player.height;
        this.player.speedY = 0
      }
    }
  },
  detectObstaclesP2: function() {
    var cond1, cond2, cond3, cond4;
    for (i = 0; i < this.obstacles.arrObs.length; i++) {
      cond1 = this.player2.x + this.player2.width >= this.obstacles.arrObs[i].x;
      cond2 = this.obstacles.arrObs[i].x + this.obstacles.arrObs[i].width >= this.player2.x;
      cond3 = this.player2.y + this.player2.height >= this.obstacles.arrObs[i].y;
      cond4 = this.obstacles.arrObs[i].y + this.obstacles.arrObs[i].height >= this.player2.y + this.player2.height;

      if (cond1 && cond2 && cond3 && cond4) {
        this.player2.y = this.obstacles.arrObs[i].y - this.player2.height;
        this.player2.speedY = 0
      }
    }
  }
  
};

var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  frameCounter: 0,
  players : {},

  startGame: function(id) {
    this.background = new Background(this);
    this.player = new Player(this);
    this.player.playerNumber = 1;
    this.player2 = new Player(this);
    this.player2.x = 1650;
    this.player2.playerNumber = 2;
    this.obstacles = new Obstacles(this);

    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    // this.drawAll();

    this.setListeners();
    this.dontMove();
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
      cond2 =
        this.obstacles.arrObs[i].x + this.obstacles.arrObs[i].width >=
        this.player.x;
      cond3 = this.player.y + this.player.height >= this.obstacles.arrObs[i].y;
      cond4 =
        this.obstacles.arrObs[i].y + this.obstacles.arrObs[i].height >=
        this.player.y + this.player.height;

      if (cond1 && cond2 && cond3 && cond4) {
        this.player.y = this.obstacles.arrObs[i].y - this.player.height;
        this.player.speedY = 0;
      }
    }
  },
  detectObstaclesP2: function() {
    var cond1, cond2, cond3, cond4;
    for (i = 0; i < this.obstacles.arrObs.length; i++) {
      cond1 = this.player2.x + this.player2.width >= this.obstacles.arrObs[i].x;
      cond2 =
        this.obstacles.arrObs[i].x + this.obstacles.arrObs[i].width >=
        this.player2.x;
      cond3 =
        this.player2.y + this.player2.height >= this.obstacles.arrObs[i].y;
      cond4 =
        this.obstacles.arrObs[i].y + this.obstacles.arrObs[i].height >=
        this.player2.y + this.player2.height;

      if (cond1 && cond2 && cond3 && cond4) {
        this.player2.y = this.obstacles.arrObs[i].y - this.player2.height;
        this.player2.speedY = 0;
      }
    }
  },
  setListeners: function() {
    document.onkeydown = function(event) {
      switch (event.keyCode) {
        case 65:
          this.player.moveLeft();
          break;
        case 68:
          this.player.moveRight();
          break;
        case 87:
          this.player.y -= 150;
          break;
        case 81:
          this.player.punch();
          break;
        case 75:
          this.player2.moveLeft();
          break;
        case 192:
          this.player2.moveRight();
          break;
        case 79:
          this.player2.y -= 150;
          break;
        case 73:
          this.player2.punch();
          break;
      }
    }.bind(this);
  },
  dontMove: function() {
    document.onkeyup = function(event) {
      switch (event.keyCode) {
        case 68:
        case 65:
        case 75:
        case 192:
          // case 83:
          // case 87:
          this.player.noMove();
          this.player2.noMove();
          break;
      }
    }.bind(this);
  }
};

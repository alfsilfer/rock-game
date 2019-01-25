var Game = {
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  framesCounter: 0,
  players: {},
  interval: undefined,
  theme: new Audio(),
  // gameOverFlag: false,

  startGame: function(id) {
    this.background = new Background(this);
    this.players.player = new Player(this);
    this.players.player.playerName = "player";
    this.players.player2 = new Player(this);
    this.players.player2.x = 1600;
    this.players.player2.playerName = "player2";
    this.obstacles = new Obstacles(this);
    this.score = new ScoreBoard(this);
    this.message = new Message(this);
    this.theme.play();

    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    // this.drawAll();
    this.button()
    this.setListeners();
    this.dontMove();
    // this.audio.onload();
    this.interval = setInterval(
      function() {
        this.framesCounter++;
        //esto sirve para parar el juego
        // if (this.framesCounter >= 3600) {
        //   this.stop();
        // }
        // if (this.framesCounter % 10 === 0){
        //   this.players.player.punch();
        //   this.players.player2.punch();
        //   } 
        this.clear();
        this.drawAll();
        this.detectObstacles();
        this.detectObstaclesP2();
        this.score.scores();
        this.players.player.updatePosition();
        this.players.player.boundary();
        this.players.player2.updatePosition();
        this.players.player2.boundary();
        this.players.player.animateImg();
        this.players.player2.animateImg();
        this.gameOver();
        
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
    this.players.player.draw();
    this.players.player2.draw();
  },
  detectObstacles: function() {
    var cond1, cond2, cond3, cond4;
    //debugger
    for (i = 0; i < this.obstacles.arrObs.length; i++) {
      cond1 =
        this.players.player.x + this.players.player.width >=
        this.obstacles.arrObs[i].x;
      cond2 =
        this.obstacles.arrObs[i].x + this.obstacles.arrObs[i].width >=
        this.players.player.x;
      cond3 =
        this.players.player.y + this.players.player.height >=
        this.obstacles.arrObs[i].y;
      cond4 =
        this.obstacles.arrObs[i].y + this.obstacles.arrObs[i].height >=
        this.players.player.y + this.players.player.height;

      if (cond1 && cond2 && cond3 && cond4) {
        this.players.player.y =
          this.obstacles.arrObs[i].y - this.players.player.height;
        this.players.player.speedY = 0;
      }
    }
  },
  detectObstaclesP2: function() {
    var cond1, cond2, cond3, cond4;
    for (i = 0; i < this.obstacles.arrObs.length; i++) {
      cond1 =
        this.players.player2.x + this.players.player2.width >=
        this.obstacles.arrObs[i].x;
      cond2 =
        this.obstacles.arrObs[i].x + this.obstacles.arrObs[i].width >=
        this.players.player2.x;
      cond3 =
        this.players.player2.y + this.players.player2.height >=
        this.obstacles.arrObs[i].y;
      cond4 =
        this.obstacles.arrObs[i].y + this.obstacles.arrObs[i].height >=
        this.players.player2.y + this.players.player2.height;

      if (cond1 && cond2 && cond3 && cond4) {
        this.players.player2.y =
          this.obstacles.arrObs[i].y - this.players.player2.height;
        this.players.player2.speedY = 0;
      }
    }
  },
  setListeners: function() {
    document.onkeydown = function(event) {
      switch (event.keyCode) {
        case 65:
          this.players.player.moveLeft();
          break;
        case 68:
          this.players.player.moveRight();
          break;
        case 87:
        console.log('SALTOOO')
        console.log(this.players.player.y)
          this.players.player.y -= 150;
          console.log(this.players.player.y)
          break;
        case 81:
          this.players.player.punch();
          break;
        case 75:
          this.players.player2.moveLeft();
          break;
        case 192:
          this.players.player2.moveRight();
          break;
        case 79:
          this.players.player2.y -= 150;
          break;
        case 73:
          this.players.player2.punch();
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
          this.players.player.noMove();
          this.players.player2.noMove();
          break;
      }
    }.bind(this);
  },
  gameOver: function() {
    if (this.players.player.score === 30) {
      this.stop();
      this.message.choose();
      // this.gameOverFlag = true
      // this.reset();
      // this.startGame();
    }
    if (this.players.player2.score === 30) {
      this.stop();
      this.message.choose();
      // this.gameOverFlag = true
      // this.reset();
      // this.startGame();
    }
  },
  reset: function() {
    this.background = new Background(this);
    this.players.player = new Player(this);
    this.players.player.playerName = "player";
    this.players.player2 = new Player(this);
    this.players.player2.x = 1650;
    this.players.player2.playerName = "player2";
    this.obstacles = new Obstacles(this);
    this.score = new ScoreBoard(this);
  },
  button: function(){
    document.getElementById("start-button").style.display = "none";
  }
};

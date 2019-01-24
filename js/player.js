function Player(game) {
  this.game = game;

  this.width = 30;
  this.height = 50;
  this.x = 10;
  this.y0 = 720;
  this.y = this.y0;
  this.speedX = 0;
  this.speedY = 0;
  this.limitLeft = true;
  this.limitRight = true;
  this.playerName = "";
  this.heading = "right";
  this.punchRange = this.width *1.2;
  this.score = 0;
  
  this.img = new Image();
  this.img.src = './img/Punk_Run.png';
  this.img.frames = 8;
  this.img.frameIndex = 0;

  this.img2 = new Image();
  this.img2.src = './img/Punk_Run_Left.png';
  this.img2.frames = 8;
  this.img2.frameIndex = 0;

}

Player.prototype.draw = function() {
  // Documentación drawImage:
  // https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
  if (this.heading="right"){
    this.game.ctx.drawImage(
      this.img,
      this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
      0,
      Math.floor(this.img.width / this.img.frames),
      this.img.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  } else {
    this.game.ctx.drawImage(
      this.img2,
      this.img2.frameIndex * Math.floor(this.img2.width / this.img2.frames),
      0,
      Math.floor(this.img2.width / this.img2.frames),
      this.img2.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

  Player.prototype.animateImg = function() {
    // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
    if (this.game.framesCounter % 6 === 0) {
      this.img.frameIndex += 1;
      this.img2.frameIndex += 1;
  
      // Si el frame es el último, se vuelve al primero
      if (this.img.frameIndex > 2) this.img.frameIndex = 0;
      if (this.img2.frameIndex > 2) this.img2.frameIndex = 0;
    }
  };


Player.prototype.updatePosition = function() {

  if (this.limitLeft&&this.speedX<0) {
    this.x += this.speedX;
  }
  if (this.limitRight&&this.speedX>0) {
    this.x += this.speedX;
  }
  
  this.y += this.speedY;
  this.up();
  // this.boundary();
};
Player.prototype.moveLeft = function() {
  this.speedX = -6;
  this.heading = "left"
};
Player.prototype.moveRight = function() {
  this.speedX = 6;
  this.heading = "right"
};
// Player.prototype.moveUp = function() {
// this.speedY = -6;
// };
// Player.prototype.moveDown = function() {
// this.speedY = 6;
// };
Player.prototype.noMove = function() {
  this.speedX = 0;
  this.speedY = 0;
};
Player.prototype.up = function() {
  var gravity = 0.8;
  //debugger
  if (this.y >= this.y0) {
    // this.speedY = 1;
    this.y = this.y0;
  } else {
    this.speedY += gravity;
    this.y += this.speedY;
    // console.log("salta kanguro", this.y);
  }
};
Player.prototype.punch = function() {
  var otherPlayer = ""
  if (this.playerName === "player"){
    otherPlayer = "player2"
  } else { 
    otherPlayer = "player"
  }
    let x1Left = this.x;
    let x1Right = this.x +this.width
    let x2Left = this.game.players[otherPlayer].x
    let x2Right = this.game.players[otherPlayer].x + this.game.players[otherPlayer].width
    let y1 = this.y
    let y2 = this.game.players[otherPlayer].y

    var cond1d= x2Left - x1Right < this.punchRange
    var cond2d= this.heading === "right"
    var cond3d = x2Left - x1Right > 0

    var cond1i = x1Left - x2Right < this.punchRange
    var cond2i = this.heading === "left"
    var cond3i = x1Left - x2Right > 0

    var cond1h = y1 - this.height < y2
    var cond2h = y1 + this.height/2 > y2

    if (cond1d && cond2d && cond3d && cond1h && cond2h){
      this.score++
      console.log("PUM! " + this.score)
      this.game.ctx.fillRect(this.x, this.y, this.width+this.punchRange, this.height/2);
    }else if (cond1i && cond2i && cond3i && cond1h && cond2h){
      this.score++
      console.log("PUM Rojo sieniestro " + this.score)
      this.game.ctx.fillRect(this.x, this.y, -this.punchRange, this.height/2);
    }
  
};
Player.prototype.boundary = function() {
  if (this.x <= 0) {
    this.limitLeft = false;
  } else {
    this.limitLeft = true;
  }
  if (this.x >= 1700-this.width) {
    this.limitRight = false;
  } else {
    this.limitRight = true;
  }
};


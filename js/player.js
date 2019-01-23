function Player(game) {
  this.game = game;

  this.width = 30;
  this.height = 50;
  this.x = 10;
  this.y0 = 750;
  this.y = this.y0;
  this.speedX = 0;
  this.speedY = 0;
  this.limitLeft = true;
  this.limitRight = true;
  this.playerNumber = 0;
}
Player.prototype.draw = function() {
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
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
};
Player.prototype.moveRight = function() {
  this.speedX = 6;
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
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  // console.log("Punch!");
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


function Player(game) {
  this.game = game;

  this.width = 30;
  this.height = 50;
  this.x = 10;
  this.y0 = 750;
  this.y = this.y0;
  this.speedX = 0;
  this.speedY = 0;
}
Player.prototype.draw = function() {
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
};
Player.prototype.updatePosition = function() {
  this.x += this.speedX;
  this.y += this.speedY;
  // this.up();
};
Player.prototype.moveLeft = function() {
    this.speedX = -6;
};
Player.prototype.moveRight = function() {
    this.speedX = 6;
};
Player.prototype.moveUp = function() {
  this.speedY = -6;
};
Player.prototype.moveDown = function() {
  this.speedY = 6;
};
Player.prototype.noMove = function() {
  this.speedX = 0;
  this.speedY = 0;
  console.log("para");
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
Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 37:
        this.moveLeft();
        break;
      case 39:
        this.moveRight();
        break;
      case 38:
        this.y -= 150;
        break;
      case 81:
        this.punch();
        break;
      case 87:
        this.moveUp();
        break;
      case 83:
        this.moveDown();
        break;
    }
  }.bind(this);
};
Player.prototype.dontMove = function() {
  document.onkeyup = function(event) {
    switch (event.keyCode){
      case 37:
      case 39:
      case 83:
      case 87:
      this.noMove();
      break;  
    }
  }.bind(this);
};
Player.prototype.punch = function() {
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  console.log("Punch!");
};

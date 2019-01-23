function Player2(game) {
  this.game = game

  this.width = 30;
  this.height = 50;
  this.x = 1650;
  this.y0 = 750;
  this.y = this.y0;
  this.speedX = 0;
  this.speedY = 0;
  this.limitLeft = true;
  this.limitRight = true;
}
Player2.prototype.draw = function() {
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
};
Player2.prototype.updatePosition = function() {

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
Player2.prototype.moveLeft = function() {
  this.speedX = -6;
};
Player2.prototype.moveRight = function() {
  this.speedX = 6;
};
// Player2.prototype.moveUp = function() {
// this.speedY = -6;
// };
// Player2.prototype.moveDown = function() {
// this.speedY = 6;
// };
Player2.prototype.noMove = function() {
  this.speedX = 0;
  this.speedY = 0;
};
Player2.prototype.up = function() {
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
Player2.prototype.setListeners2 = function() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 75:
        this.moveLeft();
        break;
      case 192:
        this.moveRight();
        break;
      case 79:
        this.y -= 150;
        break;
      case 73:
        this.punch();
        break;
      // case 87:
      //   this.moveUp();
      //   break;
      // case 83:
      //   this.moveDown();
      //   // break;
    }
  }.bind(this);
};
Player2.prototype.dontMove = function() {
  document.onkeyup = function(event) {
    switch (event.keyCode) {
      case 75:
      case 192:
        // case 83:
        // case 87:
        this.noMove();
        break;
    }
  }.bind(this);
};
Player2.prototype.punch = function() {
  this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
  console.log("Punch!");
};
Player2.prototype.boundary = function() {
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

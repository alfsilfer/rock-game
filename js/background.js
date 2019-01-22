function Background(game){
  this.game = game;
  this.x = 0;
  this.y = 0;
  this.width = 1700;
  this.height = 800;

  this.img = new Image;
  this.img.src = "./img/the_wall.jpg";

  Background.prototype.draw = function(){
    
    //  this.img.onload = function(){ Si lo dejo puesto carga de nuevo cada vez desde disco-->no funciona cn setinterval pero si en el primer instante.

       this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      
       // }.bind(this)
  }
}
var Game = require('crtrdg-gameloop');
var Keyboard = require('crtrdg-keyboard');
var Player = require('./player');

var game = new Game({
  canvasId: 'game',
  width: 800,
  height: 400,
  backgroundColor: '#ff1f1f'
});

var keyboard = new Keyboard(game);

game.on('update', function(interval){});

game.on('draw', function(context){});

game.on('pause', function(){
  console.log('paused');
});

game.on('resume', function(){
  console.log('resumed');
});

var player = new Player({
  position: { x: 10, y: 10 },
  size: { x: 10, y: 10 },
  color: '#fff'
});

player.addTo(game);

player.on('update', function(interval){
  if ('<up>' in keyboard.keysDown){
    this.position.y -= 1;
  }
  
  if ('<down>' in keyboard.keysDown){
    this.position.y += 1;
  }
  
  if ('<left>' in keyboard.keysDown){
    this.position.x -= 1;
  }

  if ('<right>' in keyboard.keysDown){
    this.position.x += 1;
  }
});

player.on('draw', function(context){
  context.fillStyle = this.color;
  context.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
});
// SPACE INVADERS

let ship;
let aliens = [];
let lasers = [];
let points = 0;

function preload(){
  alien1 = loadImage('img/alien1.png');
}

function setup(){
  createCanvas(600, 400);
  frameRate(10);
  imageMode(CENTER);
  ship = new Ship();
  //Crear fila de abajo de aliens
  let startX = 80;
  let startY = 80;
  
  for (var i = 0; i < 6; i++){
    aliens[i] = new Alien(i * startX + 80, startY, alien1, alien1, 5);
  }
  //Crear fila de arriba de aliens
  startY = 40;
  let offset = 0;
  for (var j = 6; j < 12; j++){
    aliens[j] = new Alien(offset * startX + 80, startY, alien1, alien1, 10);
    offset++;
  }
  //console.log(aliens);
  
}

function draw(){
  background(50);
  ship.show();
  ship.move();
  
  //Mostrar y mover aliens
  var edge = false;
  for (var i = 0; i < aliens.length; i++){
    aliens[i].show();
    aliens[i].move();
    if (aliens[i].x > width || aliens[i].x < 0){
      edge = true;
    }
  }
  if (edge){
      for (var k = 0; k < aliens.length; k++){
        aliens[k].shiftDown();
      }
    }
  //Mostrar y mover laser
  for (var las = 0; las < lasers.length; las++){
    lasers[las].show();
    lasers[las].move();
    //Deteccion de colision
    for (var j = 0; j < aliens.length; j++){
      if (lasers[las].hits(aliens[j])){
        lasers[las].remove();
        points = points + aliens[j].pts;
        aliens.splice(j, 1); //Remueve alien del arreglo
      }
    } //Fin alien loop
  } //Fin laser loop #1
  
  //Loop a traves de lasers; remover lasers con flag
  for (var z = lasers.length - 1; z >= 0; z--){
    if (lasers[z].toDelete){
      lasers.splice(z, 1); //Remueve laser del arreglo
    }
  } //Fin laser loop #2
  updateHUD();
  //Check si el juego termino
  if (aliens.length <= 0){
    gameOver();
  }
} //Fin de function draw

//Controladores de evento clave
function keyReleased(){
  ship.setDir(0);
}

function keyPressed(){
  if (key === ' '){
    var laser = new Laser(ship.x + (ship.width / 2), ship.y);
    lasers.push(laser);
  }
  if (keyCode === RIGHT_ARROW){
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW){
    ship.setDir(-1);
  }
}

function updateHUD(){
  fill(255);
  text("Score: " + points, 10, 20);
  text("Aliens Remaining: " + aliens.length, 70, 20);
}

function gameOver(){
  background(0);
  textSize(72);
  textAlign(CENTER);
  text("GAME OVER", width / 2, height / 2);
  noLoop();
}



class Alien{
  constructor(x, y, imgA, imgB, pointValue){
    this.x = x;
    this.y = y;
    this.w = 38;
    this.h = 38;
    this.alive = true;
    this.imgA = imgA;
    this.imgB = imgB;
    this.currentImg = 'A';
    this.pts = pointValue;
    this.radius = 20; //Solo para colisión
    this.xdir = 1;
    
  }
  
  show(){
    if (this.alive){ //Solo mostrar si esta vivo
      if (this.currentImg === 'A'){
        image(this.imgA, this.x, this.y, this.w, this.h);
      }
      if (this.currentImg === 'B'){
        image(this.imgB, this.x, this.y, this.w, this.h);
      }
    }
  }
  
  move(){
    this.x = this.x + this.xdir;
    //Animacion imagen
    if (this.currentImg === 'A'){
      this.currentImg = 'B';
    } else if (this.currentImg === 'B'){
      this.currentImg = 'A';
    }
  }
  
  shiftDown(){
    this.xdir = -this.xdir;
    this.y = this.y + this.h;
  }
  
}
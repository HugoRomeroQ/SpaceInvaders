class Ship{
  constructor(){
	this.x = width / 2;		
    this.y = height - 10;
		this.width = 60;
		this.height = 10;
		this.xdir = 0;
  }

  show(){
	fill(44, 199, 163)
	noStroke();
	rect(this.x, this.y, this.width, this.height);
    rect(this.x + 20, this.y - 10, 20, 10);
  }
  
  move(){
    this.x += this.xdir * 10;
  }
  
  setDir(dir){
    this.xdir = dir;
  }
  
  
}
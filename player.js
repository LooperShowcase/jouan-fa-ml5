class Player 
{
  constructor()
  {
    this.size = 50;
     this.x= this.size
     this.y=height - this.size;
     this.velocityY = 0;
     this.gravity = 2;
  }

  show() 
  {
      image (pImg,this.x,this.y,50, 50);
  }
  
  
  
  
  jump()
{
  if(this.y == height - this.size)
  this.velocityY=-25;
}

move()
{
  this.y +=this.velocityY;
  this.velocityY += this.gravity;
  this.y = constrain(this.y, 0, height -this.size);
}

collided(currenyObs){
let isColliding = collideRectRect(this.x, this.y, 
  this.size, this.size, currenyObs.x, currenyObs.y, currenyObs.size, currenyObs.size)
return isColliding;
}




}



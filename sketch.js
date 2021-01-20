var bullet,speed,height;
var wall,thickness;
var thickness,
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
thickness=random(22,83);
wall = createsprite(1200,200,thickness,height/2)
wall.shapecolor=color(230,230,230)
bullet =createSprite(50,200,50,5)
bullet.velocity.X=speed;
bullet.shapeColor=color(255)
}

function draw() {
  background(255,255,255); 
 if(hascollided(bullet,wall))
 {
   bullet.velocityX=0;
   var damage=0.5 *weight* speed *speed/(thickness *thickness *thickness);

   if(damage>10)
   {
     wall.shapecolor=color(255,0,0);
   }

   if (damage<10)
   {
     wall.shapecolor=color(0,255,0);
   }
 }

  drawSprites();
}

function hascollided(bullet,wall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
var bullet, wall;
var speed, thickness, weight;
var bullet_options ={
  restitution:0
}
function setup() {
  createCanvas(1600,400);
  speed=random(223, 321);
  thickness=random(22, 83); 
  weight = random(30, 52);  
  bullet = createSprite(50, 200, 50, 50);
    wall = createSprite(1200, 200, thickness, 100);
  
    
  }

function draw() {
  background("black");
  bullet.velocityX = speed; 
  bullet.weight = weight;
isTouching();

 drawSprites();
}

function isTouching() {
  bullet.isTouching(wall);
  if(bullet.isTouching(wall))  {
    bullet.velocityX = 0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if(damage>10) {
  wall.shapeColor = color(255, 0, 0);
}

if(damage<10) {
  wall.shapeColor = color(0, 255, 0);
}
  }
    }

var shipImage,ship;
seaImage,sea;
function preload(){
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  

  sea=createSprite(400,200,10,10);
  sea.addImage(seaImage);
  sea.scale = 0.4;

  ship = createSprite(200,200,10,10);
  ship.addAnimation("movingShip",shipImage);
  ship.scale=0.2;
}

function draw() {
  background("blue");
  sea.velocityX = -3;
  if(sea.x<0){
  sea.x = sea.width/8;}

  if(keyDown("right")){
    ship.x =ship.x+2;
  }

  if(keyDown("left")){
    ship.x=ship.x-2;
  }
 drawSprites();
}

function preload(){
seaImg = loadImage("sea.png");
shipAnim = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200);
  sea.addImage(seaImg);
  sea.scale = 0.5;
  ship = createSprite(200,200);
  ship.addAnimation("ship",shipAnim);
  ship.scale = 0.5;
}

function draw() {
  background("blue");
  drawSprites();
 
}
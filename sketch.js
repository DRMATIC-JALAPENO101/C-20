var fixedRect;
var movingRect;
function setup() {
  createCanvas(800,400);
 fixedRect = createSprite(600, 400, 50, 50);
 fixedRect.shapeColour = "orange";
 fixedRect.debug = true;
 movingRect = createSprite(400, 200, 50, 50);
movingRect.shapeColour = "orange;
movingRect.debug = true;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x <  fixedRect.width/2 + movingRect.width/2){
 movingRect.shapeColour = "green";
 fixedRect.shapeColour = "green";
  }
  else{
    movingRect.shapeColour = "orange";
    fixedRect.shapeColour = "orange";
  }
  drawSprites();
}
var fixedRect,movingRect
var ob1,ob2,ob3


function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200,200,50,50);
  fixedRect.shapeColor = "red";
  fixedRect.debug = true;

  movingRect = createSprite(100,100,50,50);
  movingRect.shapeColor = "red";
  movingRect.debug = true;

  ob1 = createSprite(100,300,50,50)
  ob2= createSprite(300,300,50,50)
  ob3 = createSprite(500,300,50,50)
  ob1.shapeColor="red"
  ob2.shapeColor="red"
  ob3.shapeColor="red"
}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(collision(movingRect,ob1)){
  ob1.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }else{
    ob1.shapeColor = "red";
    movingRect.shapeColor = "red  ";
  }
 
  drawSprites();
}


function setup() {
  createCanvas(800,400);
  empot = createSprite(14,155,166,100);
  block = createSprite(12,50,10,10)
}

function draw() {
  background(73,255,16);
  block.x=mouseX
  block.y=mouseY
  
if(abs(block.x-empot.x)<=block.width/2+empot.width/2&&
abs(block.y-empot.y)<=block.height/2+empot.height/2){
block.shapeColor='gold'
empot.shapeColor='gold'

}else{
  block.shapeColor='pink'
empot.shapeColor='pink'
}




  drawSprites();
}
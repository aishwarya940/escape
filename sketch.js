var bg
var pc
var w1,w2,w3
var r1,r1img
var a1,a2,a1I,a2I;

function preload(){
r1img = loadImage("que1.png")
bg = loadImage("floor.jpg");
a1I =loadImage("AS1.png");
a2I =loadImage("AS2.png")
loss =loadImage("LOSS.png")
}
function setup() {
  createCanvas(800,600);
  bg1 = createSprite(400,300)
  bg1.addImage(bg)
  bg1.scale=2
  pc = createSprite(50,50,50,50);
  w1 = createSprite(90,130,10,400);
  //w2 = createSprite(135,330,100,10);
   w3 = createSprite(90,510,10,200);
  w4 = createSprite(135,465,100,10)
   w5 = createSprite(190,280,10,370)
  d1 = createSprite(92,370,10,80) 
  d1.shapeColor = "red"
  r1 = createSprite(400,300,50,50);
  r1.addImage("riddle1",r1img)
  r1.visible=false;
  a1 = createSprite(347,560,25,25);
  a1.addImage(a1I);
 a1.visible=false;
  a2 = createSprite(460,560,25,25);
  a2.addImage(a2I);
  a2.visible=false;
  d2 = createSprite(186,43,10,91)
  d2.shapeColor = "red"
  w7 = createSprite(280,210,10,500)
  w8 = createSprite(350,455,130,10)
  w9 = createSprite(420,294,10,330)
 // w10 = createSprite(470,130,90,10)
  w11 = createSprite(510,355,10,520)
  d3 = createSprite(279,528,10,130)
  d3.shapeColor = "red"
  d4 = createSprite(509,52,10,90)
  d4.shapeColor = "red"
  d5 = createSprite(417,65,10,120)
  d5.shapeColor = "red"
  w12 = createSprite(610,255,10,520)
  d6 = createSprite(556,508,100,10)
  d6.shapeColor = "red"
  
  loss1=createSprite(300,300,70,70)
  loss1.addImage(loss);
  loss1.visible=false;
}

function draw() {
  background(0); 
  text(mouseX+","+mouseY,mouseX,mouseY)
  if(keyDown(UP_ARROW)){
    pc.y = pc.y-5
  }
  if(keyDown(DOWN_ARROW)){
    pc.y = pc.y+5
  }
  if(keyDown(LEFT_ARROW)){
    pc.x = pc.x-5
  }
  if(keyDown(RIGHT_ARROW)){
    pc.x = pc.x+5
  }
  if(pc.isTouching(d1)){
    r1.visible=true;
    a1.visible=true;
    a2.visible=true;
    r1.scale = 0.5
    pc.bounce(d1)

  }
  if(mousePressedOver(a1)){
   loss1.visible=true;
    a2.visible=false;
    a1.visible=false;
    r1.destroy();
    r1.destroy();
    pc.x = 50
    pc.y = 50
  }
  if(mousePressedOver(a2)){
    d1.destroy();
    d1.visible = false;
    r1.destroy();
    a1.visible=false;
    a2.visible=false;

    
  }
  if(pc.isTouching(d2)){

  }
  if(pc.isTouching(d3)){

  }
  if(pc.isTouching(d4)){

  }
  if(pc.isTouching(d5)){

  }
  if(pc.isTouching(d6)){

  }
  
 
  createEdgeSprites();
  pc.bounceOff(w1);
 
  pc.bounceOff(w3)
  pc.bounceOff(w4)
  pc.bounceOff(w5)

  pc.bounceOff(w7)
  
  drawSprites();
}
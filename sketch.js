const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,250,10);
 
  //level one 
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //level one
  block100 = new Block(605,175,30,40);
  console.log(block1);
  block102 = new Block(635,175,30,40);
  block103 = new Block(665,175,30,40);
  block104 = new Block(695,175,30,40);
  block105 = new Block(725,175,30,40);
  block106 = new Block(755,175,30,40);
  block107 = new Block(785,175,30,40);
  //level two
  block108 = new Block(635,135,30,40);
  block109 = new Block(665,135,30,40);
  block1000 = new Block(695,135,30,40);
  block110 = new Block(725,135,30,40);
  block120 = new Block(755,135,30,40);
  //level three
  block130 = new Block(665,95,30,40);
  block140 = new Block(695,95,30,40);
  block150 = new Block(725,95,30,40);
  //top
  block160 = new Block(695,55,30,40);

  polygon = Bodies.circle(50,200,20);
World.add (world,polygon);


slingShot = new Slingshot (this.polygon,{x:100,y:200});
 
}


function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  
  
  fill("grey");
  block16.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block100.display();
  block102.display();
  block103.display();
  block104.display();
  block105.display();
  block106.display();
  block107.display();
  fill("pink");
  block108.display();
  block109.display();
  block1000.display();
  block110.display();
  block120.display();
  fill("turquoise");
  block130.display();
  block140.display();
  block150.display();
  fill("grey");
  block160.display();
  fill("yellow");
  slingShot.display();

  imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

}





function mouseDragged() {
  //ellipse(mouseX, mouseY, 5, 5);

  Matter.Body.setPosition(this.polygon, {x : mouseX , y: mouseY});

}

function mouseReleased(){

  slingShot.fly();
}
  
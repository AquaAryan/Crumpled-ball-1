
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var paper
var rect1, rect2, rect3 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	paper=new Paper (100,200,25);
 ground=new Ground (400,650,800,7);
 rect1=createSprite(400, 640, 10,50)
	rect2=createSprite(540, 640, 10,50)
	rect3=createSprite(470,655,130,10)
   rect3.shapeColor=color("red")
   rect1.shapeColor=color("red")
   rect2.shapeColor=color("red")

   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  





  ground.display();
  paper.display();
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){

Matter.Body.applyForce(paper.body,paper.ody.position,{ x:85,y:-85})





}


}








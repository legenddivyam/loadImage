
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,ground;
var wall1,wall2,wall3;
function preload()
{
dustbin=loadImage("dustbin box.png")
paper=loadImage("paper.png")
}

function setup() {
	createCanvas(800, 700);
var options={
	isStatic:false,
	restitution:0.3,
	friction:0.4,
	density:5
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball=Bodies.circle(100,640,10,options);
	 World.add(world,ball);
	 ground=Bodies.rectangle(width/2,660,810,20,{
		 isStatic:true
	 }) 
     World.add(world,ground);
	Engine.run(engine);
	wall1=Bodies.rectangle(600,640,180,20,{
		isStatic:true
	})
		

	World.add(world,wall1);  
	wall2=Bodies.rectangle(679,580,25,100,{
		isStatic:true
	} )
	World.add(world,wall2);
	wall3=Bodies.rectangle(523,580,25,100,{
		isStatic:true
	})
	World.add(world,wall3);    
	
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  drawSprites();
 fill("skyblue")
 Engine.update(engine);
 ellipse(ball.position.x,ball.position.y,20)
 fill("orange")
 rect(ground.position.x,ground.position.y,810,20)
 fill("lightblue")
 rect(wall1.position.x,wall1.position.y,180,20)
 fill("lightblue")
 rect(wall2.position.x,wall2.position.y,25,100)
 fill("lightblue")
 rect(wall3.position.x,wall3.position.y,25,100)
 image(dustbin,485,500,240,150)
 imageMode(CENTER)
 image(paper,ball.position.x,ball.position.y,40,40)
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:60,y:-60});
}
}
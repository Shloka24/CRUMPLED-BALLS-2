
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box, boxImage;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 ball = new Ball(100,650, 20);
	 World.add(world, ball);

	 ground = new Ground(400,690, width, 20);
	 World.add(world, ground);

     dustbin = new Dustbin(650, 670); 


	Engine.run(engine);
  
}


function draw() {
  background("white");

  Engine.update(engine);
  
  ball.display();
  ground.display();
  dustbin.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:50	, y:-80});
	}
}




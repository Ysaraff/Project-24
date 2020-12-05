const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball();

	dustbin1 = new Dustbin(635,632,100,10);
	dustbin2 = new Dustbin(590,607,10,60);
	dustbin3 = new Dustbin(680,607,10,60);

	ground1 = new Ground(400,640,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground1.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:55,y:-60});
		}
	}




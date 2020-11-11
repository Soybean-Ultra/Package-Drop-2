var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box1body,box2,box2body,box3,box3body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(width/2,600,120,30);
	box1.shapeColor=color("red")

	box2=createSprite(475,560,30,120);
	box2.shapeColor=color("red")

	box3=createSprite(330,560,30,120);
	box3.shapeColor=color("red")



	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 box1body = Bodies.rectangle(width/2,600,120,30, {isStacic:true});
	 World.add(world,box1body);
	 
	 box2body = Bodies.rectangle(475,560,30,120, {isStacic:true});
	 World.add(world,box2body);

	 box3body = Bodies.rectangle(330,560,30,120, {isStacic:true});
	 World.add(world,box3body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  box1.y= box1body.position.y;
  box1.x= box1body.position.x;
  box2.y= box2body.position.y;
  box2.x= box2body.position.x;
  box3.y= box3body.position.y;
  box3.x= box3body.position.x;
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic(packageBody,false);

  }
}




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	ball = Bodies.circle(200,100,20, {restitution: 0.3,friction:0.5,density:1.2});
    World.add(world,ball);

	ground = Bodies.rectangle(width/2,height,1600,20,{isStatic:true});
	World.add(world,ground);
	
	//Create the Bodies Here.
	boxPosition=1200;
	boxY=640;


	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
	World.add(world, boxLeftBody);

	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
	boxBase.shapeColor=color(255,0,0);

	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	World.add(world, boxBottomBody);

	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
	boxleftSprite.shapeColor=color(255,0,0);

	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
	World.add(world, boxRightBody);


   Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(ball,ball.position,{x:100,y:-85});

	}
}
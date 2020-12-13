
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 var ground,tree,treeIMG;
 var boy,boyIMG;
 var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;

function preload()
{
	treeIMG=loadImage("tree.png")
	boyIMG=loadImage("boy.png")
	stoneImg=loadImage("stone.png")
}

function setup() {
	createCanvas(1000, 600);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 565, width, 10 , {isStatic:true} );
	World.add(world, ground);

	tree=createSprite(900, 560, 200,20);
	tree.addImage(treeIMG)
	World.add(world, tree);

	treeSprite = Bodies.rectangle(800+100, 535+45-20, 200,20 , {isStatic:true} );
	World.add(world, treeSprite);
	
	stone = Bodies.circle (235,420,30)
	World.add(world, stone);

	mango1 = new mango (910,660,12);

	mango2 = new mango (900,660,12);

	mango3 = new mango (920,660,12);

	mango4 = new mango (930,660,12);

	mango5 = new mango (940,660,12);

	mango6 = new mango (950,660,12);

	mango7 = new mango (960,660,12);

	mango8 = new mango (970,660,12);

	mango9 = new mango (980,660,12);

	mango10 = new mango (990,660,12);

	boy=createSprite(100, 560, 200,20);
	boy.addImage(boyIMG)
	World.add(world, boy);

	boySprite = Bodies.rectangle(0+100, 535+45-20, 200,20 , {isStatic:true} );
	World.add(world, boySprite);

	slingshot = new SlingShot(boy.body,stone.body,30,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  slingshot.display();
  image(stoneImg,stone.position.x,stone.position.y,)
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(boy.body, stone.body);
}


function mouseReleased(){
    Slingshot.fly();
}

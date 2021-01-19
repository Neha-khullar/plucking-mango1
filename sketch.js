
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ground,mango1,mango2,mango3,mango4,mango5;
function preload()
{
this.image=loadImage("boy.png");
}
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 // bodies
 mango1=new Mango(200,100 );
mango2=new Mango(200,100 );
mango3=new Mango(200,100);
mango4=new Mango(200,100);
mango5=new Mango(200,100 );
stone=new Stone(200,100);
tree=new Tree(800,600);
slingshot=new SlingShot(bird.body,{x:200,y:100});
ground=new Ground(150, 305, 300, 170);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  tree.display();
  boy.display();
  slingshot.display();

//ollison
detectOllision(stoneObj,mango1);
 detectOllision(stoneObj,mango2);
 detectOllision(stoneObj,mango3);
 detectOllision(stoneObj,mango4);
 detectOllision(stoneObj,mango5);

  drawSprites();
 
}
 

function keyPressed(){
	if(keyCode===32){
	Matter.Body.setPosition(stoneObj.body,{x:235,y:420})
	launcherObject.attach(stoneObj.body);
	}
}



function detectOllision(){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance<=lmango.r*lstone*r){
     Matter.Body.setStatic(lmango.body,false);
	}
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function fly(){
	slingshot.fly();
}















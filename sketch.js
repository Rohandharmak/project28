
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1,mango2,mango3,mango4,mango5;
var slingshot;
var tree,stoneOBJ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(300,300);
	mango2=new Mango(400,300);
	mango3=new Mango(500,300);
	mango4=new Mango(600,300);
	mango5=new Mango(700,300);
	slingshot = new SlingShot(stoneOBJ,{x:235, y:420});
	stoneOBJ=new Stone(70,350);
	tree=new Tree(650,350);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingshot.display();
  stoneOBJ.display();
  tree.display();

  if(KeyDown("space")){
	Matter.Body.setPosition(stoneOBJ,{x: mouseX , y: mouseY});
	slingshot.attach(stoneOBJ.body);
}
  
detectcollision(stoneOBJ,mango1);
detectcollision(stoneOBJ,mango2);
detectcollision(stoneOBJ,mango3);
detectcollision(stoneOBJ,mango4);
detectcollision(stoneOBJ,mango5);
 
}
function detectcollision(Lstone,Lmango){
	MangoBodyPosition=lmango.body.position;
	StoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango+lstone.r){
		Matter.Body.setStatic(lmango,false);
	}
}
function mouseDragged(){
    Matter.Body.setPosition(stoneOBJ,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function attach(){

}



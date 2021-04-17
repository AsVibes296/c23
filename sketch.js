var box,box1
var ground

const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var myWorld, myEngine
function setup() {
  createCanvas(800,400);
  myEngine=Engine.create()
  myWorld=myEngine.world;
  ground=new Ground(200,380,800,20)
 
box=new Box(200,300,50,50)
box1=new Box(240,100,50,100)
}

function draw() {
  background(0);  
  Engine.update(myEngine)
  console.log(box1.body.angle)
  box.display()
ground.display()
box1.display()
  
}
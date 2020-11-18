const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var box ,box1,box2,box3,box4,box4,box5;
var ground,chain,rope,wrecker,roof;
function setup(){
createCanvas(1600,700)
engine = Engine.create();
 world = engine.world;
    box=new Box(900,650,60,60)
    box1=new Box(840,650,60,60)
    box2=new Box(960,650,60,60)
    box3=new Box(930,590,60,60)
    box4=new Box(870,590,60,60)
    box5=new Box(900,530,60,60)
    ground=new Ground(800,680,1600,20)
    roof=new Ground(700,400,200,40)
    wrecker=new Wrecker(700,570,50)
    rope=new Chain(roof.body,roof.body,-wrecker.r*2, 0)
 Engine.create(engine)
}
function draw(){
rectMode(CENTER)
background(0)
box.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
ground.display();
wrecker.display();
}
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box
var backgroundImg,platform;
var slingshot;

var gameState = "onSling";

var score = 0;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    box1= new Box(900,300)
     box2= new Box(900,300)
      box3= new Box(900,300)
       box4= new Box(900,300)
        box5= new Box(900,300)
    
    ball= new Ball (600,300)
    slingshot = new SlingShot(ball.body,{x:600, y:50});
}

function draw(){
    
        background("skyblue");
    
     box1.display()   
     box2.display() 
     box3.display() 
     box4.display() 
     box5.display() 

     ball.display()
     slingshot.display()
    
    Engine.update(engine);
     
}

function mouseDragged(){
    if (gameState ==="onSling"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    }
}


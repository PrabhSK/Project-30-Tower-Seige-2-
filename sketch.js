const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling, ball;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var py1, py2, py3, py4, py5;

function setup() {
  createCanvas(1300, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(750, 375, 1500, 50);
  box1 = new Box(400, 230, 50, 50);
  box2 = new Box(450, 230, 50, 50);
  box3 = new Box(500, 230, 50, 50);
  box4 = new Box(550, 230, 50, 50);
  box5 = new Box(600, 230, 50, 50);
  box6 = new Box(425, 180, 50, 50);
  box7 = new Box(475, 180, 50, 50);
  box8 = new Box(525, 180, 50, 50);
  box9 = new Box(575, 180, 50, 50);
  box10 = new Box(450, 130, 50, 50);
  box11 = new Box(500, 130, 50, 50);
  box12 = new Box(550, 130, 50, 50);
  box13 = new Box(475, 80, 50, 50);
  box14 = new Box(525, 80, 50, 50);
  box15 = new Box(500, 30, 50, 50);
  py1 = new Box(845, 150, 50, 50);
  py2 = new Box(895, 150, 50, 50);
  py3 = new Box(945, 150, 50, 50);
  py4 = new Box(870, 100, 50, 50);
  py5 = new Box(920, 100, 50, 50);
  py6 = new Box(895, 50, 50, 50);
  ball = new Polygon(100, 100, 30);
  stand1 = new Ground(500, 270, 300, 20);
  stand2 = new Ground(900, 200, 300, 20);
  sling = new Sling(ball.body, { x: 200, y: 250 })
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
  box1.display("red", "BLACK");
  box2.display("yellow", "BLACK");
  box3.display("yellow", "BLACK");
  box4.display("yellow", "BLACK");
  box5.display("red", "BLACK");
  box6.display("red", "BLACK");
  box7.display("yellow", "BLACK");
  box8.display("yellow", "BLACK");
  box9.display("red", "BLACK");
  box10.display("red", "BLACK");
  box11.display("yellow", "BLACK");
  box12.display("red", "BLACK");
  box13.display("red", "BLACK");
  box14.display("red", "BLACK");
  box15.display("red", "BLACK");
  py1.display("red", "BLACK")
  py2.display("yellow", "BLACK")
  py3.display("red", "BLACK")
  py4.display("red", "BLACK")
  py5.display("red", "BLACK")
  py6.display("red", "BLACK")
  sling.display("white");
  stand1.display();
  stand2.display();
  ball.display("red", "black");
  textSize(35);
  fill("#3700ff");
  text("SHOOT THE BALL TO BREAK THE PYRAMIDS OF WALLAHALLAH!!! ", 50, 385)
  fill("#3700ff");
  textSize(20);
  text("PRESS SPACE BAR TO GET THE BALL BACK !!!",20,20)
}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(ball.body);
  }
}
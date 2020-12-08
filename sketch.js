const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box1,box2,box3,box4,box5,box6;
var ball;
var ground;
var box;
var ball;

function setup(){
    createCanvas(5000,400);
engine=Engine.create();
world=engine.world;
ground =new Ground(10,350,4000,50);
box =new Box(200,200,10,10);
ball =new Ball(60,50,20,20)
}

function draw(){
    background(255);
    Engine.update(engine);
    ground.display();
    box.display();
    ball.display();
}
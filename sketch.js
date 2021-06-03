const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    ground = Bodies.rectangle(600,590,1200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.5
    }
ball = Bodies.circle(600,300,50,ball_options)
World.add(world,ball);
console.log(ball);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    fill ("green")
    rect(ground.position.x,ground.position.y,1200,20);
    fill ("red")
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,50);
}
const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

var ground;
var box1;
var bird;
var world, engine;
var mConstraint;
var slingshot;

var box;

function preload() {
  dotImg = loadImage("images/bird.png");
  boxImg = loadImage("images/pig.png");
  bkgImg = loadImage("images/background.png");
  woodImg = loadImage("images/wood2.png");
  woodImg1 = loadImage("images/wood1.png");
}

function setup() {
  var canvas = createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height - 10, width, 20);

  box = new Box(890,55, 60, 60);
  log = new Log(890,75,200,20);
  wood1 = new Log(700,200,70,70);
  wood2 = new Log(700,200,70,70);
  wood3 = new Log(700,200,70,70);
  wood4 = new Log(700,200,70,70);
 
  box1 = new Box(890,95,60,60);
  bird = new Bird(170, 300, 20);

  slingshot = new SlingShot(160, 300, bird.body);

  var mouse = Mouse.create(canvas.elt);
  var options = {
    mouse: mouse
      
  }

  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);


}

function keyPressed() {
  if (key == ' ') {
    World.remove(world, bird.body);
    bird = new Bird(170, 300, 20);
    slingshot.attach(bird.body);
    
  }
}

function mouseReleased() {
  setTimeout(() => {
    slingshot.fly();
  }, 100);
}

function draw() {
  background(bkgImg);
  Engine.update(engine);
  ground.display();
  box.display();
  slingshot.display();
  box1.display();
  wood1.display();
  log.display();
  bird.display();
  wood2 .display();
  wood3 .display();
  wood4.display();
 
}

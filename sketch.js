const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var particles = [];
var plinkos = [];
var divisions = [];

var divisionheight = 300
function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(0, 0, width, 100)

    for (var k = 0; k <= width; k = k + 80) {
      divisions.push(new Divisions(k, height - divisionheight/2, 10, divisionheight));
    }
    
    for (var j = 40; j <= width; j = j + 50) {
      plinkos.push(new Plinkos(j, 75));
    }
    for (var j = 15; j <= width-10; j = j + 50) {
      plinkos.push(new Plinkos(j, 175));
    }
    for (var j = 40; j <= width; j = j + 50) {
      plinkos.push(new Plinkos(j, 275));
    }
    for (var j = 15; j <= width-10; j = j + 50) {
      plinkos.push(new Plinkos(j, 375));
    }

    if (frameCount % 60 === 0) {
       particles.push(new Particles(random(width/2 + 10, width/2 - 10), 10, 10));
    }
}
function draw() {
  background(255,255,255);  
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for (var l = 0; l < plinkos.length; l++) {
    plinkos[l].display();
  }
  drawSprites();
}
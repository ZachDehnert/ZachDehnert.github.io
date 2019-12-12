let s1, s2;
let gravity = 9.0;
let mass = 2.0;

function setup() {
  var canvas = createCanvas(800, 600);
  canvas.parent('sketch-holder-2');
  fill(255, 126);
  // Inputs: x, y, mass, gravity
  s1 = new Spring2D(0.0, width / 2, mass, gravity);
  s2 = new Spring2D(0.0, width / 2, mass, gravity);
}

function draw() {

  background(125);

  fill(0, 12);
  rect(0, 0, 800, 400);
  stroke(51);
  fill(255);
  
  s1.update(mouseX, mouseY);
  s1.display(mouseX, mouseY);
  s2.update(s1.x, s1.y);
  s2.display(s1.x, s1.y);




}

function Spring2D(xpos, ypos, m, g) {
  this.x = xpos;// The x- and y-coordinates
  this.y = ypos;
  this.vx = 7; // The x- and y-axis velocities, I jacked this up to add some more erratic movement
  this.vy = 1;
  this.mass = m;
  this.gravity = g;
  this.radius = 75;
  this.stiffness = 0.9;
  this.damping = 0.7;


  // This stuff I don't completely understand, but it is the physics of how the ball moves
  this.update = function(targetX, targetY) {
    let forceX = (targetX - this.x) * this.stiffness;
    let ax = forceX / this.mass;
    this.vx = this.damping * (this.vx + ax);
    this.x += this.vx;
    let forceY = (targetY - this.y) * this.stiffness;
    forceY -= this.gravity; // I changed this to '-' instead of '+' and it gives the y axis a retro flare
    let ay = forceY / this.mass;
    this.vy = this.damping * (this.vy + ay);
    this.y += this.vy;
  }

  this.display = function(nx, ny) {
    noStroke();
    ellipse(this.x, this.y, this.radius * 4, this.radius * 2);
    stroke(125);
    line(this.x, this.y, nx, ny);
  }
}
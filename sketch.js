function setup() {
  var canvas = createCanvas(800,800);

  canvas.parent('sketch-holder');
}

function draw() {
  if (mouseIsPressed) {
    fill(222);
  } else {
    fill(125);
  }
  ellipse(mouseX,mouseY,80,80);
}
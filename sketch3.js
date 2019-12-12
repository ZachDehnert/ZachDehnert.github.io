let rectWidth;

// Change the canvas size

function setup() {
  var canvas = createCanvas(800, 600);
  canvas.parent('sketch-holder-3');
  noStroke();
  background(230);
  rectWidth = width / 2;
  
}

function draw() {
  

}

function keyPressed() {
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
    
  }
  if (keyIndex === -1) {
    background(230);
  } else {
    randFill_r = Math.floor(Math.random() * 100 + 1);
    randFill_g = Math.floor(Math.random() * 200 + 1);
    randFill_b = Math.floor(Math.random() * 300 + 1);
    fill(randFill_r, randFill_g, randFill_b);
    let x = map(keyIndex, 0, 25, 0, width - rectWidth);
    rect(x, 0, rectWidth, height);
  }
}
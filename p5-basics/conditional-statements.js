// CONDITIONAL STATEMENTS

var x = 0;
var speed = 7;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);

  stroke(255);
  strokeWeight(4);
  noFill();

  if (mouseX > 300) {
    fill(255, 0, 200);
  }

  ellipse(x, 200, 100, 100);

  if (x > width || x < 0) {
    speed = speed * -1;
  }

  // if (x > width) {
  //   speed = -3;
  // } else if (x == 0) {
  //   speed = +3;
  // }

  x = x + speed;
}

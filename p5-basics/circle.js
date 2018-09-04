// DRAWING A GROWING CIRLE:

var circle = {
  x: 600,
  y: 400,
  diameter: 50
};

var fillR = 0;

function setup() {
  createCanvas(4000, 1000);
}

function draw() {
  background(0);

  colour = map(circle.diameter, 50, 1000, 0, 255)
  // ellipse
  fill(colour, 255, colour);
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

  // circleGrow for 5 second?
  circle.diameter = circle.diameter + 15;

}

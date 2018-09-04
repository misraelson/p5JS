// DRAWING A GROWING CIRLE:

var circle = {
  x: 600,
  y: 400,
  diameter: 200
};

var growthSpeed = 10;

var fillR = 0;

function setup() {
  createCanvas(4000, 1000);
}

function draw() {
  background(0);

  colour = map(circle.diameter, 200, 1000, 0, 255)
  // ellipse
  fill(255, 100, colour);
  ellipse(circle.x, circle.y, circle.diameter, circle.diameter);

  // circleGrow for 5 second?
  if (circle.diameter > 300 || circle.diameter < 200) {
    growthSpeed = growthSpeed * -1;
  }

  // circleGrow for 5 second?
  // if (circle.diameter > 400) {
  //   growthSpeed = -10;
  // } else if (circle.diameter < 200) {
  //   growthSpeed = 10;
  // }

  circle.diameter = circle.diameter + growthSpeed

}

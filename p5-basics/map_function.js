// the map function:

// the map() function takes 5 variables and maps them over a range
// min/max of current range, min/max of new range, and the value we want to map
colour = map(circle.diameter, 50, 1000, 0, 255)


// RANDOM() FUNCTION: DRAW A BUNCH OF RANDOM COLOR SPOTS ON THE CANVAS

var spot = {
  x: 100,
  y: 50
};

var colour = {
  r: 255,
  g: 0,
  b: 0
};

function setup() {
  createCanvas(1000, 500);
  background(0);
};

function draw() {
  colour.r = random(100, 255);
  colour.g = 0;
  colour.b = random(100, 190);

  spot.x = random(0, width);
  spot.y = random(0, height);

  noStroke();

  fill(colour.r, colour.g, colour.b, 100);
  ellipse(spot.x, spot.y, 24, 24);
}

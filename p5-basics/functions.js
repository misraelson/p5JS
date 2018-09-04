// CREATING MODULAR CODE/FUNCTIONS

var ball = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  //👇 this is the syntax for calling a function
  move();
  bounce();
  display();
}

function move() {
  // this changes the ball speed
    ball.x = ball.x + ball.xspeed;
    ball.y = ball.y + ball.yspeed;
}

function bounce() {
  // this is the code for the bounce
  if (ball.x > width || ball.x < 0) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }
}

function display() {
  // this is the code for drawing the ball
  stroke(255);
  // strokeWeight(4);
  noStroke();
  fill(255, 0, 200);
  ellipse(ball.x, ball.y, 50, 50);
}

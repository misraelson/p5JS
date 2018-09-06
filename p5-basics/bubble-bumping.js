let bubbles = [];
// let unicorn;

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    bubbles[i] = new Bubble(x, y, r);
  }
  // unicorn = new Bubble(400, 200, 10);
}

function draw() {
  background(0, 200, 50);

  // let d = dist(bubble1.x, bubble1.y, bubble2.x, bubble2.y)
  // if ( d < bubble1.r + bubble2.r) {
  //   background(200, 0, 100);
  // }

  // if (bubble1.intersects(bubble2)) {
  //   background(200, 0, 100);
  // }

  // unicorn.x = mouseX;
  // unicorn.y = mouseY;
  // unicorn.show();
  // unicorn.move();

  // the code below is n-squared, which is bad, need to refactor so that everytime
  // you check if they intersect you start where the last check left off

  for (let bub of bubbles) {
    bub.show();
    bub.move();
    let overlapping = false
    for (let other of bubbles) {
      if (bub !== other && other.intersects(bub)) {
        overlapping = true;
      }
    }
    if (overlapping) {
      bub.changeColor(255);
    } else {
      bub.changeColor(0);
    }
  }

  // bubble1.show();
  // bubble2.show();
  // bubble1.move();
  // // bubble2.move();
  // bubble2.x = mouseX;
  // bubble2.y = mouseY;

}

class Bubble {
  constructor(x, y, r = 50) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y)
    return (d < this.r + other.r);
    // if ( d < this.r + other.r) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  changeColor(bright) {
    this.brightness = bright;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      // this.brightness = 255;
      return true;
    }
    else {
      // this.brightness = 0;
      return false;
    }
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 120);
    ellipse(this.x, this.y, this.r * 2);
  }

}

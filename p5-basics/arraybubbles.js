let bubbles = [];

function setup() {
  createCanvas(800, 400);
  // for (var i = 0; i < 4; i++) {
  //   bubbles[i] = new Bubble(random(width), random(height));
  // }
}

function mouseDragged() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {
  background(0, 255, 255);
  // background(mouseX/2, mouseY/2, 255);
  for (var i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].display();
    bubbles[i].update();
    if (bubbles[i].isFinished()) {
      bubbles.splice(i, 1);
    }
  }
}

function Bubble(mouseX, mouseY) {
  this.x = mouseX;
  this.y = mouseY;
  this.lifespan = 255;

  this.display = function() {
    // stroke(255);
    noStroke();
    fill(255, this.lifespan);
    ellipse(this.x, this.y, 44, 44);
  }

  this.isFinished = function() {
    if (this.lifespan < 0) {
      return true;
    }
    else {
      return false;
    }
  }

  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    // this makes them drop like rain
    // this.y = this.y + 1;
    this.lifespan--;
  }
};

// Creating objects via Classes allows us to encapsulate objects
// The Class => is a blueprint that encapsulates an object such as a bubble
// NEW is a keyword that means create an object

// Objects are a collection of and encapsulate DATA and FUNCTIONALITY into an object
// The CLASS is the cookie cutter
// The instance of the class is the instantiation of the Object outline
// What goes inside the class?

// inside the class we MUST HAVE A CONSTRUCTOR
// inside the constructor we use the THIS keyword to set variables

let bubble1;
let bubble2;

function setup() {
  createCanvas(600, 400)
  // these are the ARGUEMENTS, the things that are passed in
  bubble1 = new Bubble(200, 200, 40);
  bubble2 = new Bubble(400, 200, 20);
}

function draw() {
  background(0);
  bubble1.move();
  bubble1.show();
  bubble2.move();
  bubble2.show();
}

class Bubble {
  // the constructor is defined with parameteres => variables that go inside the actual def of the function
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }
  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r*2);
  }
}

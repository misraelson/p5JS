// where do x and y get their initial value?
// x + y get their initial value from where we call the function
// x,y,petals are the parameters for our function
// function flower(x, y, petals) {
//   ellipse(x, y, 10, 10);
//   for (var i = 0, i<petals, i++){
//   }
// };
// 200, 100, 10 are the arguements we pass into our function
// flowers(200, 100, 10);

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(50);

  lollipop(100, 100, 50);
  lollipop(300, 200, 150);
}

function lollipop(x, y, diameter) {
  fill(0, 200, 255);
  rect(x-10, y, 20, 150);

  fill(255, 0, 200);
  ellipse(x, y, diameter, diameter);
}

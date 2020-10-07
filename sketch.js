let kittenPic;
let cam;
let x;

function preload() {
  kittenPic = loadImage("pics/kitten01.jpg");
}

function setup() {
  createCanvas(600, 400);
  preload();
  cam = createCapture(VIDEO);
  cam.size(200, 200);
  cam.hide();
  x = 0;
}

function draw() {
  background(255);
  //image(kittenPic, x, 10, 50, 50);
  image(cam, mouseX - 100, mouseY - 75, 200, 150);
  x += 01;
  if (x > width - 200) x = 0;
}

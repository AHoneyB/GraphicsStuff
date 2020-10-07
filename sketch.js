let angle;

function setup() {
  createCanvas(400, 400, WEBGL);
  angle = 0;
}

function draw() {
  let light = 150;
  let c = 255;
  background(255);
  rotateX(angle);
  rotateY(angle * 0.1);
  rotateZ(angle * 0.1);

  pointLight(255, 0, 0, -200, -200, 120);
  pointLight(0, 255, 255, 200, 200, 120);
  directionalLight(255, 255, 0, 100, -200, 0);
  ambientLight(light, light, light);
  ambientMaterial(c);
  strokeWeight(1);
  //stroke(1);
  noStroke();
  sphere(100);
  angle += 0.01;
}

// function draw() {
//   background(255);
//   ambientLight(200, 0, 0);
//   //move your mouse to change light direction
//   let dirX = (mouseX / width - 0.5) * 2;
//   let dirY = (mouseY / height - 0.5) * 2;
//   pointLight(255, 0, 0, 0, -40, -40);
//   //directionalLight(150, 150, 150, -dirX, -dirY, -0.01);
//   noStroke();
//   sphere(40);
// }

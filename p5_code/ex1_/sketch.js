let trianglecounter = 0;
let heehee = 100;
function setup() {
  noSmooth();
  // Initialize heehee, create foundation of code, 
  // Use heehee as variance
  let u = 0;
  let gap = 6;
  console.log("This is the heehee var: " + heehee);
  // Long rectangular canvas, light blue background
  createCanvas(500,500);
  background(150,200,200);
  

  for(let j = height; j > 0; j--) {
    for(let i = 200; i > 0; i -= 5) {
      u = random(1, 2);
      strokeWeight(u);
      fill(random(0, 255),random(0, 255),random(0, 255));
      // Middle Top
      ellipse(height/2, j, i, i);
      // Middle left
      ellipse(j, height/2, i, i);
      // Middle Bot
      ellipse(height/2, height - j, i, i);
      // Middle Right
      ellipse(height - j, height/2, i, i);
    }
  }

  // Middle Circles
  for(let i = 425; i > 0; i -= gap) {
    u = random(1, 2);
    strokeWeight(u);
    fill(random(66, 123), 160, random(1, 222));
    ellipse(height /2 , width / 2, i, i);
  }
  for(let i = 375; i > 0; i -= gap) {
    u = random(1, 2);
    strokeWeight(u);
    fill(random(66, 123), random(20, 80), random(150, 222));
    ellipse(height /2 , width / 2, i, i);
  }
  for(let i = 325; i > 0; i -= gap) {
    u = random(1, 2);
    strokeWeight(u);
    fill(random(150, 183), 15, random(120, 200));
    ellipse(height /2 , width / 2, i, i);
  }
    // Square grid borrowed from Amelia's code
    for (let i = 0; i < 500; i += 20) {
      for (let j = 0; j < 500; j += 20) {
        u = random(1, 2);
        strokeWeight(u);
        rand = random(255);
        fill(rand);
        rect( i+5, j+5, 10, 10 );
      }
    }
  for(let j = height; j >0; j -= gap) {
    for(let i = 200; i > 0; i -=7) {
      fill(random(0, 255),random(0, 255),random(0, 255));
      // Bottom left corner in
      ellipse(j, j, i, i);
      // Bottom right corner in
      ellipse(height - j, j, i, i);
      // Top right corner in
      ellipse(j, height - j, i, i);
      // Top left corner in
      ellipse(height - j, height-j, i, i);
    }
  }
  noFill();
}
function draw() {
    if(pmouseX != mouseX || pmouseY != mouseY) {
      arc(trianglecounter, trianglecounter, trianglecounter, trianglecounter, 0, PI);
      arc(width - trianglecounter, trianglecounter, trianglecounter, trianglecounter, 0, PI)
      triangle(heehee * heehee, heehee / trianglecounter, 33 / heehee, trianglecounter);
      trianglecounter += 7;
      if(trianglecounter >= 600) {
        trianglecounter -= 597;
      }
    }
    console.log(trianglecounter);
}
function keyPressed() {
  console.log("pressing");
  if(key == "s") {
    saveCanvas('ex1.jpg');
  }
}
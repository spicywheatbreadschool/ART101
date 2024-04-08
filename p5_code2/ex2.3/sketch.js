let catX = -100;
let catY = 185;
let catSpeedX = 1;
let catRotate = 0;
let catLegOffset = 5;
let timer = 0;

let kirbyIncrement = 1;
let kirbyRotate = 0;
let kirbyScale = 1;
function setup() {
  createCanvas(500,500);
  
  noStroke();
  fill(150, 150, 150);
  angleMode(DEGREES);
}

function draw() {
  background(28, 31, 71);
  // Moon
  fill(218, 228, 245);
  ellipse(50, 50, 400);

  // Orange Planet
  fill(247, 217, 139);
  ellipse(400, 400, 150);

  // Blue planet
  fill(59, 59, 161);
  ellipse(150, 350, 40);

  // Purple planet
  fill(168, 130, 209);
  ellipse(350, 200, 100);
  
  let col1 = color(155, 155, 155);
  let col2 = color(230, 155, 180);
  let col3 = color(85, 200, 200);
  let col4 = color(214, 227, 141);
  JLCat(catRotate, 1, col1, false);
  JLCat(catRotate - 180, 1, col2, false);
  JLCat(catRotate - 90, 0.5, col3, true);
  JLCat(catRotate - 270, 0.5, col4, true);

  kirbyScale = 1.5 - (Math.sqrt((height / 2 - mouseX) ** 2 + (height / 2 - mouseY) ** 2) / 100);
  JLKirby(mouseX, mouseY, kirbyRotate, kirbyScale);
  if(kirbyRotate == 45 || kirbyRotate == -45) {
    kirbyIncrement *= -1;
  }
  kirbyRotate += kirbyIncrement;

  if(catX + (height / 2) > width - 25) {
    catRotate -= 90;
    catX = -100;
  }
}
function JLKirby(cx, cy, r, sc) {
  push();

  translate(cx, cy);
  rotate(r);
  scale(sc);
  stroke(0, 0, 0);

  star();
  feet(cx, cy, r, sc);
  leftArm();
  body();
  rightArm();
  eyes();
  mouth();

  pop();
  function star() {
    fill(235, 237, 97);
    strokeWeight(3);
    triangle(-40, 75, -25, 0, 35, 50);
    triangle(35, 50, 95, 50, 35, 0);
    triangle(0, -10, -80, 0, -40, 35);
    triangle(-50, -10, -25, -50, 10, -40);
    triangle(40, -20, 80, -20, 50, 20);
    strokeWeight(1);
  }
  function feet(cx, cy, r, sc) {
    leftFoot();
    rightFoot();

    function leftFoot() {
      push();
      translate(-30, 25);
      rotate(-35);
      fill(176, 48, 48);
      ellipse(0, 0, 60, 40);
      pop();
    }
    function rightFoot() {
      push();
      translate(25, 25);
      rotate(-10);
      fill(176, 48, 48);
      ellipse(0, 0, 40, 80);
      pop();
    }
  }
  function rightArm() {
    fill(231, 145, 191);
    ellipse(50, 25, 40, 40);
  }
  function leftArm() {
    fill(231, 145, 191);
    ellipse(-50, -25, 40, 40);
  }
  function mouth() {
    translate(-25, 20);
    
    fill(245, 103, 103);
    triangle(-25, -15, 15, 5, -5, 15)
  }
  function body() {
    fill(231, 145, 191);
    ellipse(0, 0, 100);
  }
  function eyes() {
    leftEye();
    rightEye();
    function leftEye() {
      translate(-20, -10);

      fill(0, 0, 0);
      ellipse(0, 0, 10, 30);
      fill(240, 240, 240);
      ellipse(0, -5, 5, 15);
    }
    function rightEye() {
      translate(40, 15);

      fill(0, 0, 0);
      ellipse(0, 0, 10, 30);
      fill(240, 240, 240);
      ellipse(0, -5, 5, 15);
    }
  }
}
function JLCat(r, sc, col, leg) {
  push();

  timer++;
  if(timer > 25) {
    catLegOffset *= -1;
    timer = 0;
  }
  catX += catSpeedX;
  fill(col);
  body(r, sc);
  tail(r, sc);
  legs(r, sc, leg);
  head(r, sc);
  pop();

  // Head will be base translation, move body parts according to distance from head
  function head(r, sc) {
    push();

    translate(width / 2, height / 2);
    rotate(r);
    scale(sc);

    // head outline
    
    ellipse(catX, catY, 50);
    fill(0, 0, 0);
    // eyes
    ellipse(catX - 8, catY, 5);
    ellipse(catX + 8, catY, 5);
    // ears
    triangle(catX - 20, catY - 10, catX - 10, catY - 20, catX - 25, catY - 25);
    triangle(catX + 20, catY - 10, catX + 10, catY - 20, catX + 25, catY - 25);
    // mouth
    stroke(0,0,0);
    noFill();
    arc(catX - 5, catY + 13,6, 5, 0, -180);
    arc(catX + 2, catY + 13,6, 5, 0, -180);

    pop();
  }
  function body(r, sc) {
    push();

    translate(width / 2, height / 2);
    rotate(r);
    scale(sc);

    ellipse(catX - 60, catY + 25, 125, 50);

    pop();
  }
  function tail(r, sc) {
    push();

    translate(width / 2, height / 2);
    rotate(r);
    scale(sc);

    ellipse(catX - 110, catY + 10, 20, 40);
    pop();
  }
  function legs(r, sc, leg) {
    push();

    leftLegs(r, sc, leg);
    rightLegs(r, sc, leg);

    pop();
    function leftLegs(r, sc, leg) {
      push();

      ellipseMode(CORNER);
      translate(width / 2, height / 2);
      rotate(r);
      scale(sc);

      ellipse(catX - 25, catY + 15 - catLegOffset, 10, 50);
      ellipse(catX - 110, catY + 15 - catLegOffset, 10, 50);
      if(leg) {
        arm(catX - 25, catY + 15 + catLegOffset);
        arm(catX - 110, catY + 15 + catLegOffset);
      }
      pop();
    }
    function rightLegs(r, sc, leg) {
      push();

      ellipseMode(CORNER);
      translate(width / 2, height / 2);
      rotate(r);
      scale(sc);

      ellipse(catX - 10, catY + 15 + catLegOffset, 10, 50);
      ellipse(catX - 95, catY + 15 + catLegOffset, 10, 50);
      if(leg) {
        arm(catX - 10, catY + 15 + catLegOffset);
        arm(catX - 95, catY + 15 + catLegOffset);
      }
      pop();
    }
  }
  // borrowed code from shelby
  function arm(cx, cy) {
    rect(cx, cy,10,90,10);
  }
}

let catLegOffset = 5;
let testCat;
let timer = 0;
let rotateInc = 0;

// Random Cat Arr Vars
let count = 20;
let loX = new Array(count);
let loY = new Array(count);
let colR = new Array(count);
let colG = new Array(count);
let colB = new Array(count);
let size = new Array(count);
let catArray = new Array(count);
function setup() {
  createCanvas(500,500);
  
  frameRate(24);
  noStroke();
  fill(150, 150, 150);
  angleMode(DEGREES);

  let tempVel = 0;
  let tempAcc = 15;
  for(let i = 0; i < count; i++) {
    loX[i] = 250 - (i * 30);
    loY[i] = 150 + tempVel;
    tempVel += tempAcc;
    if(i % 3 == 0) tempAcc *= -1;
    let temp = random(1, 17);
    colR[i] = int(15 * temp);
    colG[i] = int(11 * temp);
    colB[i] = int(11 * temp);
    let tempCol = color(colR[i], colG[i], colB[i]);
    catArray[i] = new Cat(0, 1, tempCol, false, loX[i], loY[i], 0, 4);
  }
}
function draw() {
  // Sky
  background(45, 146, 247);
  // Sun
  push();
  translate(250, 250);
  fill(234, 242, 121);
  ellipse(0, 0, 250);
  rotate(rotateInc);
  rotateInc++;
  if(rotateInc > 360) rotateInc = 0;
  for(let i = 0; i < 12; i++) {
    rect(0, 200, 20, 100, 20);
    rotate(30);
  }
  pop();
  // Grass
  fill(4, 200, 70);
  ellipse(250, 500, 1000, 500);
  // Rainbow
  fill(255, 54, 74);
  
  timer++;
  if(timer > 6) {
    catLegOffset *= -1;
    timer = 0;
  }
  for(let i = 0; i < count; i++) {
    catArray[i].jumpingCat();
  }
}
class Cat {
  r;
  sc;
  col;
  leg;
  cx;
  cy;
  jumpVel;
  jumpAcc;
  goRight;
  strokeCol;
  constructor(rotate, scale, color, leg, currentX, currentY, jumpVelocity, jumpAcceleration) {
    this.r = rotate;
    this.sc = scale;
    this.col = color;
    this.leg = leg;
    this.cx = currentX;
    this.cy = currentY;
    this.jumpVel = jumpVelocity;
    this.jumpAcc = jumpAcceleration;
    this.goRight = true;
    this.strokeCol = int(random(30, 255));
  }
  JLCat() {
    push();
  
    fill(this.col);
    body(this.r, this.sc, this.cx, this.cy);
    tail(this.r, this.sc, this.cx, this.cy);
    legs(this.r, this.sc, this.leg, this.cx, this.cy);
    head(this.r, this.sc, this.cx, this.cy, this.strokeCol);
    pop();
  
    // Head will be base translation, move body parts according to distance from head
    function head(r, sc, catX, catY, strokeCol) {
      push();
  
      translate(width / 2, height / 2);
      rotate(r);
      scale(sc);
  
      // head outline
      
      ellipse(catX, catY, 50);
      fill(strokeCol, strokeCol, strokeCol);
      // eyes
      ellipse(catX - 8, catY, 5);
      ellipse(catX + 8, catY, 5);
      // ears
      triangle(catX - 20, catY - 10, catX - 10, catY - 20, catX - 25, catY - 25);
      triangle(catX + 20, catY - 10, catX + 10, catY - 20, catX + 25, catY - 25);
      // mouth
      stroke(strokeCol, strokeCol, strokeCol);
      noFill();
      arc(catX - 5, catY + 13,6, 5, 0, -180);
      arc(catX + 2, catY + 13,6, 5, 0, -180);
  
      pop();
    }
    function body(r, sc, catX, catY) {
      push();
  
      translate(width / 2, height / 2);
      rotate(r);
      scale(sc);
  
      ellipse(catX - 60, catY + 25, 125, 50);
  
      pop();
    }
    function tail(r, sc, catX, catY) {
      push();
  
      translate(width / 2, height / 2);
      rotate(r);
      scale(sc);
  
      ellipse(catX - 110, catY + 10, 20, 40);
      pop();
    }
    function legs(r, sc, leg, catX, catY) {
      push();
  
      leftLegs(r, sc, leg, catX, catY);
      rightLegs(r, sc, leg, catX, catY);
  
      pop();
      function leftLegs(r, sc, leg, catX, catY) {
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
      function rightLegs(r, sc, leg, catX, catY) {
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
  JLCatFlip() {
    push();
  
    fill(this.col);
    body(this.r, this.sc, this.cx, this.cy);
    tail(this.r, this.sc, this.cx, this.cy);
    legs(this.r, this.sc, this.leg, this.cx, this.cy);
    head(this.r, this.sc, this.cx, this.cy, this.strokeCol);
    pop();
  
    // Head will be base translation, move body parts according to distance from head
    function head(r, sc, catX, catY, strokeCol) {
      push();
  
      translate(width / 2, height / 2);
      rotate(r);
      scale(sc * -1, 1);
  
      // head outline
      
      ellipse(catX, catY, 50);
      fill(strokeCol, strokeCol, strokeCol);
      // eyes
      ellipse(catX - 8, catY, 5);
      ellipse(catX + 8, catY, 5);
      // ears
      triangle(catX - 20, catY - 10, catX - 10, catY - 20, catX - 25, catY - 25);
      triangle(catX + 20, catY - 10, catX + 10, catY - 20, catX + 25, catY - 25);
      // mouth
      stroke(strokeCol, strokeCol, strokeCol);
      noFill();
      arc(catX - 5, catY + 13,6, 5, 0, -180);
      arc(catX + 2, catY + 13,6, 5, 0, -180);
  
      pop();
    }
    function body(r, sc, catX, catY) {
      push();
  
      translate(width / 2, height / 2);
      rotate(r);
      scale(sc * -1, 1);
  
      ellipse(catX - 60, catY + 25, 125, 50);
  
      pop();
    }
    function tail(r, sc, catX, catY) {
      push();
  
      translate(width / 2, height / 2);
      rotate(r);
      scale(sc * -1, 1);
  
      ellipse(catX - 110, catY + 10, 20, 40);
      pop();
    }
    function legs(r, sc, leg, catX, catY) {
      push();
  
      leftLegs(r, sc, leg, catX, catY);
      rightLegs(r, sc, leg, catX, catY);
  
      pop();
      function leftLegs(r, sc, leg, catX, catY) {
        push();
  
        ellipseMode(CORNER);
        translate(width / 2, height / 2);
        rotate(r);
        scale(sc * -1, 1);
  
        ellipse(catX - 25, catY + 15 - catLegOffset, 10, 50);
        ellipse(catX - 110, catY + 15 - catLegOffset, 10, 50);
        if(leg) {
          arm(catX - 25, catY + 15 + catLegOffset);
          arm(catX - 110, catY + 15 + catLegOffset);
        }
        pop();
      }
      function rightLegs(r, sc, leg, catX, catY) {
        push();
  
        ellipseMode(CORNER);
        translate(width / 2, height / 2);
        rotate(r);
        scale(sc * -1, 1);
  
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
  jumpingCat(copies) {

    if(this.goRight) {
      this.cx += 5;
      this.JLCat()
    } else {
      this.cx -= 5;
      this.JLCatFlip()
    }

    this.jumpVel += this.jumpAcc;
    this.cy += this.jumpVel;
    if(this.jumpVel > 15) {
      this.jumpVel = 0;
      this.jumpAcc *= -1;
    } else if(this.jumpVel < -15) {
      this.jumpVel = 0;
      this.jumpAcc *= -1;
    }

    if(this.goRight) {
      this.cx += 5;
      this.JLCat()
    } else {
      this.cx -= 5;
      this.JLCatFlip()
    }
    if(this.cx < -250 || this.cx > 400) {
      this.goRight = !this.goRight;
    }
  }
  setGoRight() {
  this.goRight = !this.goRight;
  }
}
function mousePressed() {
  for(let i = 0; i < count; i++) {
    catArray[i].setGoRight();
  }
}
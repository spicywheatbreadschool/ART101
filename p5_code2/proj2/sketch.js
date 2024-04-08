let theta;
let recMode = false;

// Params for easy editing
let initEye = 80;
let eyeLineRatio = 0.4;
let eyeThetaAdj = 0;
let eyeNumBranch;
let eyeMinLen = 0.5;
let can;

// Recursive Tree Objects
let mainBranch;
let eye1;

function setup() {
  can = createCanvas(710, 400);
  eyeNumBranch = int(2 * PI / radians(22.5))
  frameRate(60);
  frameCount = 60;
  //frameCount = 300;
  mainBranch = new recursiveTree(120, 0.8, 0, 2, 2);
  eye1 = new recursiveTree(initEye, eyeLineRatio, eyeThetaAdj, eyeNumBranch, eyeMinLen);
}

function draw() {
  // Phase 1
  if(frameCount <= 60) {
    background(0);

    // Let's pick an angle 0 to 90 degrees based on the mouse position
    let a = frameCount;
    let a2 = frameCount + 15;
    // Convert it to radians
    theta = radians(a);
    // Start the tree from the bottom of the screen
    translate(width/2,height);
    // Move to the end of that line
    translate(0,-120);

    // Main branch
    stroke(255);
    strokeWeight(1);
    mainBranch.twoBranch(mainBranch.initLine, mainBranch.lineRatio, mainBranch.thetaAdj, mainBranch.numBranches, mainBranch.minLen);

    // "eye" branches
    theta = radians(45 / 2);
    stroke(145, 12, 0);
    strokeWeight(4);

    translate(-60, -100);
    eye1.reverseBranch(eye1.initLine, eye1.InitLine2, eye1.lineRatio, eye1.thetaAdj, eye1.numBranch, eye1.minLen);
    translate(120, 0);
    eye1.reverseBranch(eye1.initLine, eye1.InitLine2, eye1.lineRatio, eye1.thetaAdj, eye1.numBranch, eye1.minLen);
  } else if(frameCount <= 300) {
    background(0);

    let a = 60 + frameCount / 55;
    let a2 = 45 / 2 + frameCount - 60;
    let rand = random(-frameCount / 30, frameCount / 30);

    translate(width/2,height);
    // Start adding a shake to the mainBranch that increases as frame increases
    translate(0 + rand, -120 + rand);
    // Main branch but it remains where it left off at frame 60
    stroke(255);
    strokeWeight(1);
    theta = radians(a);
    mainBranch.twoBranch(mainBranch.initLine, mainBranch.lineRatio, mainBranch.thetaAdj, mainBranch.numBranches, mainBranch.minLen);

    translate(-rand, -rand);
    translate(-60, -100);
    // Eye branches but begin changing theta for them now
    theta = radians(a2);
    stroke(145, 12, 0);
    strokeWeight(4);

    eye1.initEye += (frameCount - 60);
    eye1.lineRatio += (frameCount / 600);
    eye1.initLine2 = frameCount - 60;

    eye1.reverseBranch(eye1.initLine, eye1.initLine2, eye1.lineRatio, eye1.thetaAdj, eye1.numBranch, eye1.minLen);
    translate(120, 0)
    eye1.reverseBranch(eye1.initLine, eye1.initLine2, eye1.lineRatio, eye1.thetaAdj, eye1.numBranch, eye1.minLen);
  } else if(frameCount <= 1000) {
    /* to do
    background(0);

    let a = frameCount - 300;
    let a2 = 45 / 2 + frameCount - 60;
    let rand = random(-frameCount / 30, frameCount / 30);

    translate(width/2,height);
    translate(0 + rand, -120 + rand);
    // Main branch but it remains where it left off at frame 60
    stroke(255);
    strokeWeight(1);
    theta = radians(a);
    branch(120, 0.8, 0, 2, 2);

    translate(-rand, -rand);
    // Eye branches but begin changing theta for them now
    theta = radians(a2);
    stroke(145, 12, 0);
    strokeWeight(4);

    translate(-60, -100);
    branch(initEye + frameCount - 60, eyeLineRatio + frameCount / 600, eyeThetaAdj, int(2 * PI / theta), eyeMinLen);
    rotate(PI);
    branch(frameCount - 60, eyeLineRatio, eyeThetaAdj, int(2 * PI / theta), eyeMinLen);

    rotate(PI);
    translate(120, 0);
    branch(initEye + frameCount - 60, eyeLineRatio + frameCount / 600, eyeThetaAdj, int(2 * PI / theta), eyeMinLen);
    rotate(PI);
    branch(frameCount - 60, eyeLineRatio, eyeThetaAdj, int(2 * PI / theta), eyeMinLen);
    rotate(PI);
    */
  }
  // Recording functionality
  console.log(frameCount);
  recordit();
}
function keyPressed() {

  if (keyIsPressed === true) {
      let k = key;
      console.log("k is " + k);

      if (k == 's' || k == 'S') {
          console.log("Stopped Recording");
          recMode = false;
          noLoop();
      }

      if (k == ' ') {
          console.log("Start Recording");
          recMode = true;
          loop();
      }
  }
}

function recordit() {  // new version
  if (recMode == true) {
      let ext = nf(frameCount, 4);
      saveCanvas(can, 'frame-' + ext, 'jpg');
      console.log("rec " + ext);
  }
}
class recursiveTree {
  initLine;
  initLine2;
  lineRatio;
  thetaAdj;
  numBranch;
  minLen;
  constructor(initLine, lineRatio, thetaAdj, numBranch, minLen) {
    this.initLine = initLine;
    this.initLine2 = 0;
    this.lineRatio = lineRatio;
    this.thetaAdj = thetaAdj;
    this.numBranch = numBranch;
    this.minLen = minLen;
  }
  twoBranch(h, lineRatio, thetaAdj, numBranches, minLen) {
    // Each branch will be 2/3rds the size of the previous one
    h *= lineRatio;
    if (h > minLen) {
      push();    // Save the current state of transformation (i.e. where are we now)
      rotate(theta + thetaAdj);   // Rotate by theta
      line(0, 0, 0, -h);  // Draw the branch
      translate(0, -h); // Move to the end of the branch
      this.twoBranch(h, lineRatio, thetaAdj, numBranches, minLen);       // Ok, now call myself to draw two new branches!!
      pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state
  
      // Repeat the same thing, only branch off to the "left" this time!
      push();
      rotate(-theta - thetaAdj);
      line(0, 0, 0, -h);
      translate(0, -h);
      this.twoBranch(h, lineRatio, thetaAdj, numBranches, minLen);
      pop();
    }
  }
  reverseBranch(h, h2, lineRatio, thetaAdj, numBranches, minLen) {
    // Each branch will be 2/3rds the size of the previous one
    h *= lineRatio;
    h2 *= lineRatio;
    if (h > minLen) {
      push();    // Save the current state of transformation (i.e. where are we now)
      rotate(theta + thetaAdj);   // Rotate by theta
      line(0, 0, 0, -h);  // Draw the branch
      translate(0, -h); // Move to the end of the branch
      this.reverseBranch(h, h2, lineRatio, thetaAdj, numBranches, minLen);       // Ok, now call myself to draw two new branches!!
      pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state
      
      // Repeat the same thing, only branch off to the "left" this time!
      push();
      rotate(-theta - thetaAdj);
      line(0, 0, 0, -h);
      translate(0, -h);
      this.reverseBranch(h, h2, lineRatio, thetaAdj, numBranches, minLen);
      pop();
    }
    if(h2 > minLen) {
      rotate(PI);

      push();    
      rotate(theta + thetaAdj);  
      line(0, 0, 0, -h2);  
      translate(0, -h2); 
      this.reverseBranch(h, h2,  lineRatio, thetaAdj, numBranches, minLen);      
      pop();     

      push();
      rotate(-theta - thetaAdj);
      line(0, 0, 0, -h2);
      translate(0, -h2);
      this.reverseBranch(h, h2, lineRatio, thetaAdj, numBranches, minLen);
      pop();

      rotate(PI);
    }
  }
}

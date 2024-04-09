let theta;
let recMode = true;

let can;

// Recursive Tree Objects
let mainBranch;
let eye1;
let midBranch;

let frameLim1 = 100;
let frameLim2 = 420;
let frameLim3 = 1120;

function setup() {
  can = createCanvas(1920, 1080);
  frameRate(.5);
  frameCount = 99;
  mainBranch = new recursiveTree(120, 0.8, 2);
  eye1 = new recursiveTree(80, .4, 0.5);
  midBranch = new recursiveTree(100, 0.5, 2);
}

function draw() {
  // Phase 1
  if(frameCount <= frameLim1) {
    background(0);

    // Let's pick an angle 0 to 90 degrees based on the mouse position
    let a = frameCount / 2;
    let a2 = frameCount / 2 + 15;
    // Convert it to radians
    theta = radians(a);
    // Start the tree from the bottom of the screen
    translate(width/2,height);
    // Move to the end of that line
    translate(0,-400);

    // Main branch
    stroke(255);
    strokeWeight(1);
    mainBranch.twoBranch(mainBranch.initLine);

    // "eye" branches
    theta = radians(45 / 2);
    stroke(145, 12, 0);
    strokeWeight(4);

    translate(-60, -100);
    eye1.reverseBranch(eye1.initLine, eye1.InitLine2);
    translate(120, 0);
    eye1.reverseBranch(eye1.initLine, eye1.InitLine2);
  } else if(frameCount <= frameLim2) {
    background(0);

    let a = (frameLim1/2) + frameCount / 55;
    let a2 = 45 / 2 + (frameCount - frameLim1) * 2;
    let rand = random(-frameCount / 30, frameCount / 30);

    translate(width/2,height);
    // Start adding a shake to the mainBranch that increases as frame increases
    translate(0 + rand, -400 + rand);
    // Main branch but it remains where it left off at frame 60
    stroke(255);
    strokeWeight(1);
    theta = radians(a);
    mainBranch.twoBranch(mainBranch.initLine);

    translate(-rand, -rand);
    translate(-60, -100);
    // Eye branches but begin changing theta for them now
    theta = radians(a2);
    stroke(145, 12, 0);
    strokeWeight(4 - (frameCount - frameLim1) / 105);

    eye1.initLine += (frameCount - frameLim1) / frameLim1;
    eye1.initLine2 += (frameCount - frameLim1) / frameLim1;
    //eye1.minLen += 0.02;

    eye1.reverseBranch(eye1.initLine, eye1.initLine2);
    translate(120, 0)
    eye1.reverseBranch(eye1.initLine, eye1.initLine2);
  } else if(frameCount <= frameLim3) {
    background(0);

    let a = frameLim1/2 + frameLim2 / 55;
    let a2 = 45 / 2 + (frameCount - frameLim1) * 2;
    let a3 = radians(9); // Mid branch will have a very slight deviation to have a curve shape (assumedly.)
    let rand = random(-frameCount / 25, frameCount / 25);

    translate(width/2,height);
    // Sahke increases in intensity
    translate(0 + rand, -400 + rand);
    // Main branch but it remains where it left off at frame 420
    stroke(255);
    strokeWeight(1);
    theta = radians(a);
    mainBranch.twoBranch(mainBranch.initLine);

    translate(-rand, -rand);
    translate(-60, -100);
    // Render eye branches wherever they end up
    theta = radians(a2);
    stroke(145, 12, 0);
    strokeWeight(4 - (frameLim2 - frameLim1) / 105);

    eye1.initLine -= (frameCount - frameLim1) / (frameLim2 * 100);
    eye1.initLine2 -= (frameCount - frameLim1) / (frameLim2 * 100);
    eye1.reverseBranch(eye1.initLine, eye1.initLine2);
    translate(120, 0)
    eye1.reverseBranch(eye1.initLine, eye1.initLine2);

    // Ok here starts the stuff for mid branch
    translate(-60, -300);
    rotate(PI);
    theta = a3;
    strokeWeight(.5);
    stroke(0, 0, 0);
    midBranch.initLine = 100 + (frameCount - frameLim2) * 1.1;
    midBranch.halfBranch(midBranch.initLine);

    translate(-200, 0);
    midBranch.halfBranch(midBranch.initLine);
    translate(400, 0);
    midBranch.halfBranch(midBranch.initLine);

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
  minLen;
  constructor(initLine, lineRatio, minLen) {
    this.initLine = initLine;
    this.initLine2 = 0;
    this.lineRatio = lineRatio;
    this.minLen = minLen;
  }
  halfBranch(h) {
    h *= this.lineRatio;
    if (h > this.minLen) {
      if(h/2 > this.minLen) {
        push();    
        rotate(theta);  
        line(0, 0, 0, -h/2);  
        translate(0, -h/2); 
        this.halfBranch(h);   
        pop();    
      }
    
      push();
      rotate(-theta);
      line(0, 0, 0, -h);
      translate(0, -h);
      this.halfBranch(h);
      pop();
    }
  }
  twoBranch(h) {
    // Each branch will be 2/3rds the size of the previous one
    h *= this.lineRatio;
    if (h > this.minLen) {
      push();    // Save the current state of transformation (i.e. where are we now)
      rotate(theta);   // Rotate by theta
      line(0, 0, 0, -h);  // Draw the branch
      translate(0, -h); // Move to the end of the branch
      this.twoBranch(h);       // Ok, now call myself to draw two new branches!!
      pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state
  
      // Repeat the same thing, only branch off to the "left" this time!
      push();
      rotate(-theta);
      line(0, 0, 0, -h);
      translate(0, -h);
      this.twoBranch(h);
      pop();
    }
  }
  reverseBranch(h, h2) {
    // Each branch will be 2/3rds the size of the previous one
    h *= this.lineRatio;
    h2 *= this.lineRatio;
    if (h > this.minLen) {
      push();    // Save the current state of transformation (i.e. where are we now)
      rotate(theta);   // Rotate by theta
      line(0, 0, 0, -h);  // Draw the branch
      translate(0, -h); // Move to the end of the branch
      this.reverseBranch(h, h2);       // Ok, now call myself to draw two new branches!!
      pop();     // Whenever we get back here, we "pop" in order to restore the previous matrix state
      
      // Repeat the same thing, only branch off to the "left" this time!
      push();
      rotate(-theta);
      line(0, 0, 0, -h);
      translate(0, -h);
      this.reverseBranch(h, h2);
      pop();
    }
    if(h2 > this.minLen) {
      rotate(PI);

      push();    
      rotate(theta);  
      line(0, 0, 0, -h2);  
      translate(0, -h2); 
      this.reverseBranch(h, h2);      
      pop();     

      push();
      rotate(-theta);
      line(0, 0, 0, -h2);
      translate(0, -h2);
      this.reverseBranch(h, h2);
      pop();

      rotate(PI);
    }
  }
}

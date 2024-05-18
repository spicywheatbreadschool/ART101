let theta;
let recMode = false;

let can;

// Recursive Tree Objects
let mainBranch;
let eye1;
let midBranch;

let frameLim1 = 100;
let frameLim2 = 420;
let frameLim3 = 900;

function setup() {
  can = createCanvas(1920, 1080);
  frameRate(.25);

  mainBranch = new recursiveTree(120, 0.8, 2);
  eye1 = new recursiveTree(80, .4, 0.5);
  midBranch = new recursiveTree(100, 0.5, 2);
}

function draw() {
  // Universal Transforms
  background(0);

  let a = frameCount / 10;
  let a2 = frameCount / 5;
  let a3 = radians(9); // Mid branch will have a very slight deviation to have a curve shape (assumedly.)

  translate(width / 2,-400 + height);
  stroke(255);
  strokeWeight(1);
  theta = radians(a);

  if(frameCount <= frameLim1) {

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

    mainBranch.twoBranch(mainBranch.initLine);


    // Eye branches but begin changing theta for them now
    theta = radians(a2);
    stroke(145, 12, 0);
    strokeWeight(4 - (frameCount - frameLim1) / 105);

    eye1.initLine = (frameCount + 80 - frameLim1);
    eye1.initLine2 = (frameCount - frameLim1) / 10;
    //eye1.minLen += 0.02;

    translate(-60, -100);
    eye1.reverseBranch(eye1.initLine, eye1.initLine2);
    translate(120, 0)
    eye1.reverseBranch(eye1.initLine, eye1.initLine2);

  } else {

    mainBranch.twoBranch(mainBranch.initLine);

    // Render eye branches wherever they end up
    theta = radians(a2);
    stroke(145, 12, 0);
    strokeWeight(4 - (frameLim2 - frameLim1) / 105);

    eye1.initLine = (frameCount + 80 - frameLim1);
    eye1.initLine2 = (frameCount - frameLim1) / 10;

    translate(-60,-100);
    eye1.reverseBranch(eye1.initLine, eye1.initLine2);
    translate(120, 0)
    eye1.reverseBranch(eye1.initLine, eye1.initLine2);

    // Ok here starts the stuff for mid branch
    translate(-60, -300);
    rotate(PI);
    theta = a3;
    strokeWeight(.8);
    stroke(0, 0, 0);
    midBranch.initLine = 100 + (frameCount - frameLim2) * 1.4;
    midBranch.halfBranch(midBranch.initLine);

    translate(-200, 0);
    midBranch.halfBranch(midBranch.initLine);
    translate(400, 0);
    midBranch.halfBranch(midBranch.initLine);

  }
  // Recording functionality
  console.log(frameCount);
  if(frameCount < frameLim3) {
    recordit();
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

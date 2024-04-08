let currentKey = "1";
let currentBrush = "0";
let troll;

let brushHue = 0;
let brushSaturation = 80;
let brushBrightness = 100;
let brushSize = 10;

//circle brush global vars
let arcSize = brushSize * 4;
let arcOffset = 0;
// IDK how to protect variables in JS, but for a brush program
// Honestly there shouldn't be any overlap, so I'll let it slide...
let timer = 0;
let x = 0;
let y = 0;
let paused = false;
let timerMax = 4;

let rectMin = 10;
let rectMax = 20;

function preload() {
  troll = loadImage("assets/troll.png");
}
function setup() {
  createCanvas(500, 500);
  colorMode(HSB);
  background(0, 0, 100);

  textSize(50);
  textAlign(LEFT, TOP);

  button = createButton("Current Color",);
  button.position(0, 410);
  let col = color(brushHue, brushSaturation, brushBrightness);
  button.style('background-color', col);

  button2 = createButton("Brush Size: " + (brushSize / 5));
  button2.position(0, 600);

  noStroke();
  strokeWeight(2);
  angleMode(DEGREES);
  fill(brushHue, brushSaturation, brushBrightness);
  console.log("init");
}

function draw() {
  if(currentBrush == 1) {
    rowDraw()
  } else {
    if(mouseIsPressed) {
      console.log(currentBrush);
      brushSelect();
      arcSize += .3;
      arcOffset += 10;
    } else {
      arcSize = brushSize * 4;
      arcOffset = 0;
    }
  }  
}
function brushSelect() {
  brushSaturation = 80;
  let tempBright = brushBrightness;
  switch(currentBrush) {
    case 2:
      trollBrush(mouseX, mouseY, pmouseX, pmouseY);
      break;
    case 3:
      normBrush(mouseX, mouseY);
      break;
    case 4:
      sunBrush(mouseX, mouseY);
      break;
    case 5:
      unnamedBrush(mouseX, mouseY);
      break;
    case 6:
      crossBrush(mouseX, mouseY);
      break;
    case 7:
      circleBrush(mouseX, mouseY);
      break;
    case 8:
      noiseBrush(mouseX, mouseY);
      break;
    case "e":
      brushSaturation = 0;
      brushBrightness = 100;
      eraser(mouseX, mouseY);
      break;
    default:
      brushSaturation = 100;
      break;
  }
  console.log("draw" + brushHue + brushSaturation + brushBrightness);
  fill(brushHue, brushSaturation, brushBrightness);
  brushBrightness = tempBright;
}

function keyPressed() {
  let prevBrush = currentBrush;
  currentKey = key;
  console.log(currentKey);
  switch (currentKey) {
    case "1":
      currentBrush = 1;
      break;
    case "2":
      currentBrush = 2;
      break;
    case "3":
      currentBrush = 3;
      break;
    case "4":
      currentBrush = 4;
      break;
    case "5":
      currentBrush = 5;
      break;
    case "6":
      currentBrush = 6;
      break;
    case "7":
      currentBrush = 7;
      break;
    case "8":
      currentBrush = 8;
      break;
    case "e":
      currentBrush = "e";
      break;
    case "s":
      saveCanvas();
    default:
      break;
  }

  if(currentBrush == 1) {
    rowDrawOptions();
  } else {
    brushOptions();
  }
}
function brushOptions() {
  switch(key) {
    case "c":
      clear();
      background(0, 0, 100);
      break;
    case "[":
      if(brushSize - 5 > 0) {
        brushSize -= 5;
      }
      break;
    case "]":
      brushSize += 5;
      break;
    default:
      break;
  }
  if (keyCode === UP_ARROW) {
    if (brushHue + 10 <= 360) {
      brushHue += 10;
    } else {
      brushHue = 10;
    }
  }
  if (keyCode === DOWN_ARROW) {
    if (brushHue - 10 >= 0) {
      brushHue -= 10;
    } else {
      brushHue = 350;
    }
  }
  if (keyCode === LEFT_ARROW) {
    if(brushBrightness - 5 >= 0) {
      brushBrightness -= 5;
    }
  }
  if (keyCode === RIGHT_ARROW) {
    if(brushBrightness + 5 <= 100) {
      brushBrightness += 5;
    }
  }
  let col = color(brushHue, brushSaturation, brushBrightness);
  button.style('background-color', col);
  let textReplacement = "Brush Size: " + (brushSize / 5);
  button2.html(textReplacement);
  fill(brushHue, brushSaturation, brushBrightness);
}
function trollBrush(cx, cy, lx, ly) {
  image(troll, cx, cy, (cx - lx), 10);
}
function normBrush(cx, cy) {
  circle(cx, cy, brushSize);
}
function sunBrush(cx, cy) {
  for(let x = 0; x < 360; x++) {
    ellipse(cx, cy, brushSize, 1);
    rotate(x);
  }
  rotate(0);
}
  function crossBrush(cx, cy) {
    for(let x = 0.2; x < 10; x += 0.1) {
      ellipse(cx, cy, brushSize / x, brushSize / (5 - x));
    }
  }
function unnamedBrush(cx, cy) {
  for(let x = 0.1; x < 2; x += 0.1) {
    ellipse(cx, cy, brushSize / x, brushSize / (2 - x));
    rotate(1);
  }
  rotate(0);
}
function circleBrush(cx, cy) {
  noFill();
  stroke(brushHue, brushSaturation, brushBrightness);
  arc(cx, cy, arcSize, arcSize, 0 + arcOffset, PI * 2 + arcOffset);
  noStroke();
}
function noiseBrush(cx, cy) {
  for(let x = 0; x < 5; x++) {
    arc(cx + random(brushSize * -2, brushSize * 2), cy + random(brushSize * -2, brushSize * 2), arcSize / 5, arcSize / 5, 0 + arcOffset, PI * 4 + arcOffset);
  }
}
function eraser(cx, cy) {
  circle(cx, cy, brushSize);
}

function rowDraw() {
  if (!paused) {
    timer++;
  }
  if (mouseIsPressed || keyIsDown(32) || paused) {
    fill(random(brushHue, brushHue), random(0, 120 - timer), random(15 + timer, 255 - timer));
  } else {
    fill(random(0, 255));
  }
  rect(x, y, random(rectMin, rectMax));
  if (timer >= timerMax) {
    x += random(rectMin, rectMax);
    if (x >= width) {
      x = 0;
      y += random(rectMin / 1.1, rectMax / 1.1);
    }
    timer = 0;
  }
  if (y >= height) {
    paused = true;
    timer = 0;
  }
}
function rowDrawOptions() {
  if (key == 'r') {
    softReset()
  }
  if (key == 'c') {
    softReset();
    clear();
    background(0, 0, 100);
  }
  if (key == 'p') {
    paused = !paused;
  }
  if (keyCode === LEFT_ARROW) {
    timerMax++;
  }
  if (keyCode === RIGHT_ARROW && timerMax > 1) {
    timerMax--;
  }
  if (keyCode === UP_ARROW) {
    if (brushHue + 10 <= 360) {
      brushHue += 10;
    } else {
      brushHue = 10;
    }
    fill(random(brushHue, brushHue), random(0, 120 - timer), random(15 + timer, 255 - timer));
  }
  if (keyCode === DOWN_ARROW) {
    if (brushHue - 10 >= 0) {
      brushHue -= 10;
    } else {
      brushHue = 350;
    }
    fill(random(brushHue, brushHue), random(0, 120 - timer), random(15 + timer, 255 - timer));
  }
  let col = color(brushHue, brushSaturation, brushBrightness);
  button.style('background-color', col);
}
function softReset() {
  paused = false;
  timer = 0;
  x = 0
  y = 0;
}


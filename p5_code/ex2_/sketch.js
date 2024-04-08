let timer = 0;
let pause = false;
let moneyRain = false;
let airhorn = false;
let airhornSize = 150;
let dollar;
let f;

let krabs;
let skull;

let dWidth = 100;
let dHeight = dWidth / 2;
let interval = 15;
let alternate;
function setup() {

  rectMode(CORNERS);
  colorMode(HSB);
  noStroke();

  textFont(f);
  textSize(30);
  textAlign(CENTER, TOP)

  createCanvas(600, 600);
  background(289, 51, 100);
  fill(232, 60, 100);

  alternate = true;
}
function preload() {
  dollar = loadImage("assets/dolla.png");
  f = loadFont("assets/font.ttf")
  krabs = loadImage("assets/krabs.gif");
  skull = loadImage("assets/skull.gif");
  horn = loadImage("assets/airhorn.png")
}
function draw() {
  timer++;
    if(moneyRain && interval / 2) {
      background(350, 100, 20);
      for(let x = 0; x <= height; x += dHeight * 3) {
        image(dollar, 0, x, dWidth * 8, dHeight * 3);
      }
      image(skull, 0, 0, 600, 600);
      image(dollar, mouseX + random(-100, 100), mouseY + random(-100, 100), dWidth, dHeight);
      timer = 0;
      if(airhorn) {
        tint
        image(horn, -25 + random(-5, 5), 225+ random(-5, 5), airhornSize, airhornSize);
        image(horn, 475 + random(-5, 5), 225+ random(-5, 5), airhornSize, airhornSize);
      }
    } else if(timer >= interval && !pause) {
      console.log("interval");
      background(289, 51, 100);
      for(let x = 0; x < width; x += dWidth) {
        for(let y = 0; y < height; y += dHeight) {
          if(alternate) {
            image(dollar, x, y, dWidth, dHeight);
            alternate = false;
          } else {
            text("Money !!", x, y + 10, dWidth, dHeight);
            alternate = true;
          }
        }
        alternate = !alternate;
      }
      timer = 0;
      alternate = !alternate;
      if(airhorn) {
        image(horn, -25 + random(-5, 5), 225+ random(-5, 5), airhornSize, airhornSize);
        image(horn, 475 + random(-5, 5), 225+ random(-5, 5), airhornSize, airhornSize);
      }
    } 
    if(moneyRain) {
      image(krabs, 200, 550, 200, 50);
    } else {
      image(krabs, 100, 100, 400, 400);
    }
  for (let x = 0; x <= 3; x++) {
    image(dollar, mouseX + (x * 5), mouseY + (x * 5), dWidth / 2, dHeight / 2);
  }
}

function mousePressed() {
  moneyRain = !moneyRain;
}
function keyPressed() {
  switch(key) {
    case "p":
      pause = !pause;
      break;
    case "m": 
      moneyRain = !moneyRain;
      break;
    default: 
      console.log("Do nothing");
      break;
    }
  if(keyIsDown(32)) {
    airhorn = !airhorn;
    console.log("airhorn is " + airhorn);
  }
 
}

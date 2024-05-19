
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================


///////////////////////  2  ////////////////////////

function intro()  {
  this.setup = function() 
  {
    let btnevent1 = false;
    let btnevent2 = false;
  }

  this.enter = function()
  {
    handleBGM(aloha);
  }

  this.draw = function() {
    image(squidHouse, 0, 0, width, height);
    mapToPixelSquid(squid, 500, 300, 1, .5, 255);
    textSize(20);
    fill(0);
    text("Another relaxing day in Bikini Bottom,\nallll alone. I sure hope nothing ruins my day.", 500, 200, 200);
    textSize(60);
    text("Squidward's Wonderful Day", 20, 70);

    btnevent2 = checkButtonPress("About", (width / 2) - 50, height - 70, 100, 40, color(130, 200, 250), color(100), color(250));
    if (btnevent2) {
      btnevent2 = false;
      this.sceneManager.showScene(about);
    }
  }  //end
}
function patEnter() {
  this.enter = function () {
    handleBGM(gator);
  }
  this.draw = function () {
    image(neighborhood, 0, 0, width, height);
    image(pat, 50, 250, 200, 200);
    textSize(30);
    text("HI SQUIDWARD!", 50, 200)
    image(squid2, 400, 350, 220, 120);
    text("Oh my god", 400, 520);
  }  
  this.mousePressed = function() {
    playBonk();
  }
}
function glitchNose() {
  this.setup = function () {
    scribble = new Scribble();
  }

  this.enter = function () {
    handleBGM(seaweed);
  }

  this.draw = function () {
    image(interior, 0, 0, width, height);
    image(pat, 0, 250, 200, 200);
    textSize(40);
    fill(0);
    text("I got your nose squidward", 0, 220);

    image(squid3, 350, 380, 300, 100);
    text("That is not my nose patrick", 350, 350);

    fill(0);
    scribble.scribbleEllipse(180, 350, 50, 50);
    fill(255, 255, 255);
    scribble.scribbleRect(180, 320, 10, 20);
    fill(255, 255, 255);
    scribble.scribbleEllipse(190, 340, 10, 10);
    fill(245, 96, 10);
    scribble.scribbleEllipse(180, 310, 20, 20);
    fill(216, 227, 68);
    scribble.scribbleEllipse(180, 312, 10, 10);
  } 

  this.mousePressed = function () {
    bonk.play();
  }
}
function explosion() {
  this.setup = function () {
    handleBGM(explode);
    setTimeout(handleBGM(seaweed), 4000);
  }

  this.enter = function () {
  }

  this.draw = function () {
    image(missile, 200, 0, height, width);
  }  //end

  this.mousePressed = function () {
    explode.play();
  }
}



////////////////////////////// 3 /////////////////

function playBonk() {
  if(!bonk.isPlaying()) {
    bonk.play();
  }
}
function about() {

  this.setup = function()  {

  }

  this.enter = function()
  {
    handleBGM(ending);
  }

  this.draw = function() {
    background(168, 255, 255);
    image(krabs, 600, 400, 200, 200);
    textSize(24);
    fill(0);
    text("Arghhh welcome to me about section, it'll be 10 cents a second while you're here!", 20, 50, 500, 200);
    text("Press spacebar to advance the story, or 1, 2, 3, 4, and h to navigate between pages!", 20, 150, 500, 200);
    text("Some pages have funny sound effects play when you're on them, so make sure to press your mouse as many times as you can!", 20, 250, 500, 200);
    text("Begin with the 1st page of Squidwerd's wonderful tale, and watch as many times as ye want (I get all of the royalties)", 20, 450, 500, 200);

    btnevent1 = checkButtonPress("Main Page", width - 150, height - 300, 100, 40, color(220, 100, 100), color(100), color(250));
    if (btnevent1) { 
      btnevent1 = false;
      this.sceneManager.showScene(intro);
    }
  }
  this.mousePressed = function () {
    doit.play();
  }
}
function handleBGM(bgm) {
  seaweed.stop();
  gator.stop();
  ending.stop();
  aloha.stop();
  bgm.play();
}
function mapToPixelSquid(arr,lx,ly,rot,sc, fade) {
  push();
  translate(lx,ly);
  rotate(radians(rot));
  scale(sc);
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        a = arr[i][j];
        if (a === 0) {
          // Base Blue
          fill(187,223,209);
        } else if(a == 1) {
          // Eye Color
          fill(253,240,188);
        } else if(a == 2) {
          // Darker Blue
          fill(144,191,173);
        } else if(a == 3) {
          // Pupil
          fill(173,144,44);
        } else if(a == 4) {
          // Background
          fill(255, 255, 255);
        }
        rect((j * 22) + 15, (i * 22) + 15, 20, 20);
    }
  }
  pop();
}
function checkButtonPress(str, bx, by, boxW, boxH, upcolor, ovcolor, dncolor) {

  let btnc = "";
  let btnstate = false;

  // Test if the cursor is over the box
  if (mouseX > bx - boxW &&
    mouseX < bx + boxW &&
    mouseY > by - boxH &&
    mouseY < by + boxH) {
    overBox = true;

    if (!mouseIsPressed) {
      stroke(255);
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    stroke(255);
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx, by);
  fill(btnc);
  rect(0, 0, boxW, boxH, 10); // draw the box

  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text(str, boxW / 2, 28);

  pop();

  return btnstate;

}
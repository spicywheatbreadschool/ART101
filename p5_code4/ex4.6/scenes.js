
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================


///////////////////////  2  ////////////////////////

function main()  {


let btnevent1 = false;

this.setup = function() {
    console.log("We are at setup for main");
}

this.enter = function()
{
  console.log("We are at entering main");



  if ( !snd1.isPlaying() ) {  snd1.play(); }


}




  this.draw = function() {
    image(squidHouse, 0, 0, width, height);
    mapToPixelSquid(squid, 500, 300, 1, .5, 255);
    text("Another relaxing day in Bikini Botton...", 50, 50);
  }  //end

  this.mousePressed = function()
  {
    snd1.play();
  }


}



////////////////////////////// 3 /////////////////

function help() {

  this.setup = function()  {
      console.log("We are at setup for help");
      // access a different scene using the SceneManager

  }

  this.enter = function()
  {
   console.log("We are at entering for help");
  }

  this.draw = function() {
    background("lightblue");

  }
}


function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

let btnc = "";
let btnstate =false;

// Test if the cursor is over the box
if ( mouseX > bx - boxW &&
     mouseX < bx + boxW &&
     mouseY > by - boxH &&
     mouseY < by + boxH ) {
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
translate(bx,by);
fill(btnc);
rect(0, 0, boxW, boxH,10); // draw the box

fill(20);
noStroke();
textSize(20);
textAlign(CENTER);
text (str,boxW/2,28);

  pop();

  return btnstate;

}



function playshortsound() {
if ( !snd2.isPlaying() ) {
  snd2.play();
} else {
   snd2.stop();
}


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
}
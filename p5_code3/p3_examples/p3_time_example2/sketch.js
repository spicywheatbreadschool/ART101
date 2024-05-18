
////////////////////////////////////

// This is the same as the last examples
//but with some 24 hour clock code (sundown , sunup)
//to help with showing how that can be played with

let bgc;
let shc;

function setup() {
  createCanvas(500,500);
  background(200);
  fill(255,100,0);
  angleMode(DEGREES);

  //bgc = color(20,20,255);
  bgc = color(255,231,150);
  shc = color(0);
  //shc = color(200);
}

function draw() {
background(bgc);

 // textSize(30);
 fill(0);
 let h = hour();   // 0-23
 let m = minute(); // 0- 59
 let s = second();  // 0-59




 if (h > 16 || h < 7 ) {  // sunset and sunrise
      // nightime
      fill(200);
      ellipse(100,100,100,100);
     bgc = color(20,20,255);
     shc = color(200);
     //sundown
 } else {
     //daytime
     fill(255,200,0);
     ellipse(100,100,400,400);
     bgc = color(255,231,150);
     shc = color(20);
 }


 if ( h > 16 &&  h < 20 ) {

     textSize(40);
     fill(255,0,0);
     text("TRAFFIC BEEP BEEP",100,100);
 }

 if ( h > 11 &&  h < 15 ) {

     if (m > 49  &&  m < 59) {

     textSize(40);
     fill(255,0,0);
     text("Art101 is Over",100,100);

    }
 }




 // input, input range,scaleoutput low, scaleoutput high

 let mh = map(h,0,23,0,360);
 let mm = map(m,0,59,0,360);
 let ms = map(s,0,59,0,360);

 push();

 translate(width/2,height/2);
 //rect(s-200,0,40,50);
 rotate(mh-90);
 noStroke();
 fill(20);
 ellipse(0,0,80,80);
 fill(90,100,0);
 rect(0,0,200,10,5);
 stroke(200,100,0);
 pop();



 push();

 translate(width/2,height/2);
 rotate(mm-90);
 noStroke();
 fill(20);
 ellipse(0,0,80,80);
 fill(90,0,0);
 rect(0,0,200,10,5);
 stroke(200,100,0);

 pop();



 push();
  // second hand
 translate(width/2,height/2);
 rotate(ms-90);
 noStroke();
 fill(20);
 ellipse(0,0,80,80);
 fill(shc);
 rect(0,0,200,10,5);
 stroke(200,100,0);
 //line(0,0,0,25);
//translate(200,0);
//line(0,0,0,25);

 pop();
  push();

  pop();


}

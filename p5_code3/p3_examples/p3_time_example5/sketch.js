///////////////////////////////////////////
// Exmmple 5: Millis Function with Properties with the Date Class.
//go here for more info on Date. 
// https://www.w3schools.com/jsref/jsref_obj_date.asp

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let t1 = {timer:0,counter:0,period:0};
let t2 = {timer:0,counter:0,period:0};

function setup() {
  createCanvas(500,500);
  background(200);
  fill(255,100,0);
  textSize(30);
  //angleMode(DEGREES);
  rectMode(CORNERS);
  resetTime(t1,0);
  resetTime(t2,0);
  //resetTime(gtime2,gcount2,0);
}


function draw() {

 background(220);
 let nt1 = nextInterval(t1,500);
 // counts up continusly, based on period

 let d1 = new Date();
 console.log(d1.getDay());

 let todayis = days[d1.getDay()];
 
 text(todayis, width/2-100, height/2-200);

 if ( d1.getDay() == 3) {
  text("Its Humpday!!", width/2-100, height/2-150);
 }




 if (nt1 > 100) {
  resetTime(t1,0);
 }


 fill(0);
 text(nt1, width/2-160, height/2);
 let mnt1 = map(nt1,0,100,250,0);  // mapped for pixels.
 push();
 translate(width/2-100,height - 100);
 noStroke();
 fill(20);
 fill(90,100,0);
 rect(0,0,100,-mnt1,5); // draws from bot left to top right
 stroke(200,100,0);
 pop();


 let nt2 = nextInterval(t2,2000);
 // counts up continusly, based on period
// console.log(nt1);

if (nt1 > 100) {
  resetTime(t2,0);
 }

 fill(0);
 text(nt2, width/2+140, height/2);
 let mnt2 = map(nt2,0,100,0,360);
 push();
 translate(width/2,height - 100);
 noStroke();
 fill(90,100,0);
 rect(0,0,100,-mnt2,5);  // draws from bot left to top right
 stroke(200,100,0);
 pop();

}

function resetTime(obj,s) {
    obj.timer = millis();
    obj.counter  = s;
    console.log(s);
}

 function nextInterval(obj,p) {
     // p is a number in milliseconds
     if (millis() - obj.timer > p ) {
        obj.timer = millis();
        obj.counter = obj.counter+1;
     }
     return  obj.counter;
 }

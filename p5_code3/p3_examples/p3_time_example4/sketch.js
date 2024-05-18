

///////////////////////////////////////////
// Exmmple 4: Millis Function with Properties


let t1 = {timer:0,counter:0,period:0};
let t2 = {timer:0,counter:0,period:0};
// let gtime2 = 0;
// let gcount2 =0;

function setup() {
  createCanvas(500,500);
  background(200);
  fill(255,100,0);
  textSize(30);
  angleMode(DEGREES);
  resetTime(t1,0);
  resetTime(t2,0);
  //resetTime(gtime2,gcount2,0);
}


function draw() {
 background(220);

 let nt1 = nextInterval(t1,2000);
 // counts up continusly, based on period
 //console.log(nt1);
 fill(0);
 text(nt1, width/2-160, height/2);
 let mnt1 = map(nt1,0,100,0,360);
 push();
 translate(width/2,height/2);
 rotate(mnt1-90);
 noStroke();
 fill(20);
 ellipse(0,0,50,50);
 fill(90,100,0);
 rect(0,0,200,10,5);
 stroke(200,100,0);
 pop();


 let nt2 = nextInterval(t2,5000);
 // counts up continusly, based on period
// console.log(nt1);
 fill(0);
 text(nt2, width/2+140, height/2);
 let mnt2 = map(nt2,0,100,0,360);
 push();
 translate(width/2,height/2);
 rotate(mnt2-90);
 noStroke();
 // fill(20);
 // ellipse(0,0,80,80);
 fill(90,100,200);
 rect(0,0,150,10,5);
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

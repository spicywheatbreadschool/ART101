///////////////////////////////////////////
// Exmmple 5: Millis Function with Properties with the Date Class.
//go here for more info on Date. 
// https://www.w3schools.com/jsref/jsref_obj_date.asp


var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let t1 = {timer:0,counter:0,period:0,act_timer:0,actflag:0 };
let t2 = {timer:0,counter:0,period:0,act_timer:0,actflag:0 };

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

 let d1 = new Date();
 console.log(d1.getDay());


 textSize(18);
 fill(0);
 let todayis = days[d1.getDay()];
 text(todayis,0, 200);

 if ( d1.getDay() == 3) {
  text("Its Humpday!!", width/2-100, height/2-150);
 }

 nextInterval(t1,3000,1200);  // obj, period time, action time  // watches time
 let nt1 = getIntervalCount(t1);

 if ( checkIntervalAction(t1)) {
  text("Breath...",  width/2-190, height/2+100);
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


 
 nextInterval(t2,10000,2000);
 let nt2 = getIntervalCount(t2);

 if ( checkIntervalAction(t2)) {

  text("Coffee!!", width/2+140, height/2+100);

 }

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

let tempwords = d1.toLocaleString('en-US', { hour12: true , hour: 'numeric' });
var wordArr = tempwords.split(" ");
console.log(wordArr[0]);
console.log(wordArr[1]);
textSize(14);
fill(255,0,0);


text("Today is also " + wordArr[0] + " " + wordArr[1], 20, 50);



}





function resetTime(obj,s) {
    obj.timer = millis();
    obj.counter  = s;
    obj.act_flag = 0;
}

 function nextInterval(obj,p,ap) {
     // p is a number in milliseconds
     if (millis() - obj.timer > p ) {

        obj.timer = millis();
        obj.counter = obj.counter+1;

        obj.act_timer = millis();
        obj.act_flag = 1;

     }

     if ( obj.act_flag == 1 ) {  // on 
       if (millis() - obj.act_timer > ap ) {  // off again 
        obj.act_flag = 0;

       }
     }

     return  obj.counter;
 }


 function  checkIntervalAction(obj){

     if (obj.act_flag == 1 ) {
      return true;
     } else {
      return false;
     }


 }


function getIntervalCount(obj){
   return obj.counter;
}





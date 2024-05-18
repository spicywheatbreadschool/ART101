

///////////////////////////////////////////
//Example 1: Hours, Minutes, Second example with sweeping hands

function setup() {
  createCanvas(500,500);
  background(200);
  fill(255,100,0);
  angleMode(DEGREES);
  textSize(20);
}


function draw() {
background(40);


 // textSize(30);
 fill(0);

 let h = hour();   // 0-23
 let m = minute(); // 0- 59
 let s = second();  // 0-59

console.log("hour " + h);
//console.log("min " + m);
//console.log("sec " + s);

 

 // input, input low range,input high range, scaleoutput low, scaleoutput high
 let mh = map(h,0,24,0,360);
 let mm = map(m,0,59,0,360);
 let ms = map(s,0,59,0,360);

  push();
  translate(width/2,height/2);
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
  fill(90,0,0);
  rect(0,0,200,10,5);
  stroke(200,100,0);
  pop();

 push();

//  translate(width/2,height/2);
//  rotate(ms-90);
//  noStroke();
//  fill(200,0,0);
//  rect(0,0,200,10,5);
//  stroke(200,100,0);
 //line(0,0,0,25);
//translate(200,0);
//line(0,0,0,25);

 pop();

 //text( h, 0, 0);
// text(m, width/2+50, height/2);
text(s, width/2+100, height/2);
 // let mi = millis();
 // text(mi, width/2+150, height/2);
 //console.log(      );


 let mrs = map(s,0,59,0,width);
 let mrm = map(m,0,59,0,width);
 let mrh = map(h,0,23,0,width);


push();

 fill(250,0,100,100);
 translate(width/2,height/2);
 ellipse(0,0,mrm,mrm);
 //fill(250,60,0,100);
 //ellipse(0,0,mrm,mrm);

 pop();

 push();

 fill(250,60,0,100,100);
 translate(width/2,height/2);
 ellipse(0,0,mrs,mrs);
 //fill(250,60,0,100);
 //ellipse(0,0,mrm,mrm);

 pop();


 push();
 translate(width/2,height/2);
 noStroke();
 fill(255);
 for (let i = 0; i < width/2; i++) {
 
  rect(i * 16,0,2,10);


 }
 ellipse(0,0,5,5);

 pop();


//  fill(200,100,0);
//  rect(mrs,0,6,100);
//  fill(200,100,0,100);
//  rect(0,0,mrs,100);

}


// function setup() {
//   createCanvas(500,500);
//   background(20);
//   fill(255);
//
//
//   textSize(40);
// }
//
// function draw() {
//   background(0);
//
//    let h = hour();
//
//    let m = minute();
//
//    let s = second();
//
// // console.log("hour " + h);
// // console.log("min " + m);
// // console.log("sec " + s);
//
// // text( "hour " + h, 100,100);
// // text( "min " + m, 100,200);
// // text( "sec " + s, 100,300);
//
//         // map(inputvalue, low, high, mlow, mhigh);
// let ms = map(s,0,59,0,width);
// let mm = map(m,0,59,0,width);
// let mh = map(h,0,23,0,width);
//
//
//
// rect(0,350,ms,30);
// rect(0,400,mm,30);
// rect(0,450,mh,30);
//
//
//  //ellipse(width/2, height/2, 50, 50);
// }


// basic millis example

let newtime1;
let newtime2;
let count1=0;
let count2=0;

function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
  angleMode(DEGREES);
  console.log(millis());   //counts in millisseconds since you started the program
  newtime1 = millis();  // 0 or 1
  newtime2 = millis();  // 0 or 1
}

function draw() {
    background(50);
    console.log(millis());   //counts in millisseconds since you started the program

  // 2 seconds period
 if ( ( millis()  -  newtime1) >  1000 )  {
   newtime1 = millis();
   console.log(" 2 seconds "  + count1 );
   count1++;
 }


 // 5 seconds period
if ( ( millis()  -  newtime2) >  5000   )  {
    newtime2 = millis();
    console.log(" 10 SECONDS "  + count2 );
    count2++;
}

text(count1, width/2+50, height/2);
let c1 = map(count1,0,200,0,360);
push();
translate(width/2,height/2);
rotate(c1-90);
noStroke();
fill(20);
ellipse(0,0,80,80);
fill(90,100,0);
rect(0,0,200,10,5);
stroke(200,100,0);
pop();


text(count2, width/2+90, height/2);
let c2 = map(count2,0,100,0,360);
push();
translate(width/2,height/2);
rotate(c2-90);
noStroke();
fill(20);
//ellipse(0,0,80,80);
fill(90,100,200);
rect(0,0,150,10,5);
stroke(200,100,0);
pop();


}

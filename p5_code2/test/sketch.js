// in this example all the transform tools  are placed
  // inside the functions, so that the parameters that are passed
  // change the transform, rot and scale 
 

  let counter = 0;

  function setup() {
    createCanvas(500,500);
    background(20);
    fill(255);
    angleMode(DEGREES);
  }
  
  function draw() {
    background(0);
    deathstar(100,300,-45,.75);
    deathstar(350,120,counter,.5);
    spaceBug(color(0,0,random(200)),width/2+30, height/2, -10,0.6);
    spaceBug(color(200,20,20), 100,90,15,1 );
    counter+=.1;
  
  }
  
         //deathstar (x,y,rotate, scale)
  function deathstar(lx,ly,rot,sc) {
  
    push();
    translate(lx,ly);
    rotate(rot);
    scale(sc);
    fill(80);
    ellipse(0,0,200,200);  // anchor
    fill(150);
    ellipse(55,10,50,60);
    fill(255,0,0);
    ellipse(0,-100,5,5);
    pop();
  
  }
  
          //spaceBug (color, x,y,rotate,scale)
  function spaceBug(k,lx,ly,rot,sc) {
    //console.log("toon1");
  
   push();
      translate(lx,ly);
      //rotate(random(10,20));
      rotate(rot);
      scale(sc);
      body(k);
      head(k,20,-15);
      arm(k,-55,20); // left arm
      arm(k,35,20); // right arm
      arm(k,-55,40); // bot left arm
      arm(k,35,40); // bot tight arm
    pop();
  
  }
  
  
  function body(k){
   //console.log("body");
    fill(k);
    //rotate(45);
    rect(0,0,40,80, 15,15,25,25);
  }
  
  function head(c,lx,ly){
  //console.log("head");
  push();
  fill(c);
  translate(lx,ly)
  //head
  ellipse(0,0,40,40);
  //eyes
  fill(0,100,255);
  ellipse(-5,-10,10,10,);
  ellipse(5,-10,10,10,);
  
  pop();
  }
  
  function arm(c,lx,ly){
  //console.log("arms");
  fill(c);
  //rotate(45);
  rect(lx,ly,60,15,10);
  }
  

class Octopi {

  constructor(rootX, rootY, c, oscale) {
    this.colorcount = 0;
    this.rx = rootX;
    this.ry = rootY;
    this.oc = c;
    this.os = oscale;
    this.gmt = 0.0;
    this.tmArr = new Array(8);
    this.tsArr = new Array(8);
    console.log(this.tmArr);
    //setupTMoves();
  }

  update() {

    if (this.colorcount < 0) {
      this.colorcount = 0;
    }

    if (this.colorcount > 255) {
      this.oc = color(random(255), random(255), random(255));
    } else {
      this.oc = color(int(this.colorcount), 0, 0);
    }

  }

  moveupdate(rootX,rootY) {
    this.rx = rootX;
    this.ry = rootY;
    this.colorcount+=.45;
    this.updateTSpeed();
  }

  display() {
    push();
    translate(this.rx, this.ry);
    scale((this.colorcount/150) + this.os);
    this.body(this.oc);
    this.head(this.oc);
    pop();
    this.colorcount-=.40;
  }

  head(c) {
    fill(c);
    ellipse(0, 0, 200, 330);
    let ec = color(0, 0, 255);
    this.eye(-50, -10, ec);
    this.eye(50, -10, ec);
    this.mouth(0, 70, color(50));
  }

  eye(lx,ly, c) {
    fill(c);
    ellipse(lx, ly, 20, 30);
  }

  mouth(lx, ly, c) {
    push();
    translate(lx, ly);
    scale((this.colorcount/90) +.50);
    fill(c);
    ellipse(0, 0, 20, 10);
    pop();
  }

  body(c) {
    fill(c);
    ellipse(0, 100, 180, 90);
    this.updateTMoves();
    this.tentacles(-80, 110, c, 100, .90, 95,  this.tmArr[0]);
    this.tentacles(80, 110, c, 100, .90, -95,  this.tmArr[1]);
    this.tentacles(-60, 125, c, 100, 1.3, 70,  this.tmArr[2]);
    this.tentacles(60, 125, c, 100, 1.5, -70,  this.tmArr[3]);
    this.tentacles(-35, 135, c, 130, 2,   45,  this.tmArr[4]);
    this.tentacles(35, 135, c, 130, 2.1, -55,  this.tmArr[5]);
    this.tentacles(-14, 145, c, 140,2.35, 30,  this.tmArr[6]);
    this.tentacles(14, 145, c, 140, 2.4, -30,  this.tmArr[7]);
  }

  tentacles(lx,ly,c,l,sc,ang,mt) {
    fill(c);
    push();
    translate(lx, ly);
    scale(sc);
    rotate(radians(ang+mt));
    ellipse(0, 0, 20, 25);
    rect(-5, 0, 12, l, 120);
    pop();
  }


  setupTMoves() {

    for ( let i=0; i < tmArr.length; i++) {
      tsArr[i] = random(-5, 5);
      tmArr[i]+=tsArr[i];
    }
  }



  updateTMoves() {

    for ( let i=0; i < this.tmArr.length; i++) {
      let tm = this.tmArr[i];
      if (tm > 15 || tm < -15) {
        this.tsArr[i] = -this.tsArr[i];
      }
      this.tmArr[i]+=this.tsArr[i];
    }

  }

  updateTSpeed() {
    for ( let i=0; i < this.tmArr.length; i++) {
      this.tmArr[i]=0;
      this.tsArr[i] = random(-5, 5);
    }
  }


}

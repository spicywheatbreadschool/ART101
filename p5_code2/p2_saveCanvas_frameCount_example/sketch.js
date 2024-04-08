let recMode = false;

let can;  // create a canvas reference

function setup() {
    can = createCanvas(500, 500);
    background(20);
    fill(255);
    frameRate(30); // slow down the framerate so everything can be drawn. no hurry.
    noLoop();
    // 30 frames   times 10
    console.log(frameCount);
}

function draw() {
    //  start as true until 99
    if (frameCount < 150) {
        console.log("the first act");
        fill(0, 255, 0);
        ellipse(width / 2, height / 3, 80, 80);
        // true between 100 and 199
    } else if (frameCount < 300) {
        console.log("the second act");
        fill(255, 255, 0);
        ellipse(width / 2, height / 3, 80, 80);
        // true once it reaches frame 300
    } else {
        console.log("the third act");
        fill(255, 0, 0);
        ellipse(width / 2, height / 3, 80, 80);

    }

    recordit();

}


/////////////////////// use both keyPressed and recordit ///////////

function keyPressed() {

    if (keyIsPressed === true) {
        let k = key;
        console.log("k is " + k);

        if (k == 's' || k == 'S') {
            console.log("Stopped Recording");
            recMode = false;
            noLoop();
        }

        if (k == ' ') {
            console.log("Start Recording");
            recMode = true;
            loop();
        }
    }
}

function recordit() {  // new version
    if (recMode == true) {
        let ext = nf(frameCount, 4);
        saveCanvas(can, 'frame-' + ext, 'jpg');
        console.log("rec " + ext);
    }
}

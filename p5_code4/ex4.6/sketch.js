
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/

let scribble;
let doit;
// Jpg + gifs
let squidHouse, missile, neighborhood, island, interior, pat, squid2, squid3, krabs;
// Sound effects
let bonk, explode;
let aloha, gator, seaweed, ending;
let krbyptty;
// global manager object
var mgr;
// define your p5.play sprites that you want to use in more that 1 scene.
var squid = [
    //           5        10        15        20
        [4,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,4],
        [2,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,0,0,2],
        [2,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,2,0,2],
        [2,0,2,2,2,2,2,2,0,0,0,2,0,0,0,0,0,0,0,2],
        [2,0,0,0,3,3,1,1,2,0,0,0,3,3,1,1,0,0,0,2], // 5
        [0,0,0,0,3,3,1,1,0,0,0,0,3,3,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0],
        [2,0,0,0,0,0,0,0,2,0,0,2,0,0,0,0,0,0,0,2], // 10
        [2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2],
        [2,0,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,0,2],
        [4,2,2,0,0,0,0,2,0,0,0,0,2,0,0,0,0,2,2,4],
        [4,4,4,2,0,0,2,0,0,0,0,0,0,2,0,0,2,4,4,4],
        [4,4,2,0,0,0,2,0,0,0,0,0,0,2,0,0,0,2,4,4], // 15
        [4,2,0,0,2,2,2,0,0,0,0,0,0,2,2,2,0,0,2,4],
        [4,2,0,2,0,0,2,0,0,0,0,0,0,2,0,0,2,0,2,4],
        [4,2,0,0,0,0,0,2,0,0,0,0,2,0,0,0,0,0,2,4],
        [4,2,0,2,2,2,0,0,2,2,2,2,0,0,2,2,2,0,2,4],
        [4,4,2,4,4,4,2,0,0,0,0,0,0,2,4,4,4,2,4,4], // 20
  ];

function preload() {
    // sound should be loaded so its available for all places.
   bonk = loadSound("assets/bonk.mp3");
   aloha = loadSound("assets/alohaoe.mp3");
   aloha.setVolume(.3);
   gator = loadSound("assets/gator.mp3");
   gator.setVolume(.3);
   seaweed = loadSound("assets/seaweed.mp3");
   seaweed.setVolume(.3);
   ending = loadSound("assets/ending.mp3");
   ending.setVolume(.3);
   explode = loadSound("assets/explosion.mp3");
   explode.setVolume(.2);
   squidHouse = loadImage("assets/squidhouse.webp");
   neighborhood = loadImage('assets/3house.jpg_large');
   interior = loadImage("assets/interior.jpg");
   island = loadImage("assets/island.jpg");
   missile = loadImage("assets/missile_1.gif");
   krbyptty = loadFont("assets/krabbypatty.ttf");
   pat = loadImage("assets/pat.jpg");
   squid2 = loadImage("assets/annoyedSquid.jpg");
   squid3 = loadImage("assets/shockSquid.jpg");
   krabs = loadImage("assets/krabs.webp");
   doit = loadSound("assets/doit.mp3");
   doit.setVolume(.2);
}

function setup() {
    createCanvas(800, 600)
    mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene(patEnter);
    mgr.addScene(glitchNose);
    mgr.addScene(explosion);
    mgr.addScene(about);
    mgr.showScene(intro);
    textFont(krbyptty);
}

function draw()
{

    // passthe current draw function into the SceneManager
    mgr.draw();

}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( intro );
            break;
        case '2':
            mgr.showScene( patEnter );
            break;
        case '3':
            mgr.showScene( glitchNose );
            break;
        case '4':
            mgr.showScene( explosion);
            break;
        case 'h':
            mgr.showScene( about );
            break;
    }
    if(keyCode == 32) {
        mgr.showNextScene();
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}

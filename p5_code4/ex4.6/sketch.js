
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let squidHouse;
let snd1,snd2;

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
   snd2 = loadSound("assets/honk.mp3");
   snd1 = loadSound("assets/alohaoe.mp3");
   squidHouse = loadImage("assets/squidhouse.webp")
}

function setup() {
    createCanvas(800, 600)
    mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (main);
    mgr.addScene (help);
    mgr.showNextScene();

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
            mgr.showScene( main );
            break;
        case '2':
            mgr.showScene( patEnter );
            break;
        case '3':
            mgr.showScene( bigNose );
            break;
        case '4':
            mgr.showScene( )
        case 'h':
            mgr.showScene( help );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}

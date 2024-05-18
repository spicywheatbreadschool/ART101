let curVolume;
let curBarProgress;
let curTime;
let font;
let font2;
let d;
let curSong;
let volume;
let prevHour = -1;
let day;

// Bar parameters for editing
let volHeight = 300;
let durLength = 400;

let albumCovers = [];

let TOD;
let thought;

let sleepArr = [];
let mornArr = [];
let afterArr = [];
let eveningArr = [];
function preload() {
  font = loadFont('assets/BebasNeue-Regular.ttf');
  font2 = loadFont('assets/coolvetica.otf');
  albumCovers[0] = loadImage('assets/foreverstory.png');
  albumCovers[1] = loadImage('assets/ch2ch.jpg');
  albumCovers[2] = loadImage('assets/elecrel.jpeg');
  albumCovers[3] = loadImage('assets/SWAS.jpg');
  albumCovers[4] = loadImage('assets/WTT.jpg');
  albumCovers[5] = loadImage('assets/intlove.jpeg');
  albumCovers[6] = loadImage('assets/swimming.png');
  albumCovers[7] = loadImage('assets/neon.jpeg');
  albumCovers[8] = loadImage('assets/low.webp');
  albumCovers[9] = loadImage('assets/astro.jpg');
}
function setup() {
  createCanvas(600, 800);
  background(124, 154, 222);
  angleMode(DEGREES);
  noStroke();
  textAlign(CENTER);
  d = new Date();
  initSongs();
  setTOD();
  setCurrentSong();
  prevHour = hour();
}
function initSongs() {
  // Initialize songs
  DanceNow = new Song(227, albumCovers[0], "Dance Now (feat. Kenny Mason)", "JID");
  Cheek2Cheek = new Song(353, albumCovers[1], "Cheek to Cheek", "Ella Fitzgerald");
  ElecRel = new Song(243, albumCovers[2], "Electrix Relaxation", "A Tribe Called Quest");
  SWAS = new Song(113, albumCovers[3], "S.W.A.S", "Teen Mortgage");
  WhyI = new Song(213, albumCovers[4], "Why I Love You", "Jay-Z, Kanye West");
  IntLove = new Song(227, albumCovers[5], "International Love (feat. Chris Brown)", "Pitbull");
  ComeDown = new Song(161, albumCovers[6], "Come Back to Earth", "Mac Miller");
  NeonGuts = new Song(258, albumCovers[7], "Neon Guts (feat. Pharrell Williams)", "Lil Uzi Vert");
  CTR = new Song(216, albumCovers[8], "Check the Rhime", "A Tribe Called Quest");
  Skeletons = new Song(145, albumCovers[9], "Skeletons", "Travis Scott");
  // Add songs to respective arrays
  mornArr.push(DanceNow);
  afterArr.push(DanceNow);
  mornArr.push(Cheek2Cheek);
  eveningArr.push(Cheek2Cheek);
  eveningArr.push(ElecRel);
  sleepArr.push(ElecRel);
  afterArr.push(SWAS);
  eveningArr.push(SWAS);
  mornArr.push(WhyI);
  afterArr.push(WhyI);
  sleepArr.push(WhyI);
  mornArr.push(ComeDown);
  sleepArr.push(ComeDown);
  afterArr.push(NeonGuts);
  eveningArr.push(NeonGuts);
  eveningArr.push(CTR);
  sleepArr.push(CTR);
  sleepArr.push(Skeletons);
  eveningArr.push(Skeletons);
  mornArr.push(Skeletons);
}
function draw() {
  setTOD();
  setCurrentSong();
  parseSong(curSong, volume);
  drawSong(curSong);
}
function setCurrentSong() {
  if(prevHour != hour()) {
    switch(TOD) {
      case("SLEEP"):
        background(11, 65, 82);
        curSong = sleepArr[Math.floor(Math.random() * sleepArr.length)];
        volume = 40;
        break;
      case("MORNING"):
        background(235, 213, 155);
        curSong = mornArr[Math.floor(Math.random() * mornArr.length)];
        volume = 80
        break;
      case("AFTERNOON"):
        background(255, 145, 167);
        curSong = afterArr[Math.floor(Math.random() * afterArr.length)];
        volume = 100;
        break;
      case("EVENING"):
        background(85, 70, 125);
        curSong = eveningArr[Math.floor(Math.random() * eveningArr.length)];
        volume = 60;
        break;
    }
    prevHour = hour();
  }
}
function setTOD() {
  // TOD stands for time of day
  day = d.getDay();
  console.log(day);
  let h = hour();
  // Set the TOD for background color
  if(h <= 8) {
    TOD = "SLEEP";
  } else if(h <= 12) {
    TOD = "MORNING";
  } else if(h <= 17) {
    TOD = "AFTERNOON";
  } else {
    TOD = "EVENING";
  }
  console.log("Time of Day: " + TOD);
  // Set the current status based on day of week and TOD
  if(day == 0 || day == 6) {
    // Weekend 
    switch(TOD) {
      case("SLEEP"):
        thought = "ZZZZ";
        break;
      case("MORNING"):
        thought = "Time to lay in bed!";
        break;
      case("AFTERNOON"):
        thought = "Let's go out with friends and grab food :)";
        break;
      case("EVENING"):
        thought = "Get on, let's go play some games!";
        break;
    }
  } else {
    switch(TOD) {
      case("SLEEP"):
        thought = "ZZZZ";
        break;
      case("MORNING"):
        thought = "Grghh... schoool.";
        break;
      case("AFTERNOON"):
        thought = "Gym time, and then some homework.";
        break;
      case("EVENING"):
        thought = "That's enough work!! Let's play some games!!";
        break;
    }
  }
}
function drawSong(song) {
  // Current status
  textSize(24);
  textFont(font2);
  text(thought, 300, 50);
  // "Track Number"
  textSize(60);
  textFont(font);
  text("Track " + hour(), 300, 130)
  // Volume Bar BG & Volume Bar
  fill(0);
  rect(20, 500, 15, -volHeight, 10);
  fill(255);
  // Do this to get the volume bar to round out at the end, while staying flat while rising
  if(second() > 58) {
    rect(20, 500, 15, -curVolume, 10, 10, 10, 10);
  } else {
    rect(20, 500, 15, -curVolume, 10, 10, 0, 0);
  }
  // Song Progress Bar BG & Progress
  fill(0);
  rect(100, 710, durLength, 30);
  fill(255);
  rect(100, 710, curBarProgress, 30);
  // text(minute(), 400, 700);
  textSize(19);
  text(formatTime(curTime), 50, 730);
  text((formatTime(song.len)), 550, 730);
  // Album Cover
  image(song.img, 100, 150, 400, 400);

  // Song Title
  textSize(30);
  text(song.title, 300, 620);
  // Artist
  textSize(36);
  text(song.artist, 300, 670);
}
function formatTime(seconds) {
  // Format time using minutes as well as seconds
  let timeString = "";
  let calc2 = Math.floor(seconds % 60);

  timeString += Math.floor(seconds / 60);
  timeString += ":";
  // If seconds digit in x:xx format is less than 10, add 0 for format
  if(calc2 < 10) {timeString += "0";}
  timeString += calc2;

  return timeString;
}
function parseSong(song, vol) {
  // Round down to remove decimals
  curVolume = map(Math.floor(second()), 0, 59, 0, volHeight * (vol / 100));
  curBarProgress = map(minute() + map(second(), 0, 59.99, 0, 100) / 100, 0, 60, 0, durLength);
  curTime = map(minute() + map(second(), 0, 59.99, 0, 100) / 100, 0, 60, 0, song.len);
}
class Song {

  // Vars
  len; // In seconds
  img; // Album Cover
  title;
  artist;

  constructor(len, img, title, artist) {
    this.len = len;
    this.img = img;
    this.title = title;
    this.artist = artist;
  }

}
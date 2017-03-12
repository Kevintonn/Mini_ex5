var img;
var mBool;
var a;
var r;

function preload() {
  img = loadImage("http://i.imgur.com/TUy5qUo.jpg");
    
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    mBool = 0;
    a = 0;
    r = 0;

}

function draw() {
    background (0);
    r = random(10);
    noCursor();
    
    
    if (a < 250 && mBool == 1) {
        a = a+2/2;
    } else if (a > 250) {
        a = 250;
    } else if (a > 0 && mBool == 0) {
        a = a-3/2;
    }
    
    image(img, mouseX-150, mouseY-180);
    fill (0,255-a-r);
    rect(0, 0, window.innerWidth, window.innerHeight)
    
    fill (0);
    textSize(18);
    text("And death shall have no dominion.", window.innerWidth/2-150, 200);
    text("Dead man naked they shall be one", window.innerWidth/2-150, 230);
    text("With the man in the wind and the west moon;", window.innerWidth/2-150, 260);
    text("When their bones are picked clean and the clean bones gone,", window.innerWidth/2-150, 290);
    text("They shall have stars at elbow and foot;", window.innerWidth/2-150, 320);
    text("Though they go mad they shall be sane,", window.innerWidth/2-150, 350);
    text("Though they sink through the sea they shall rise again;", window.innerWidth/2-150, 380);
    text("Though lovers be lost love shall not; ", window.innerWidth/2-150, 410);
    text("And death shall have no dominion.", window.innerWidth/2-150, 440);
    
    
    
}

function mousePressed() {
  mBool = 1;
}

function mouseReleased() {
  mBool = 0;
}

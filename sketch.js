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
    text("And death shall have no dominion.", mouseX, mouseY);
    text("Dead man naked they shall be one", mouseX, mouseY+30);
    text("With the man in the wind and the west moon;", mouseX, mouseY+60);
    text("When their bones are picked clean and the clean bones gone,", mouseX, mouseY+90);
    text("They shall have stars at elbow and foot;", mouseX, mouseY+120);
    text("Though they go mad they shall be sane,", mouseX, mouseY+150);
    text("Though they sink through the sea they shall rise again;", mouseX, mouseY+180);
    text("Though lovers be lost love shall not; ", mouseX, mouseY+210);
    text("And death shall have no dominion.", mouseX, mouseY+240);
    
    
    
}

function mousePressed() {
  mBool = 1;
}

function mouseReleased() {
  mBool = 0;
}
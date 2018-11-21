//let ninjaCanvas = document.getElementsByClassName("p5Canvas");
let animateAttack = [];
let animateIdle = [];
let animateRun = [];
let animateCurrent = [];
let ninjaCanvas;
let attack;
var frame;
var bgcolor;

function preload() {
    let img;
    for (let index = 1; index < 51; index++) {
        if (index < 10) {
            img = loadImage("NinjaPixelArt/Attack/NinjaAttack_0" + index + ".png");
        } else {
            img = loadImage("NinjaPixelArt/Attack/NinjaAttack_" + index + ".png");
        }
        animateAttack.push(img);
    }
    for (let index = 1; index < 9; index++) {
        img = loadImage("NinjaPixelArt/Idle/NinjaIdle_0" + index + ".png");
        animateIdle.push(img);
    }
    for (let index = 1; index < 9; index++) {
        img = loadImage("NinjaPixelArt/Run/NinjaRun_0" + index + ".png");
        animateRun.push(img);
    }
    //attack = new sprite(1, animateAttack)
}

function setup() {
    ninjaCanvas = createCanvas(100, 100);
    bgcolor = color(50);
    animateCurrent = animateIdle;
    frame = 0;
    frameRate(10);
    ninjaCanvas.mousePressed(changeColorandAnimation);
}
function changeColorandAnimation() {
    //nbgcolor = color(50);
    animateCurrent = animateAttack;
    //frame = frameCount % 50;
}
function draw() {
    background(bgcolor);
    //attack.show;
    //attack.animate;
    image(animateCurrent[frameCount % animateCurrent.length], 25, 25);
    //image(animateCurrent[frameCount], 25, 25);
}





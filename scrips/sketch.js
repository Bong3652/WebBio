document;
let animateAttack = [];
let attack;

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
    //attack = new sprite(1, animateAttack)
}

function setup() {
    createCanvas(200, 200);
}

function draw() {
    background(999);
    //attack.show;
    //attack.animate;
    image(animateAttack[frameCount % 50], 50, 50);
}




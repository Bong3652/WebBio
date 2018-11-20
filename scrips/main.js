let animateAttack = [];

function welcome() {
    alert("Welcome to Yong Kai\'s web")
}
function preload() {
    for (let index = 1; index < 51; index++) {
        if (index < 10) {
            let img = loadImage("NinjaPixelArt/Attack/NinjaAttack_0" + index + ".png");
        } else {
            let img = loadImage("NinjaPixelArt/Attack/NinjaAttack_" + index + ".png");
        }
        animateAttack.push(img);
    }
}
function setup() {
    createCanvas(200, 200);
}
function draw() {
    background();
    image(animateAttack[0], 0, 0);
}
function animate() {
    setup();
    draw();
}
animate();


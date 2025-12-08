function setup() {
    createCanvas(100, 100);
}
function draw() {
    background(225);
    noStroke();
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    rect(40, 40,20,20);
}
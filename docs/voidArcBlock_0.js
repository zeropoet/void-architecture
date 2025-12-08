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
    rect(0, 0,20,20);
    ellipse(25,25,10,10);
}
function setup() {
    createCanvas(600, 600);
}

function draw() {
    noStroke();
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    rect(290, 0,20,20);
}

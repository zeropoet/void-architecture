function setup() {
    createCanvas(1454, 705);
}
function draw() {
    background(225);

    let mouse = createVector(mouseX, mouseY);
    let center = createVector(width / 2, height / 2);
    stroke(200);
    strokeWeight(1);
    line(0, 0, center.x, center.y);
    line(0,0, mouse.x, mouse.y)
    mouse.sub(center);
    stroke(2);
    translate(width / 2, height / 2);
    line(0, 0, mouse.x, mouse.y);

    noStroke();
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    rect(-400, -233,20,-20);
    rect(1, 0,5,-5);
}
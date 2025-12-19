function setup() {
    createCanvas(1454, 705);
}
function draw() {
    background(225);

    let mouse = createVector(mouseX, mouseY);
    let center = createVector(width / 2, height / 2);
    mouse.sub(center);
    mouse.mult(0.8);
    let m = mouse.mag();
    fill(242);
    rect(0,0, m/5,10);

    stroke(200);
    strokeWeight(1);
    line(0, 50, center.x, center.y);
    rect(1, 0,m-2,-1);

    stroke(2);
    translate(width / 2, height / 2);
    line(0, 0, mouse.x, mouse.y);

    noStroke();
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    rect(-400/m, -233,10,-10);
    rect(1, 0,m-2,-1);

}
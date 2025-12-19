let mover;
let m;

function setup() {
    createCanvas(1454, 705);
    mover = new Mover();
}

function draw() {
    background(225);

    mover.update();
    mover.checkEdges();
    mover.show();

    let mouse = createVector(mouseX, mouseY);
    let center = createVector(width / 2, height / 2);
    mouse.sub(center);
    mouse.mult(0.8);
    m = mouse.mag();
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
    if (mouseIsPressed) {m
        fill(0);
    } else {
        fill(255);
    }
    rect(-400/m, -233,10,-10);
    rect(1, 0,m-2,-1);
}

class Mover {
    constructor() {
        this.position = createVector(700, 150);
        this.velocity = createVector(random(0,1), random(0,0));
    }
    update() {
        this.position.add(this.velocity);
        this.acceleration = p5.Vector.random2D();
        this.velocity.add(this.acceleration);
        this.velocity.limit(.15);
        this.position.add(this.velocity);
    }
    show() {
        stroke(0);
        strokeWeight(0);
        fill(0,0,0);
        rect(this.position.x, this.position.y, 5, 5);
    }
    checkEdges() {
        if (this. position.x >width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = width;
        }

        if (this.position.y > height ) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = height;
        }
    }
}
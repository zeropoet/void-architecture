let mover;
let moverGravity;
let moverA;
let moverB;
let m;


function setup() {
    createCanvas(1454, 705);
    mover = new Mover();
    moverGravity = new Mover();
    moverA = new Mover(700, 150, 1);
    moverB = new Mover(400, 30, 1);
}


function draw() {
    background(225);

    mover.checkEdges();
    mover.update();
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
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    rect(-400/m, -233,10,-10);
    rect(1, 0,m-2,-1);

    if (mouseIsPressed) {
        let gravity = createVector(0, -1);
        moverGravity.applyForce(gravity);
    }
    moverGravity.checkEdges();
    moverGravity.update();
    moverGravity.show();
}


class Mover {
    constructor(x, y, mass) {
        this.mass = mass;
        this.position = createVector(x, y);
        this.velocity = createVector(random(0,1), random(0,0));
        this.acceleration = createVector(0,0);
    }
    applyForce(force) {
        let f = p5.Vector.div(force, this.mass);
        this.acceleration.add(f);
    }
    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
        this.acceleration = p5.Vector.random2D();
        this.velocity.add(this.acceleration);
        this.velocity.limit(.15);
        this.position.add(this.velocity);

        let mouse = createVector(mouseX, mouseY);
        let dir = p5.Vector.sub(mouse, this.position);
        dir.normalize();
        dir.mult(0.2);
        this.acceleration = dir;
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
    }
    show() {
        stroke(0);
        strokeWeight(0);
        fill(255,0,0);
        rect(this.position.x, this.position.y, 3, 3);
    }
    checkEdges() {
        if (this.position.x > width) {
            this.position.x = width;
            this.velocity.x *= -1;
        } else if (this.position.x < 0) {
            this.velocity.x *= -1;
            this.position.x = 0;
        }

        if (this.position.y > height ) {
            this.velocity.y *= -1;
            this.position.y = height;
        }
    }

}
let balls = []; //
let bgColor; //

function setup() {
  createCanvas(600, 400);
  bgColor = color(255, 255, 0); // 
}

function draw() {
  background(bgColor);

  // 
  for (let i = balls.length - 1; i >= 0; i--) {
    balls[i].update();
    balls[i].display();
  }
}

function mousePressed() {
  let newBall = new Ball(mouseX, mouseY);
  balls.push(newBall);
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(3, 5)); //
    this.color = color(0, 255, 0); // 
    this.size = random(20, 40); // 
  }

  update() {
    this.pos.add(this.vel);

    // 
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size);
  }
}

// 
function mouseMoved() {
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseY, 0, height, 0, 255);
  let b = map(mouseX + mouseY, 0, width + height, 0, 255);
  bgColor = color(r, g, b);
}

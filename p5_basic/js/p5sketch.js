function setup() {
    createCanvas(700, 600); //sets canvas size width and height
    background(220, 127, 150); //sets background color
}

function draw() {
    fill(140, 0, 140);
    stroke(0)
    strokeWeight(5);

    ellipse(100, 100, 100, 100);

    triangle(300, 200, 260, 300, 340, 300);

    rectMode(CENTER);
    rect(500, 100, 100, 100);

    line(100,500,500,500);
}

function mouseClicked() {
  background(random(255), 127, 150); //changes background color on mouse click
}

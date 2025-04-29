function setup() {
    createCanvas(1050, 500);
    background(255); 
  }
  
  function draw() {
    if (mouseIsPressed) {
      fill(0); 
      noStroke();
      ellipse(mouseX, mouseY, 20, 20); 
    }
  }
  
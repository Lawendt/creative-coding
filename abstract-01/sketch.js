function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(255)
  drawAbstract01()
};

function keyPressed() {
  if (keyCode === ENTER) {
	  clear()
	  drawAbstract01();
	  
  }
}
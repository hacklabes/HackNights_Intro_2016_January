function setup() {
	
  	var myCanvas = createCanvas(window.innerWidth, window.innerHeight);
  	myCanvas.parent('myCanvas');

	noStroke();
	
	textFont("Helvetica");
	textSize(50);
	textAlign(CENTER);

	smooth();
	
	fill(50);


}
var a = 0;

function draw() {
	
	background(255,100);
	var word = "HACKNIGHTS"
	var posX = mouseX + 50 * sin(a);
	var posY = mouseY - 50 * cos(a);
	
	text(word,posX,posY);
	
	a = (a+0.1)%360;
}	



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
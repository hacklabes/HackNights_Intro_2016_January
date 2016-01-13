function setup() {
	
  	var myCanvas = createCanvas(500, 500);
  	myCanvas.parent('myCanvas');
	stroke(0); 
	fill(150);

}

function draw() {
	
	background(255);
	
	//Triangle shape needs 3 points
	//two fixed points in the top	
	triangle(0,0, mouseX, mouseY, 500,0);
	//two fixed point in the bottom 
	triangle(0,500,mouseX, mouseY, 500,500);
	
}	
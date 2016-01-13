//First example
//Basic Shape examples
function setup() {
	
	var myCanvas = createCanvas(500, 500);
	myCanvas.parent('myCanvas');

	stroke(0); 
	fill(150);
}

function draw() {
  	background(255);
		
	strokeWeight(6); //6 pixels for the outline 
	stroke(0,0,0); //Black
	//just one pixel position x,y
	point(10,10);

	fill(255,0,0); //RED
	//ELLIPSE
	//1 pair x,y and width, height
	ellipse(100,100,70,100);
	
	fill(0,0,255);//BLUE
	//RECT
	//1 pair x,y and width, height
	rect(150,150,50,50);


	fill(0, 255,0); //fill color GREEN
	//QUAD
	//needs 4 pairs (x,y) points 
	quad(10,10, 50,30, 60,80, 10,50);
	
	
	//LINE
	//needs two pairs of points
	//two lines crossing the canvas
	line(0,0, 500,500);
	line(0,500, 500,0);

}
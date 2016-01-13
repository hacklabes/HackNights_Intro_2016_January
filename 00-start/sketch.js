//First example
//this is a comment
//the browser will igonore those words

function setup() {
	
  var myCanvas = createCanvas(500, 500);
  myCanvas.parent('myCanvas');
	
  stroke(0); 
  fill(150);
}

function draw() {
  	background(255);
	fill(255,0,0);
	point(10,10);
	ellipse(100,100,70,100);
}
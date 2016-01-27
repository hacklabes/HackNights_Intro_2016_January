//assignment
//do different patterns fixed in the mouse position
// circles moving over circles
// squares moving over circles
// cirlces moving over squares

function setup() {
	var myCanvas = createCanvas(500, 500);
	myCanvas.parent('myCanvas');
	frameRate(24);
	
}

function draw() {
	//backgroud(RED,GREEN,BLUE)
  	background(255,255,255); //background color WHITE
	
	noFill();
	rectMode(CENTER);
	var count = 0;
	while(count < 500){
		ellipse(width/2, height/2, count, count);
		count = count + 5;
	}
	
	count = 0; //needs to ZERO beacuse we're using again
	while(count < mouseX){
		line(count,0, count, height)
		count = count + 3;
	}
	
	count = 0; //needs to ZERO beacuse we're using again
	while(count < mouseY){
		line(0,count, width, count)
		count = count + 3;
	}
  
}


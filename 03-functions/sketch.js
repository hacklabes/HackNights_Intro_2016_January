//This is an empty template

function setup() {
	var myCanvas = createCanvas(500, 500);
	myCanvas.parent('myCanvas');
	frameRate(24);
	
}

function draw() {
	//backgroud(RED,GREEN,BLUE)
  	background(255,255,255); //background color WHITE
	
	drawFace(10,10);
	drawFace(50,100);
	drawFace(200,200);
	drawFace(100,100);

}


function drawFace(posX, posY){
	push(); //push save the syles and the coordinates state
	//head
	ellipse(posX, posY, 100,100);
	//eye1
	fill(0);
	ellipse(posX-12, posY-10, 10,10);
	//eye2
	ellipse(posX+12, posY-10, 10,10);
	noFill();
	//arc needs
	//position, width, height, angle start, angle end
	arc(posX, posY, 50, 50, radians(30), radians(150)); 	
	pop(); // brings back the syle and the coodinates state

}
//This is an empty template

function setup() {
	var myCanvas = createCanvas(500, 500);
	myCanvas.parent('myCanvas');
	frameRate(24);
	
}

function draw() {
	//backgroud(RED,GREEN,BLUE)
  	background(255,255,255); //background color WHITE
	
//	drawFace(50, 100, 30, 0.5);
//	drawFace(200, 200, 45, 1);
//	drawFace(100, 100, -30, 0.3);
//	drawFace(100, 200, -45, 0.2);
	var countX = 0;
	while(countX < width){
		drawFace(countX, 200, 0, 0.5);
		countX = countX + 50;
	}

}


function drawFace(posX, posY, angle, scaleNum){
	push(); //push save the syles and the coordinates state
		//head
	
		translate(posX,posY);
		scale( scaleNum );
		rotate( radians(angle) );
		ellipse(0, 0, 100,100);
		//eye1
		fill(0);
		ellipse(12, -10, 10,10);
		//eye2
		ellipse(-12, -10, 10,10);
		noFill();
		//arc needs
		//position, width, height, angle start, angle end
		arc(0, 0, 50, 50, radians(30), radians(150));
	pop(); // brings back the syle and the coodinates state

}
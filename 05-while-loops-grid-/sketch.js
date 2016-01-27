//This is an empty template

function setup() {
	var myCanvas = createCanvas(500, 500);
	myCanvas.parent('myCanvas');
	frameRate(24);
	
}

function draw() {
	//backgroud(RED,GREEN,BLUE)
  	background(255,255,255); //background color WHITE
	
	var size = 10;
	var stepX = width/size; 
	var stepY = height/size; 
	var countX = 0;
	while(countX < width){
			var countY = 0;
			while(countY < height){
				drawFace(countX, countY, stepX, 0, 'blue');
				countY = countY + stepY;
			}
			countX = countX + stepX;
	}
}



function drawFace(posX, posY,faceWidth, angle, colorName){
	push(); //push save the syles and the coordinates state
		//head
		var scaleNum = faceWidth/100;
		translate(posX,posY);
		scale( scaleNum );
		rotate( radians(angle) );
		ellipse(0, 0, 100,100);
		//eye1
		fill(colorName);
		ellipse(12, -10, 10,10);
		//eye2
		ellipse(-12, -10, 10,10);
		noFill();
		//arc needs
		//position, width, height, angle start, angle end
		arc(0, 0, 50, 50, radians(30), radians(150));
	pop(); // brings back the syle and the coodinates state

}

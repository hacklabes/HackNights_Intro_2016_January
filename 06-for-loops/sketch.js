//This is an empty template

function setup() {
	var myCanvas = createCanvas(500, 500);
	myCanvas.parent('myCanvas');
	frameRate(24);
	
}

function draw() {
	//backgroud(RED,GREEN,BLUE)
  	background(255,255,255); //background color WHITE
	var colors = ['red', 'green', color(100,200,100), color(50,100,50), 'blue', 'violet'];
	
	for(var colorIndex in colors){
		drawFace(colorIndex * 100, 100,  45, 1, colors[colorIndex]);
	}
	
  
}



function drawFace(posX, posY, angle, scaleNum, colorName){
	push(); //push save the syles and the coordinates state
		//head
	
		translate(posX,posY);
		scale( scaleNum );
		rotate( radians(angle) );
		fill(colorName);
		ellipse(0, 0, 100,100);
		//eye1
		fill(255);
		ellipse(12, -10, 10,10);
		//eye2
		ellipse(-12, -10, 10,10);
		noFill();
		//arc needs
		//position, width, height, angle start, angle end
		arc(0, 0, 50, 50, radians(30), radians(150));
	pop(); // brings back the syle and the coodinates state

}

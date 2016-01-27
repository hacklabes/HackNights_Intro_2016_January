var maxCount = 10;
function setup() {
	var myCanvas = createCanvas(500, 500);
	myCanvas.parent('myCanvas');
	frameRate(24);
	
}

function draw() {
	//backgroud(RED,GREEN,BLUE)
  	background(255,255,255); //background color WHITE
	
	var count = 0;
	while(count <width){ //using ABS because maxCount can not be negative
		drawFace(count,100,45,1);
		count = count + abs(maxCount);
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


function keyTyped(){
	if(key === 'a'){
		maxCount = maxCount + 1;
	}else if(key === 's'){
		maxCount = maxCount - 1; //note subtracting -5 can lead to a negative number
	}
	console.log(abs(maxCount));

}
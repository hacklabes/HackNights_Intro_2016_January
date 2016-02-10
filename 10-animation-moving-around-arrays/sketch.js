
var enableSound = false;

var NUM = 10;

var posX = [];
var posY = [];
var stepX = [];
var stepY = [];

function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent('myCanvas');
	frameRate(60);
	textFont("Helvetica");
	textSize(20);
	
	for(var count = 0; count < NUM; count++){
		posX.push(random(width));
		posY.push(random(height));
		stepX.push(10);
		stepY.push(10);
	}
}

function draw() {
	for(var p = 0; p < NUM; p++){
		
		posX[p] = posX[p] + stepX[p];
		if(posX[p] > windowWidth){
			stepX[p] = -stepX[p];
			posX[p] = windowWidth;
		}
		if(posX[p] < 0){
			stepX[p] = -stepX;
			posX[p] = 0;
		}
		posY[p] = posY[p] + stepY[p];
		if(posY > windowHeight){
			stepY[p] = -stepY[p];
			posY[p] = windowHeight;
		}
		if(posY[p] < 0){
			stepY[p] = -stepY[p];
			posY[p] = 0;
		}

		background(255,255,255); //background color WHITE
		drawFace(posX[p],posY[p], 0,1);
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
	if(key === 's'){// if you press space go to next patern
		enableSound = !enableSound;
		if(enableSound === true){
			osc.start();
		}else{
			osc.stop();
		}
	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

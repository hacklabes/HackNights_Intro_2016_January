
var enableSound = false;

var NUM = 10;

var posX = [];
var posY = [];
var diam = [];
var stepX = [];
var stepY = [];

function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent('myCanvas');
	frameRate(60);
	textFont("Helvetica");
	textSize(20);
	
	for(var p = 0; p < NUM; p++){
		posX.push(random(0,width));
		posY.push(random(0,height));
		stepX.push(1+random(-5,5));
		stepY.push(1+random(-5,5));
		diam.push(0.5 + random(0,1));
	}
}

function draw() {
	background(255,255,255); //background color WHITE

	for(var p = 0; p < NUM; p++){
		posX[p] = posX[p] + stepX[p];
		if(posX[p] > windowWidth){
			stepX[p] = -stepX[p];
			posX[p] = windowWidth;
		}
		if(posX[p] < 0){
			stepX[p] = -stepX[p];
			posX[p] = 0;
		}
		posY[p] = posY[p] + stepY[p];
		if(posY[p] > windowHeight){
			stepY[p] = -stepY[p];
			posY[p] = windowHeight;
		}
		if(posY[p] < 0){
			stepY[p] = -stepY[p];
			posY[p] = 0;
		}
		drawFace(posX[p],posY[p],0, diam[p]);
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

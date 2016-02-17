
var enableSound = false;

var NUM = 100;

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
	
	for(var p = 0; p < NUM; p++){
		posX.push(random(0,width));
		posY.push(random(0,height));
		stepX.push(1+random(-5,5));
		stepY.push(1+random(-5,5));
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
		push();
		noFill();
		for(var p2 = 0; p2 < NUM; p2++){
			if(p !== p2){
				if( dist(posX[p], posY[p], posX[p2], posY[p2]) < 150){
					strokeWeight(0.5);
					//ellipseMode(CORNERS); 
					//ellipse(posX[p], posY[p], posX[p2], posY[p2])
					line(posX[p], posY[p], posX[p2], posY[p2]);	
				}
			}
		}
		pop();
		fill(0);
		ellipse(posX[p],posY[p],10,10);
	}
	
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

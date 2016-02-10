
var enableSound = false;
var stepY = 1.05;
var posY = 1;
var mySound;

function preload() {
  mySound = loadSound('drop.wav');
}

function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent('myCanvas');
	frameRate(60);
	textFont("Helvetica");
	textSize(20);
	

}

function draw() {
	
	posY = posY*stepY;
	if(posY > windowHeight){
		stepY = -stepY;
		posY = windowHeight;
		mySound.play();

	}
	if(posY < 0){
		stepY = -stepY;
		posY = 1;
		mySound.play();
	}
	
  	background(255,255,255); //background color WHITE
	
	if(posY < 10){
		drawFace(width/2,posY, 0,posY/10);
	}else{
		drawFace(width/2,posY, 0,1);
	}
	fill(255,0,0);
	text("posY: " + posY, 10,70);


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

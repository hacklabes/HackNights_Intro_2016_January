
var enableSound = false;
var stepX = 10;
var stepY = 10;
var posX = 0;
var posY = 0;

var sounds = []; 

function preload(){
	sounds[0] = loadSound('audio1.wav');	
	sounds[1] = loadSound('audio2.wav');	
	sounds[2] = loadSound('audio3.wav');	
	sounds[3] = loadSound('audio4.wav');	
}

function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent('myCanvas');
	frameRate(60);
	textFont("Helvetica");
	textSize(20);
	

}

function draw() {
	posX = posX + stepX;
	if(posX > windowWidth){
		stepX = -stepX;
		posX = windowWidth;
		sounds[0].play();
	}
	if(posX < 0){
		stepX = -stepX;
		posX = 0;
		sounds[1].play();

	}
	posY = posY + stepY;
	if(posY > windowHeight){
		stepY = -stepY;
		posY = windowHeight;
		sounds[2].play();

	}
	if(posY < 0){
		stepY = -stepY;
		posY = 0;
		sounds[3].play();

	}
	
  	background(255,255,255); //background color WHITE
	drawFace(posX,posY, 0,1);
	
	fill(255,0,0);
	text("posX: " + posX, 10,50);
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

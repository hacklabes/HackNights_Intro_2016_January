
var countAnimation = 0;
var enableSound = false;
var step = 10;
var osc;


function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent('myCanvas');
	frameRate(24);
	textFont("Helvetica");
	textSize(20);
	
	
	//crazy sound functions, 
	osc = new p5.SinOsc(); 
	osc.amp(.5);

}

function draw() {
	countAnimation = countAnimation + step;
	if(countAnimation > 360 || countAnimation < 0){
		step = -step;
	}

	
  	background(255,255,255); //background color WHITE
	drawFace(mouseX,mouseY, countAnimation,countAnimation/360);
	
	fill(255,0,0);
	text(countAnimation, 10,50);
	
	if(enableSound){
    	var freqValue = midiToFreq(countAnimation);
    	osc.freq(freqValue);		
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

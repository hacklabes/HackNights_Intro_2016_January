var NUM_PATTERNS = 3;
var pattern = 0; //variable
var mousePattern = 0; //variable
var enableRotate = false;

function setup() {
	var myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent('myCanvas');
	frameRate(24);
	textFont("Helvetica");
	textSize(20);

}

function draw() {
	//backgroud(RED,GREEN,BLUE)
  	background(255,255,255); //background color WHITE
	

	var count = 0;
    noFill();

	push();
		rectMode(CENTER);
		translate(width/2, height/2);
		var ang = 0;
		if(enableRotate === true){
			ang = radians(frameCount%360);
			rotate(ang);
		}
		while(count < windowWidth){
			push();
				if(enableRotate == true){			
					translate(50*sin(ang),50*sin(ang));
				}
				if(pattern === 0){
						ellipse(0,0, count, count);
				}else if(pattern === 1){
					rect(0, 0, count, count);
				}else if(pattern === 2){
					triangle(count/2, count*sqrt(3)/6, -count/2, count*sqrt(3)/6, 0, -count*sqrt(3)/3);
				}
			pop();
			count = count + 8;
		}
	pop();
	rectMode(CENTER);
	var count = 0;
	while(count < windowHeight){
		push();
			translate(mouseX,mouseY);
			if(mousePattern === 0){
				ellipse(0,0, count, count);
			}else if(mousePattern === 1){
				rect(0, 0, count, count);
			}else if(mousePattern === 2){
				triangle(count/2, count*sqrt(3)/6, -count/2, count*sqrt(3)/6, 0, -count*sqrt(3)/3);
			}
		pop();
		count = count + 10;
	}
	
	fill(255,0,0);
	
	text("r - rotate\nn - fixed pattern\nm - mouse pattern ", 12, 60);
	
	
	
}

function keyTyped(){
	if(key === 'n'){// if you press space go to next patern
		//go to the next pattern
		pattern = (pattern + 1)%NUM_PATTERNS; //adds one and make sure it's always smaller than MAX NUM PATTERNS
	}else if(key === 'r'){
		enableRotate = !enableRotate;
	}else if(key === 'm'){
		mousePattern = (mousePattern + 1)%NUM_PATTERNS; //adds one and make sure it's always smaller than MAX NUM PATTERNS

	}
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  fill(255,0,0); 	
 text(windowWidth , 12, windowHeight - 100);
}
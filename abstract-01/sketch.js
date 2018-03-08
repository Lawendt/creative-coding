var currentType = 0;
var maxType = 4;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background(255)
  Draw();
};

function keyPressed() {
  if (keyCode === UP_ARROW) {
	 currentType+=1;
	 currentType = currentType == maxType ? 0 : currentType;
  } else if (keyCode === DOWN_ARROW) {
	   currentType-=1;
	 currentType = currentType < 0 ? maxType-1 : currentType;
  }
}

var lastTimeTouch = 0;
var threshold = 200;
function touchStarted() {
	lastTimeTouch = millis() + threshold;
}

function touchEnded() {
	var mil = millis();
	if( mil < lastTimeTouch) {
		Draw();
	}
}


function mousePressed(){
 if (mouseButton === LEFT) { 
	Draw();
 } 
}

function Draw(){
 clear()
 if(currentType == 0) {
	DrawAbstract01();
 } else if(currentType == 1) {
	DrawAbstract02();
 } else if(currentType == 2) {
	DrawAbstract03();
 } else if(currentType == 3) {
	DrawAbstract04();
 }

}

function DrawAbstract01() {
    DrawAbstract(undefined);
}

function DrawAbstract02() {
    DrawAbstract({'minElements' : 10, 'maxElements': 100});
}

function DrawAbstract03() {
    DrawAbstract({'minElements' : 10, 'maxElements': 100, 'minSize' : 0.5, 'maxSize' : 25});
}

function DrawAbstract04() {
    DrawAbstract({'minElements' : 100, 'maxElements': 1000, 'minSize' : 0.5, 'maxSize' : 25});
}

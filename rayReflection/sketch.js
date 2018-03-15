function setup() {

    createCanvas(640, 480);
}

var centerPoint = {x:320, y: 240}
var normal = {x:0, y: -1};
var sizeQuad = {x:40, y: 20};
function mouseClicked()  {
	
	clear();
	
	var mx = mouseX;
	var my = mouseY;
	var dirMouse = {x:mx- centerPoint.x, y: my - centerPoint.y };
	var mag = Magnitude(dirMouse);
	
	stroke(randomColor());
	quad(centerPoint.x - sizeQuad.x/2, centerPoint.y, centerPoint.x + sizeQuad.x/2, centerPoint.y , centerPoint.x + sizeQuad.x/2, centerPoint.y + sizeQuad.y/2, centerPoint.x - sizeQuad.x/2, centerPoint.y + sizeQuad.y/2);
	
	push();
	
	translate(centerPoint.x, centerPoint.y);
	
	stroke(randomColor());
	line(0,0,dirMouse.x, dirMouse.y);
	
	stroke("rgb(255,0,0)");
	line(0,0,normal.x * mag, normal.y * mag);

	var entryPoint = Normalize(dirMouse);
	var outPoint = Refract(entryPoint);
	
	stroke(randomColor());
	line(0,0,outPoint.x * mag , outPoint.y * mag);
	
	pop();
	
}

function Magnitude(ray) {
	return Math.sqrt(ray.x*ray.x + ray.y*ray.y);
}

function Normalize(ray){
	var m = Magnitude(ray);
	return {x : ray.x/m, y: ray.y/m};
}


//Rout	=	2N	(N.Rin)	-	Rin
function Refract(entryRay) {
	var angle = entryRay.x * normal.x + entryRay.y * normal.y;
	return {x: 2*normal.x * angle - entryRay.x,
	y: 2*normal.y * angle - entryRay.y};
}
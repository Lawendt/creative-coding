function setup() {

    createCanvas(640, 480);
}

var centerPoint = {x:320, y: 240}
var normal = {x:0, y: -1};
var sizeQuad = {x:40, y: 20};
var n1 = 1.3, n2 = 0.8;

function mouseClicked()  {
	
	clear();
	n1 = document.getElementById("n1").value;
	n2 = document.getElementById("n2").value;
	
	var mx = mouseX;
	var my = mouseY;
	// Mouse to CenterPoint
	var dirMouse = {x:centerPoint.x - mx, y: centerPoint.y - my};
	var mag = Magnitude(dirMouse);
	
	stroke(randomColor());
	//
	quad(centerPoint.x - sizeQuad.x/2, centerPoint.y, centerPoint.x + sizeQuad.x/2, centerPoint.y , centerPoint.x + sizeQuad.x/2, centerPoint.y + sizeQuad.y/2, centerPoint.x - sizeQuad.x/2, centerPoint.y + sizeQuad.y/2);
	
	push();
	
	translate(centerPoint.x, centerPoint.y);
	
	stroke("rgb(0,0,0)");
	line(0,0,-dirMouse.x, -dirMouse.y);
	
	stroke("rgb(255,0,0)");
	line(0,0,normal.x * mag, normal.y * mag);

	var entryPoint = Normalize(dirMouse);
	var reflectedPoint = Reflection(entryPoint);
	
	stroke(randomColor());
	line(0,0,reflectedPoint.x * mag , reflectedPoint.y * mag);
	
	var refractPoint = Refract(entryPoint, n1, n2);
	
	stroke(randomColor());
	line(0,0,refractPoint.x * mag , refractPoint.y * mag);
	pop();
	
}

function Magnitude(ray) {
	return Math.sqrt(ray.x*ray.x + ray.y*ray.y);
}

function Normalize(ray){
	var m = Magnitude(ray);
	return {x : ray.x/m, y: ray.y/m};
}

function dotProduct(v1, v2) {
	return v1.x * v2.x + v1.y * v2.y;
}
function multiplyVectorByExpo(vector, num) {
	return {x : vector.x*num, y: vector.y*num}
}

function vectorProduct(v1, v2){
	if(v1.z) {
	}
	else {
	}
	throw("not implemented");
}

/*
cos1 = -normal * entry
vReflect = 1 + 2*cos1*n;
sin1 = sqrt(1-(cos1)^2);
sin2 = n1/n2*sin1;
sin2 = (n1/n2)*sqrt(1-(cos1)^2);
cos2 = sqrt(1 - (sin2)^2);
cos2 = sqrt(1- (n1/n2)^2*(1-(cos1)^2))

vRefraction = (n1/n2)*entry+((n1/n2)*cos1 - cos2)*normal;
r = n1/n2
vRefraction = r*entry + (r*cos1 - sqrt(1-r^2*(1-cos1^2)
*/
function Refract(entryRay, n1, n2) {
var cos1 = -1 * dotProduct(entryRay, normal);
var vReflec = {x: 1 + 2 * cos1 * normal.x, y: 1 + 2 * cos1 * normal.y};
var r = n1/n2;
var re = multiplyVectorByExpo(entryRay, r);
var cos2 = Math.sqrt(1-(r*r)*(1-(cos1*cos1))); 
var refractVector = { x: re.x + (r * cos1 - cos2) * normal.x,
y : re.y + (r * cos1 - cos2) * normal.y};
return refractVector;
}

/*
Rout	=	2N	(N.Rin) - Rin
entry ray should be inverted
*/
function Reflection(entryRay) {
	var angle = -1 * dotProduct(entryRay, normal);
	return {x: 2*normal.x * angle + entryRay.x,
	y : 2*normal.y * angle + entryRay.y};
}
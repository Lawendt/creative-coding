var WIDTH = 640;
var HEIGHT = 480
var numberOfColors = 3;
var minElements = 3;
var maxElements = 10;
var maxSize = 100
var minSize = 10;
var lineMean = 3;
var lineSD = 1;
var fillEnabled = true;
var strokeEnabled = false;
var types = [];


function DrawAbstract(options) {
    if (options != undefined) {
        WIDTH = options['width'] === undefined ? 640 : options['width'];
        HEIGHT = options['height'] === undefined ? 480 : options['height'];
        numberOfColors = options['numberOfColors'] === undefined ? 3 : options['numberOfColors'];
        minElements = options['minElements'] === undefined ? 3 : options['minElements'];
        maxElements = options['maxElements'] === undefined ? 10 : options['maxElements'];
        maxSize = options['maxSize'] === undefined ? 100 : options['maxSize'];
		 maxSize = options['minSize'] === undefined ? 10 : options['minSize'];
        lineMean = options['lineMean'] === undefined ? 3 : options['lineMean'];
        lineSD = options['lineSD'] === undefined ? 1 : options['lineSD'];
        fillEnabled = options['fillEnabled'] === undefined ? fillEnabled : options['fillEnabled'];
        strokeEnabled = options['strokeEnabled'] === undefined ? strokeEnabled : options['strokeEnabled'];
    }

    drawAbstract();
}

function drawAbstract() {
    colors = []
    for (var i = 0; i < numberOfColors; i++) {
        colors[i] = randomColor();
    }

    var nElements = random(minElements, maxElements);

    for (var i = 0; i < nElements; i++) {
        var type = random(types);
        if (fillEnabled) {
            fill(random(colors))
        }
        else {
            fill('rgba(0,0,0,0)')
        }

        if (strokeEnabled) {
            stroke(random(colors))
        }
        else {
            stroke('rgba(0,0,0,0)')
        }

        type(colors);


    }
}

function drawEllipse(colors) {
    ellipse(
        randomGaussian(WIDTH / 2, WIDTH / 6),
        randomGaussian(HEIGHT / 2, HEIGHT / 6),
        random(minSize, maxSize),
        random(minSize, maxSize));
}
types.push(drawEllipse);

function drawCircle(colors) {
    ellipse(
        randomGaussian(WIDTH / 2, WIDTH / 6),
        randomGaussian(HEIGHT / 2, HEIGHT / 6),
        random(minSize, maxSize));
}
types.push(drawCircle);

function drawLine(colors) {
    strokeWeight(randomGaussian(lineMean, lineSD));

    stroke(random(colors))

    line(
        randomGaussian(WIDTH / 2, WIDTH / 6),
        randomGaussian(HEIGHT / 2, HEIGHT / 6),
        randomGaussian(WIDTH / 2, WIDTH / 6),
        randomGaussian(HEIGHT / 2, HEIGHT / 6))
}

types.push(drawLine);
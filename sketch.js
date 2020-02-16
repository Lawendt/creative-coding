function setup() {
    GoToAbstract01(); // OVERRIDE THIS PAGE FOR NOW

    createCanvas(640, 480);
    button = createButton('Abstract 01');
    button.position(30, 30);
    button.mousePressed(GoToAbstract01);
    // Draw Abstract 01
    push();
    translate(100, 0);
    scale(0.25,0.25);
    DrawAbstract01()
    pop();

  

}

function GoToAbstract01() {
    window.location.href = "./abstract";
}

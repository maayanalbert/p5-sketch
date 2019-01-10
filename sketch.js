function setup() {
    createCanvas(200, 20);
    background(220);
    text("p5.js vers 0.5.12 test.", 10, 15);
    createDiv("p5.dom.js library is loaded.");
    createDiv("Listen for 2 second tone to confirm p5.sound.js is loaded.");
    osc = new p5.TriOsc();
    osc.freq(880.0);
    osc.amp(0.1);
    osc.start();
}

function draw() {
    if (millis() > 2000) {
        osc.stop();
        noLoop();
    }
}

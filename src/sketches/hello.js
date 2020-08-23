export default function hello(p) {
    let x = 0;
    let y = 0;
    let z = 0;
    let noiseScale = 0.05;

    p.setup = function() {
        p.createCanvas(p.windowWidth*0.8, p.windowHeight*0.8);
        p.background(255, 255, 255);
        p.textSize(25)
        p.textAlign(p.CENTER)
    }

    p.draw = function() {
        x += noiseScale;
        y += noiseScale;
        z += noiseScale;

        let r = p.noise(x) * 255;
        let g = p.noise(x, y) * 255;
        let b = p.noise(x, y, z) * 255;
        p.fill(r, g, b);
        p.text("Hello World", p.width/2, p.height/2);
    }
}
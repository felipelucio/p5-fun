export default function line(p) {
    p.setup = function() {
        p.createCanvas(p.windowWidth*0.8, p.windowHeight*0.8);
        p.background(125);
    }

    p.draw = function() {
        p.stroke(0);
        p.line(p.width/2, p.height/2, p.mouseX, p.mouseY)
    }
}
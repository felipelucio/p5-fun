import p5 from '../node_modules/p5/lib/p5';
// import '../node_modules/p5/lib/addons/p5.sound';

//sketeches
import hello from './sketches/hello';
import line from './sketches/line';

const sketches = {
    hello,
    line
};

window.addEventListener('load', ev => {
    
    const container = document.getElementById('container');
    var p5_instance = null;
    
    function selectSketch(name) {
        if (p5_instance) {
            console.log('removing');
            p5_instance.remove();
            p5_instance = null;
        }
    
        if (sketches.hasOwnProperty(name)) {
            p5_instance = new p5(sketches[name]);
        }
    }
    
    // default sketch
    selectSketch('hello');
    
    // MENU SKETCH SELECT
    const menu_select = document.getElementById('sketch-select');
    Object.keys(sketches).forEach(key => {
        let option = document.createElement('option');
        option.value = key;
        option.innerText = key;
        menu_select.add(option);
    });
    menu_select.appendChild
    menu_select.addEventListener('change', (ev) => {
        ev.preventDefault();
        selectSketch(ev.target.value);
    })
    

})    

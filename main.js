const DEFAULT_COLOR = '#000000'
const DEFAULT_SIZE = 16;


let mouseDown = false;
let eraser = false;
let color = DEFAULT_COLOR;

function loadGrid(grid_size) {
    const container = document.querySelector('#container');
    // Creates all divs based on current grid size
    for (let i = 0; i < grid_size; i++) {
        const content = document.createElement('div');
        content.classList.add('child');
        container.appendChild(content);
        for (let j = 0; j < grid_size; j++) {
            const new_content = document.createElement('div');
            new_content.classList.add('child1');
            // Sets up listeners to know when conditions are met to draw
            new_content.addEventListener('mousedown', event => { mouseDown = true; })
            new_content.addEventListener('mouseup', event => { mouseDown = false; })
            new_content.addEventListener('mouseover', highlight);
            content.appendChild(new_content);
        }
    }
}

// If eraser is toggled, will change div color to white instead of selected color
function toggleEraser() {
    eraser = !eraser;
    if (eraser) {
        document.getElementById('eraser').innerHTML = 'Eraser On';
        color = '#fefefe';
    } else {
        document.getElementById('eraser').innerHTML = 'Eraser Off';
        color = document.getElementById('colorpicker').value;
    }
}

// Draws on divs
function highlight(e) {
    if (e.type === 'mouseover' && mouseDown)
    e.target.style.backgroundColor = color;
}

// Grabs new color info and updates color
function changeColor(new_color) {
    color = new_color;
    document.getElementById('color-button').style.color = color;
}

// Resets everything to default
function reset(size) {
    if (size > 100 || size < 2) {
        alert('Grid cannot be more than 100x100 and less than 2x2');
        size = 16;
    }
    document.getElementById('container').innerHTML = '';
    document.getElementById('grid-size').innerHTML = size + ' x ' + size;
    changeColor(DEFAULT_COLOR);
    loadGrid(size);
}

window.onload = () => {
    loadGrid(DEFAULT_SIZE);
}
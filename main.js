const DEFAULT_COLOR = '#000000'
const DEFAULT_SIZE = 16;


let mouseDown = false;
let eraser = false;
let color = DEFAULT_COLOR;

function loadGrid(grid_size) {
    const container = document.querySelector('#container');

    for (let i = 0; i < grid_size; i++) {
        const content = document.createElement('div');
        content.classList.add('child');
        container.appendChild(content);
        for (let j = 0; j < grid_size; j++) {
            const new_content = document.createElement('div');
            new_content.classList.add('child1');
            new_content.addEventListener('mousedown', event => { mouseDown = true; })
            new_content.addEventListener('mouseup', event => { mouseDown = false; })
            new_content.addEventListener('mouseover', highlight);
            content.appendChild(new_content);
        }
    }
}

function toggleEraser() {
    eraser = !eraser;
    if (eraser) {
        document.getElementById('eraser').innerHTML = 'Eraser On';
        color = '#fefefe';
    } else {
        document.getElementById('eraser').innerHTML = 'Eraser Off';
        color = DEFAULT_COLOR;
    }
}
function highlight(e) {
    if (e.type === 'mouseover' && mouseDown)
    e.target.style.backgroundColor = color;
}

function reset(size) {
    const parent = document.getElementById('container');
    parent.innerHTML = '';
    loadGrid(size);
}

window.onload = () => {
    loadGrid(DEFAULT_SIZE);
}


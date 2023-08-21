const DEFAULT_COLOR = '#000000'

function loadGrid() {
    const container = document.querySelector('#container');

    for (let i = 0; i < 16; i++) {
        const content = document.createElement('div');
        content.classList.add('child');
        container.appendChild(content);
        for (let j = 0; j < 16; j++) {
            const new_content = document.createElement('div');
            new_content.classList.add('child1');
            new_content.addEventListener('mousedown', highlight);
            content.appendChild(new_content);
        }
    }
}

function highlight(e) {
    e.target.style.backgroundColor = DEFAULT_COLOR;
}

window.onload = () => {
    loadGrid();
}

function reset() {
    const parent = document.getElementById('container');
    parent.innerHTML = '';
    loadGrid();
}
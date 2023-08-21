function addDiv() {
    const container = document.querySelector('#container');

    for (let i = 0; i < 16; i++) {
        const content = document.createElement('div');
        content.classList.add('child');
        container.appendChild(content);
        for (let j = 0; j < 16; j++) {
            const new_content = document.createElement('div');
            new_content.classList.add('child1');
            content.appendChild(new_content);
        }
    }

}

window.onload = () => {
    addDiv();
}
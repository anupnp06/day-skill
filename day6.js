
const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];

function createColorOptions() {
    const colorOptionsContainer = document.getElementById('color-options');

    colors.forEach(color => {
        const div = document.createElement('div');
        div.classList.add('color-option');
        div.style.backgroundColor = color;
        div.addEventListener('click', () => {
            changeBackgroundColor(color);
            removeBorder();
            div.style.border = '2px solid #000';
        });
        colorOptionsContainer.appendChild(div);
    });
}6

function changeBackgroundColor(color) {
    const mainContent = document.getElementById('main-content');
    mainContent.style.backgroundColor = color;
}

function removeBorder() {
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
        option.style.border = 'none';
    });
}

createColorOptions();

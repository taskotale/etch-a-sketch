const gridContainer = document.querySelector('#grid-container');

let numColumns = 20;

function getGridSize(number) {
    return Math.pow(number, 2)
};

function createGrid(boxNum) {
    for (i = 0; i < boxNum; i++) {
        const box = document.createElement('div');
        box.className = `box ${i}`;
        // box.style.backgroundColor = 'black';
        gridContainer.appendChild(box);
    }
}

createGrid(getGridSize(numColumns));

// change grid size after user selection

const columnNumberSlider = document.querySelector('#column-number-range');
let columnSelection = '--columnSelection';

function deleteOldGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }
}

columnNumberSlider.addEventListener('change', e => {
    deleteOldGrid();
    numColumns = e.target.value;
    document.documentElement.style.setProperty(columnSelection, numColumns)
    createGrid(getGridSize(numColumns));
});

//drawing function

let mouseIsDown = false
gridContainer.addEventListener('pointerdown', () => {
    mouseIsDown = true;
})
window.addEventListener('pointerup', () => { mouseIsDown = false })

gridContainer.addEventListener('pointermove', (e) => {
    if (mouseIsDown) {
        setType(e)
    }
})

const grayscale = (e) => {
    e.target.style.opacity -= "-0.1"
    e.target.style.backgroundColor = 'black'
}
const black = (e) => {
    e.target.style.opacity = "1"
    e.target.style.backgroundColor = 'black'
}

const rainbow = (e) => {
    const randomColor = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomColor(0, 255);
    const g = randomColor(0, 255);
    const b = randomColor(0, 255);
    const rgb = `rgb(${r},${g},${b})`;
    e.target.style.backgroundColor = rgb;
    e.target.style.opacity = "1"
}

const clear = (e) => {
    e.target.style.backgroundColor = 'antiquewhite';
    e.target.style.opacity = "1"
}

let setType = grayscale;

document.querySelector('#black').addEventListener('click', _ => setType = black)
document.querySelector('#grayscale').addEventListener('click', _ => setType = grayscale)
document.querySelector('#rainbow').addEventListener('click', _ => setType = rainbow)
document.querySelector('#clear').addEventListener('click', _ => setType = clear)

document.querySelector('#clean').addEventListener('click', _ => { 
    deleteOldGrid();
    createGrid(getGridSize(numColumns))
})






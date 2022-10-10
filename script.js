const gridContainer = document.querySelector('#grid-container');

const numColumns = 16;
const gridSize = Math.pow(numColumns,2);

function createGrid (boxNum) {
    for (i=0; i<boxNum; i++) {
    const box = document.createElement('div');
    box.className = "box";
    gridContainer.appendChild(box);
    }
}
createGrid(gridSize);


const container = document.querySelector('.container')
const gridButton = document.querySelector('.grid-button')

let gridSize =  4

const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')


     for (let j = 0; j < gridSize; j++) {
         const column = document.createElement('div')
         column.classList.add('column-row')
         column.addEventListener('mouseenter',() =>
         column.style.backgroundColor = 'black')
         row.appendChild(column)
     }   
     container.appendChild(row)
    }
}

createGrid(gridSize)

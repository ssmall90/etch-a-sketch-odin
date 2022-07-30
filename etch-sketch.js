const container = document.querySelector('.container')
const gridButton = document.querySelector('.grid-button')

let gridSize = 5

const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div')
        row.classList.add('grid-row')


     for (let j = 0; j < gridSize; j++) {
        const flexSize = 500 / gridSize
         const column = document.createElement('div')
         column.classList.add('column-row')
         column.addEventListener('mouseenter',() =>
         column.style.backgroundColor = 'blue')
         column.style.width = `${flexSize}px`
         column.style.height = `${flexSize}px`
         row.appendChild(column)
         column.addEventListener('click', () => 
         column.style.backgroundColor = 'white'
         )
     }   
     container.appendChild(row)
    }
}

gridButton.addEventListener('click', () => {
    let userSize = Number(prompt('choose the dimension of your grid'))
    while (userSize > 100){
        userSize = Number(prompt('Choose a number smaller than 100'))
    }
    container.replaceChildren()
    createGrid(userSize)
})

createGrid(gridSize)

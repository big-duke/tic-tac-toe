export const makeMove = (state, key) => {

    let newGridData = updateGrid(state, key);
    const nextMark = getNextMark(state)
    const status = getGameStatus(newGridData)



    const newState = {
        gridData: newGridData,
        mark: nextMark,
        status
    }


    return newState
}


const updateGrid = ({ gridData, mark }, key) => {
    const idx = gridData.findIndex(element => element.key === key);
    const newGridData = [...gridData]
    newGridData[idx] = { key, mark }
    return newGridData
}

const getNextMark = ({ mark }) => mark === 'X' ? 'O' : 'X'



const getGameStatus = (gridData) => {

    for (let i = 0; i < winningCombos.length; i++) {

        const [a, b, c] = winningCombos[i];

        if (gridData[a].mark === gridData[b].mark && gridData[b].mark === gridData[c].mark && gridData[a].mark !== '') {
            return 'win'
        }

    }


    if (typeof gridData.find(element => element.mark === '') == 'undefined') {
        return 'draw'

    }
    return 'game'
}
const calcWinningCombos = () => {
    let SIZE = 3 // grid dimension
    let winCombo = []
    var winDiagonal1 = [], winDiagonal2 = []
    for (let i = 0; i < SIZE; i++) {

        let winColumn = [], winRow = []

        for (let j = 0; j < SIZE; j++) {
            // win by column
            let numColumn = i + SIZE * j
            winColumn.push(numColumn)
            // win by row
            let numRow = i * SIZE + j
            winRow.push(numRow)
        }

        winCombo.push(winColumn)
        winCombo.push(winRow)

        let numDiagonal1 = i * (SIZE + 1)
        winDiagonal1.push(numDiagonal1)

        let numDiagonal2 = (SIZE - 1) * (i + 1)
        winDiagonal2.push(numDiagonal2)


        if (i === SIZE - 1) {
            winCombo.push(winDiagonal1)
            winCombo.push(winDiagonal2)
        }
    }
    return winCombo
}

export const winningCombos = calcWinningCombos()
//  [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ]
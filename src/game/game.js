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
export const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
export const makeMove = (state, key) => {

    const newGridData = updateGrid(state, key);
    const nextMark = getNextMark(state)
    const winCombo = getWinCombo(newGridData)
    const status = getGameStatus(newGridData, winCombo)

    switch (status) {
        case 'draw':
            newGridData.forEach(e => e.locked = true)
            break
        case 'win':
            newGridData.forEach(e => e.locked = true)
            winCombo.forEach(e => {
                const idx = newGridData.findIndex(cell => cell.key === e)
                newGridData[idx].winner = true
            })
            break
        default: break

    }

    const newState = {
        gridData: newGridData,
        mark: nextMark,
        status,
        winCombo
    }


    return newState
}

const updateGrid = ({ gridData, mark }, key) => {
    const idx = gridData.findIndex(element => element.key === key);
    const newGridData = [...gridData]
    newGridData[idx] = { key, mark, locked: true }
    return newGridData
}

const getNextMark = ({ mark }) => mark === 'X' ? 'O' : 'X'

const getWinCombo = gridData => {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < winningCombos.length; i++) {

        const [a, b, c] = winningCombos[i];

        if (gridData[a].mark === gridData[b].mark && gridData[b].mark === gridData[c].mark && gridData[a].mark !== '') {
            return [a, b, c]

        }

    }
    return []
}

const getGameStatus = (gridData, winCombo) => {

    if (winCombo.length) {
        return 'win'
    }

    if (typeof gridData.find(element => element.mark === '') == 'undefined') {
        return 'draw'

    }
    return 'game'
}

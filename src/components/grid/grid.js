// https://stackoverflow.com/questions/60881446/receive-dimensions-of-element-via-getboundingclientrect-in-react
// https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object


import { useCallback, useState } from 'react';
import { winningCombos } from '../../game/game';
import { useGame } from '../../game/GameContext';
import Cell from "../cell/Cell";
import Stroke from '../stroke/Stroke';


import "./grid.css";

export const Grid = () => {
    const { gridData, status, onMove } = useGame()
    const [dimensions, setDimensions] = useState(null);

    const callBackRef = useCallback(grid => {
        if (grid) {
            setDimensions(JSON.parse(JSON.stringify(grid.getBoundingClientRect())));
        }
    }, []);


    const cells = gridData.map((cell) => {
        return (
            <Cell
                {...cell}
                locked={isCellLocked(cell, status)}
                winner={isCellWinner(gridData, cell, status)}
                key={cell.key}
                onMove={() => onMove(cell)}
            />
        );
    });

    return <div className="grid" ref={callBackRef}>
        {dimensions && Object.keys(dimensions).length > 0 && status === 'win' &&
            <Stroke {...getStrokeDimensions(getWinCombo(gridData), dimensions)} />
        }

        {cells}
    </div>;
};

function getStrokeDimensions(winCombo, dimensions) {
    const [a, _, c] = winCombo

    // get coordinate of the start cell
    const r1 = Math.floor(a / 3)
    const c1 = a % 3

    // get coordinate of the end cell
    const r2 = Math.floor(c / 3)
    const c2 = c % 3


    const cellWidth = Math.floor(dimensions.width / 3)
    const cellHeight = Math.floor(dimensions.height / 3)
    const marginX = 110, marginY = 95

    const left = dimensions.left + cellWidth * c1 + marginX
    const top = dimensions.top + cellHeight * r1 + marginY

    const right = dimensions.left + cellWidth * c2 + marginX
    const bottom = dimensions.top + cellHeight * r2 + marginY

    return { left, top, right, bottom }
}

function isCellLocked({ mark }, status) {
    if (mark === 'X' || mark === 'O') return true;
    if (status === 'win' || mark === 'draw') return true;

    return false
}

function isCellWinner(gridData, { mark, key }, status) {
    if (status === 'game' || status === 'draw') return false
    if (mark === '') return false
    for (let i = 0; i < winningCombos.length; i++) {

        const [a, b, c] = winningCombos[i];

        if (gridData[a].mark === gridData[b].mark && gridData[b].mark === gridData[c].mark && gridData[a].mark === mark) {
            return [a, b, c].findIndex(elem => elem === key) >= 0
        }

    }

    return false
}

function getWinCombo(gridData) {
    for (let i = 0; i < winningCombos.length; i++) {

        const [a, b, c] = winningCombos[i];

        if (gridData[a].mark === gridData[b].mark && gridData[b].mark === gridData[c].mark && gridData[a].mark !== '') {
            return [a, b, c]
        }

    }
    return []
}
export default Grid;

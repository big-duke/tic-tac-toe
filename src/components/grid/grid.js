// https://stackoverflow.com/questions/60881446/receive-dimensions-of-element-via-getboundingclientrect-in-react
// https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object

import { useSelector, useDispatch } from 'react-redux'
import actions from '../../redux/actions'
import { winningCombos } from '../../game/game';
import Cell from "../cell/cell";

import "./grid.css";
import { useCallback } from 'react';

export const Grid = () => {
    const { gridData, status } = useSelector(state => state)

    const dispatch = useDispatch()

    const onMove = useCallback(
        (key) => dispatch(actions.onMove(key)),
        [dispatch]
    )

    const cells = gridData.map((cell) => {
        return (
            <Cell
                {...cell}
                locked={isCellLocked(cell, status)}
                winner={isCellWinner(gridData, cell, status)}
                key={cell.key}
                onMove={() => onMove(cell.key)}
            />
        );
    });

    return <div className="grid" >
        {cells}
    </div>;
};

export default Grid;

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




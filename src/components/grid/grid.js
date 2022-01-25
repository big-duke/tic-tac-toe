import { useGame } from '../../game/GameContext';
import Cell from "../cell/Cell";

import "./grid.css";

export const Grid = () => {
    const { gridData, onMove, winCombo, status } = useGame()

    const cells = gridData.map((cell) => {
        return (
            <Cell
                {...cell}
                key={cell.key}
                onMove={() => onMove(cell.key)}
            />
        );
    });

    return <div className="grid">{cells}</div>;
};
export default Grid;

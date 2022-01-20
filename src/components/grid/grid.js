import Cell from "../cell";
import "./grid.css";

export const Grid = (props) => {
    const { gridData, onMove } = props;

    const cells = gridData.map((cell) => {
        return (
            <Cell
                {...cell}
                key={cell.key}
                onMove={e => onMove(cell.key)}
            />
        );
    });

    return <div className="grid">{cells}</div>;
};
export default Grid;

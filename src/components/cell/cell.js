import { useState } from "react";
import { markSymbol } from "./utilities";
import "./cell.css";


const Cell = (props) => {
  const [alert, setAlert] = useState(false);

  const { mark, onMove, locked, winner } = props;

  function flashCell() {
    setAlert(true);
    setTimeout(() => setAlert(false), 100);
  }

  const onCellClick = !locked ? onMove : flashCell;

  let classNames = alert ? "cell cell-alert " : "cell";
  if (winner) classNames += " cell-win";

  return (
    <>
      <div className={classNames} onClick={onCellClick} >
        {markSymbol(mark)}
      </div>
    </>
  );
};

export default Cell;

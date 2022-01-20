import { useState } from "react";
import { markSymbol } from "./utilities";
import "./cell.css";

const Cell = (props) => {
  const [alert, setAlert] = useState(false);
  const { mark, onMove } = props;

  function flashCell() {
    console.log('flash')
    setAlert(true);
    setTimeout(() => setAlert(false), 100);
  }

  const onCellClick = mark === '' ? onMove : flashCell;

  let classNames = alert ? "cell cell-alert " : "cell";
  // if (isCellInWinCombo) classNames += " cell-win";

  return (
    <>
      <div className={classNames} onClick={onCellClick} >
        {markSymbol(mark)}
      </div>
    </>
  );
};

export default Cell;

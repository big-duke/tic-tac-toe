import React from 'react';
import { useGame } from '../../game/GameContext';
import './status.css'

const Status = () => {
    const { gridData, status } = useGame()
    const className = getStatusColorClass(status)
    return (
        <h3 className="status">
            <span className={className}>
                Status : {getDetailedStatus(gridData, status)}
            </span>
        </h3>
    )
}


function getStatusColorClass(status) {
    switch (status) {
        case 'win':
            return 'badge bg-primary bg-success'
        case 'draw':
            return 'badge bg-primary bg-warning '
        default:
            return 'badge'
    }
}

function getDetailedStatus(gridData, status) {

    const xCount = gridData.filter(x => x.mark === 'X').length
    const oCount = gridData.filter(x => x.mark === 'O').length

    if (status === 'draw') return 'Draw'

    if (status === 'win') {
        return xCount === oCount ? 'O is winner' : 'X is winner'
    }

    return xCount === oCount ? 'Next move X' : 'Next move O'





}


export default Status;
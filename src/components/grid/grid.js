import React, { Component } from 'react'
import Square from '../square'
import './grid.css'

export default class Grid extends Component {

    render() {
        const { gridData, onMakeMove, status, winnerCombo } = this.props;
        const elements = gridData.map((item) => {
            const { ...squareProps } = item;
            if (status.endsWith('winner')) {
                squareProps.canMove = false;
            }
            const paintWinner = (typeof winnerCombo.find(element => element === item.key) !== "undefined")

            return <Square {...squareProps} paintWinner={paintWinner} onMakeMove={() => onMakeMove(item.key)} />
        })

        return (
            <div className='grid'>
                {elements}
            </div>
        )
    }
}
import React, { Component } from 'react'
import Grid from '../grid/grid'
import Status from '../status'
import './app.css'
import initState from './initstate.js'

export default class App extends Component {

    state = initState

    checkWin = () => {
        const winningCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        this.setState(({ gridData, currentMove }) => {

            for (let i = 0; i < winningCombos.length; i++) {

                const [a, b, c] = winningCombos[i];
                console.log(a, b, c)
                if (gridData[a].sign === gridData[b].sign && gridData[b].sign === gridData[c].sign && gridData[a].sign !== '') {
                    return {
                        status: `${gridData[a].sign} is winner`,
                        winnerCombo: [a, b, c]
                    }
                }
            }
        })
    }

    checkDraw = () => {
        this.setState(
            ({ gridData }) => {
                if (typeof gridData.find(element => element.sign === '') == 'undefined') {
                    return {
                        status: 'Draw'
                    }
                }
            }
        )
    }

    makeMove = (key) => {
        this.setState(({ gridData, currentMove }) => {
            const idx = gridData.findIndex((el) => el.key === key);
            const newGridData = [...gridData]
            const nextMove = (currentMove === 'X') ? 'O' : 'X'
            newGridData[idx] = {
                key: key,
                sign: currentMove,
                canMove: false
            }
            return {
                gridData: newGridData,
                currentMove: nextMove,
                status: `Next move is ${nextMove}`
            }
        })

    }

    onMakeMove = (key) => {
        this.makeMove(key);
        this.checkDraw();
        this.checkWin();

    }

    restartGame = () => {
        this.setState(() => {
            return initState
        });
    }

    render() {



        return (
            <>
                <Grid {...this.state} onMakeMove={this.onMakeMove} />
                <Status status={this.state.status} />
                <button className="btn btn-outline-info flex-container" onClick={this.restartGame}>Restart</button>
            </>
        )
    }
}
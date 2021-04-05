import React, { Component } from 'react'
import './square.css'

export default class Square extends Component {

    state = {
        blink: false
    }
    onBlockedClick = () => {
        this.setState({ blink: true })
        this.timerID = setInterval(
            () => this.blinkSquare(),
            50)
    }


    blinkSquare() {
        this.setState({
            blink: false
        });
        clearInterval(this.timerID);
    }
    render() {
        const { key, sign, onMakeMove, canMove, paintWinner } = this.props;
        const { blink } = this.state

        let classNames = (blink) ? 'square square-invalid-move ' : 'square'
        if (paintWinner) classNames += ' square-win'

        const SIGN_CODES = {
            X: 10005,
            O: 9711,
            EMPTY: 8203
        };
        let signCode;
        switch (sign) {
            case 'X':
                signCode = SIGN_CODES.X
                break;
            case 'O':
                signCode = SIGN_CODES.O
                break;
            case '':
                signCode = SIGN_CODES.EMPTY
                break;
            default:
                signCode = SIGN_CODES.EMPTY
        }
        let square;
        if (canMove) {
            square = <div className={classNames} key={key} onClick={onMakeMove}>{String.fromCharCode(signCode)} </div>
        }
        else {
            square = <div className={classNames} key={key} onClick={this.onBlockedClick}>{String.fromCharCode(signCode)} </div>
        }
        return (
            <>{square}</>
        )
    }
}
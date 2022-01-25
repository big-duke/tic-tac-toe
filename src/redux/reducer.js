import { makeMove } from "../game/game";
import { ON_MOVE, ON_RESET } from "./types";

const initGridData = (num = 9) => {
    return new Array(num).fill('').map((_, index) => ({ key: index, mark: '', locked: false, winner: false }))
}
export const initialState = {
    gridData: initGridData(), mark: 'X', status: 'game', winCombo: []
}

export const reducer = (state = initialState, { type, key }) => {
    switch (type) {
        case ON_MOVE:
            return makeMove(state, key)
        case ON_RESET:
            return initialState

        default:
            return state
    }
}


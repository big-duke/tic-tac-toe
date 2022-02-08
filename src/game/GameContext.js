import { createContext, useContext, useReducer } from "react"
import { initialState, reducer } from "../redux/reducer"
import types from "../redux/types"



const GameContext = createContext()
export const useGame = () => useContext(GameContext)

export const GameProvider = ({ children }) => {

    const [state, dispath] = useReducer(reducer, initialState)

    const onMove = ({ key }) => dispath({ type: types.ON_MOVE, key })
    const onReset = () => dispath({ type: types.ON_RESET })

    return (

        <GameContext.Provider value={{ ...state, onMove, onReset }}>
            {children}
        </GameContext.Provider>
    )
}




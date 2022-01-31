import { createContext, useContext, useReducer } from "react"
import { initialState, reducer } from "../redux/reducer"
import { ON_MOVE, ON_RESET } from "../redux/types"



const GameContext = createContext()
export const useGame = () => useContext(GameContext)

export const GameProvider = ({ children }) => {

    const [state, dispath] = useReducer(reducer, initialState)

    const onMove = ({ key }) => dispath({ type: ON_MOVE, key })
    const onReset = () => dispath({ type: ON_RESET })

    return (

        <GameContext.Provider value={{ ...state, onMove, onReset }}>
            {children}
        </GameContext.Provider>
    )
}




import { useGame } from "../../game/GameContext"

export const Restart = () => {
    const { onReset } = useGame()
    return (
        <button className="btn btn-outline-info flex-container" onClick={onReset}>Restart</button>
    )
}
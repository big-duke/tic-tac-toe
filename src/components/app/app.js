import { GameProvider } from '../../game/GameContext'
import Grid from '../grid/Grid'
import { Restart } from '../restart/Restart'
import './app.css'

function App() {

    return (
        <GameProvider>
            <Grid />
            <Restart />
        </GameProvider>
    )

}
export default App
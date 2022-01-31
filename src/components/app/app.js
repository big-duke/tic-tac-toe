import Grid from '../grid/Grid'
import Status from '../status/Status'
import { Restart } from '../restart/Restart'
import Stroke from '../stroke/Stroke'
import { GameProvider } from '../../game/GameContext'


import './app.css'

function App() {

    return (
        <GameProvider>
            <Grid />

            <Status />
            <Restart />

        </GameProvider>
    )

}
export default App
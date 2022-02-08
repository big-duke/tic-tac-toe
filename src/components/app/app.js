import Grid from '../grid/grid'
import Status from '../status/status'
import { Restart } from '../restart/restart'

import { GameProvider } from '../../game/gameContext'


import './app.css'

function App() {
    return (
        <>
            <Grid />
            <Status />
            <Restart />
        </>
    )

}
export default App
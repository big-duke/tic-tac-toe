import { useState } from 'react'
import Grid from '../grid/grid'
import './app.css'

const App = () => {
    const initGridData = (num = 9) => {
        console.log('initGridData');
        return new Array(num).fill('').map((_, index) => (
            {
                key: index,
                mark: ''
            }
        ))
    }
    const [gridData, setGridData] = useState(initGridData)
    const [mark, setMark] = useState('X')

    const onMove = (key) => {
        updateGrid(key)
        nextMark()
    }

    const updateGrid = (key) => {
        const idx = gridData.findIndex(element => element.key === key);
        const newGridData = [...gridData]
        newGridData[idx] = { key, mark }
        setGridData(newGridData)
    }

    const nextMark = () => {
        setMark(currentMark => currentMark === 'X' ? 'O' : 'X')
    }

    return (
        <>
            <Grid gridData={gridData} onMove={onMove} />
        </>
    )

}
export default App
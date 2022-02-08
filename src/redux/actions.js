import types from "./types"

const onMove = (key) => (
    {
        type: types.ON_MOVE,
        key
    }
)

const onReset = () => (
    {
        type: types.ON_RESET
    }
)

export default { onMove, onReset }
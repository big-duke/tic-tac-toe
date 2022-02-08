import { useDispatch } from 'react-redux'
import actions from '../../redux/actions'
export const Restart = () => {

    const dispatch = useDispatch()

    return (
        <button className="btn btn-outline-info flex-container" onClick={() => dispatch(actions.onReset())}>Restart</button>
    )
}
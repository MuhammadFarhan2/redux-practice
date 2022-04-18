import {connect} from 'react-redux'
import { DECREASE_ONE, INCREASE_ONE } from './actions'

function Counter(props) {
    function increment() {
            props.dispatch({type:INCREASE_ONE})
    }
    function decrement() {
        props.dispatch({type:DECREASE_ONE})
    }

    return (<>
        <h1>Counter</h1>
        <button onClick={increment}>Add</button>
        <label>Counter-{props.count }</label>
        <button onClick={decrement}>Minus</button>
    </>)
}



const mapStateToProps = (state)=>{
    return {count:state.count}
}

export default connect(mapStateToProps)(Counter);
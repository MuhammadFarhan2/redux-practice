import { DECREASE_ONE, INCREASE_ONE } from "../actions";

const intialState = {
    count: 0,

}

const reducer = (state = intialState, action) => {
    console.log(state);
    switch (action.type) {
        case INCREASE_ONE:
            return { ...state, count: state.count + 1 }
        case DECREASE_ONE:
            return { ...state, count: state.count - 1 }

        default:
            return state;
    }
}

export default reducer;
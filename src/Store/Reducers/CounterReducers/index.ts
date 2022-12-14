import {AuthAction, CounterActionEnum, CounterState} from "./types";


const initialState: CounterState = {
    counterValue: 0,
    startValue: 0,
    maxValue: 0,
}


export const counterReducers = (state = initialState, action: AuthAction): CounterState => {
    switch (action.type) {
        case CounterActionEnum.SET_START_VALUE: {
            return {...state, counterValue: action.payload}
        }
        case CounterActionEnum.INC_ACTION: {
            return {...state, counterValue: state.counterValue + action.payload}
        }
        case CounterActionEnum.RESET_ACTION: {
            return {...state, counterValue: state.counterValue = action.payload}
        }
        case  CounterActionEnum.SET_MAX_VALUE: {
            return {...state, maxValue: action.payload}
        }
        default: return state
    }
}



import {CounterActionEnum, IncAction, ResetAction, SetMaxValueAction, SetValueAction} from "./types";


export const ActionCreators = {
    setCounter: (payload: number): SetValueAction => ({type: CounterActionEnum.SET_START_VALUE, payload}),
    incCounter: (payload: number): IncAction => ({type: CounterActionEnum.INC_ACTION, payload}),
    resetCounter: (payload: number): ResetAction => ({type: CounterActionEnum.RESET_ACTION, payload}),
    setCounterMaxValue: (payload: number): SetMaxValueAction => ({type: CounterActionEnum.SET_MAX_VALUE, payload}),
}
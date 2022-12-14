export interface CounterState {
    counterValue: number
    startValue: number
    maxValue: number
}

export enum CounterActionEnum {
    SET_START_VALUE = 'SET_START_VALUE',
    INC_ACTION = 'INC_ACTION',
    RESET_ACTION = 'RESET_ACTION',
    SET_MAX_VALUE = 'SET_MAX_VALUE',

}

export type AuthAction = SetValueAction | IncAction | ResetAction | SetMaxValueAction

export interface SetValueAction {
    type: CounterActionEnum.SET_START_VALUE;
    payload: number;
}

export interface IncAction {
    type: CounterActionEnum.INC_ACTION;
    payload: number;
}

export interface ResetAction {
    type: CounterActionEnum.RESET_ACTION;
    payload: number;
}

export interface SetMaxValueAction {
    type: CounterActionEnum.SET_MAX_VALUE;
    payload: number;
}

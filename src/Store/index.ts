import {combineReducers, createStore} from "redux";
import {counterReducers} from "./Reducers/CounterReducers";



export const rootReducer = combineReducers({
    counter: counterReducers,

})


export type AppRootState = ReturnType<typeof rootReducer>


export const store = createStore(rootReducer)
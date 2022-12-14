import React from 'react';
import './App.css';
import {CounterSettings} from "./Components/CounterSettings/CounterSettings";
import {Counter} from "./Components/Counter/Counter";
import {useDispatch} from "react-redux";
import {ActionCreators} from "./Store/Reducers/CounterReducers/action-creators";
import {Line} from "./Components/Line/Line";


function App() {

    const dispatch = useDispatch()

    const changeCounterStartValue = (startValue: number) => {
        dispatch(ActionCreators.setCounter(startValue))
    }

    const changeCounterMaxValue = (maxValue: number) => {
        dispatch(ActionCreators.setCounterMaxValue(maxValue))
    }

    const incrementButton = (value: number) => {
        dispatch(ActionCreators.incCounter(value))
    }

    const resetButton = (value: number) => {
        dispatch(ActionCreators.resetCounter(value))
    }

    return (
        <div className="App">
            <CounterSettings changeCounter={changeCounterStartValue}
                             changeCounterMaxValue={changeCounterMaxValue}
            />
            <Line/>
            <Counter incrementButton={incrementButton}
                     resetButton={resetButton}
            />
        </div>
    );
}

export default App;

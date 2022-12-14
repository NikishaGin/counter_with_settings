import React from 'react';
// @ts-ignore
import style from './Counter.module.css'
import {useSelector} from "react-redux";
import {AppRootState} from "../../Store";
import {CounterState} from "../../Store/Reducers/CounterReducers/types";
import {ErrorAndDisabledBtn} from "../../Utils/utils";
import {MyButton} from "../../UI/MyButton";

type CounterProps = {
    incrementButton: (value: number) => void
    resetButton: (value: number) => void
}

export const Counter = (props: CounterProps) => {

    const counter = useSelector<AppRootState, CounterState>(state => state.counter)

    const incBtnDisabled = ErrorAndDisabledBtn.incrementButtonDisabled(counter.counterValue, counter.maxValue)

    let className = style.item_1

    if (incBtnDisabled) {
        className = className + ' ' + style.item_1_color
    }

    return (
        <div className={style.container}>
            <div className={className}>
                {counter.counterValue}
            </div>
            <div className={style.item_2}>
                <MyButton callback={() => props.incrementButton(1)}
                          disabledBtn={incBtnDisabled}
                          title={'INC'}
                          style={style.btnInc}
                />
                <MyButton callback={()=>props.resetButton(0)}
                          title={'RESET'}
                          style={style.btnReset}
                />
            </div>
        </div>
    );
};


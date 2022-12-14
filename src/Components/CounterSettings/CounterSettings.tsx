import React, {ChangeEvent, useState} from 'react';
// @ts-ignore
import style from './CounterSettings.module.css'
import {Types} from "./types";
import {ErrorAndDisabledBtn} from "../../Utils/utils";
import {MyButton} from "../../UI/MyButton";
import {IconSettings} from "../../UI/IconSettings";

type CounterSettingsProps = {
    changeCounter: (startValue: number) => void
    changeCounterMaxValue: (maxValue: number) => void
}

export const CounterSettings = (props: CounterSettingsProps) => {

    const [changeValue, setChangeValue] = useState<Types>({startValue: 0, maxValue: 0})

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChangeValue({...changeValue, startValue: +e.currentTarget.value})
    }

    const onChangeHandlerMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setChangeValue({...changeValue, maxValue: +e.currentTarget.value})
    }

    const onClickHAndler = () => {
        props.changeCounter(changeValue.startValue)
        props.changeCounterMaxValue(changeValue.maxValue)
    }

    const setBtnDisabled = ErrorAndDisabledBtn.setButtonDisabled(changeValue.startValue, changeValue.maxValue)

    const setInputError = ErrorAndDisabledBtn.inputError(changeValue.startValue, changeValue.maxValue)


    let className = style.input

    if (setInputError) {
        className = className + ' ' + style.input_error
    }

    return (
        <div className={style.container}>
            <div className={style.item_1}>
                <IconSettings/>
            </div>
            <div className={style.item_2}>
                <div className={style.text}>start value</div>
                <input className={className}
                       value={changeValue.startValue}
                       type="number"
                       onChange={onChangeStartValueHandler}/>

            </div>
            <div className={style.item_3}>
                <div className={style.text}>max value</div>
                <input className={className}
                       value={changeValue.maxValue}
                       type="number"
                       onChange={onChangeHandlerMaxValue}/>
            </div>
            <div className={style.item_4}>
                <MyButton callback={onClickHAndler}
                          title={'SET'}
                          style={style.btn}
                          disabledBtn={setBtnDisabled}
                />
            </div>
        </div>
    );
};


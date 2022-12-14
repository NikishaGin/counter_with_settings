import React from 'react';
// @ts-ignore
import style from './MyButton.module.css'

type MyButtonProps = {
    callback: () => void
    disabledBtn?: boolean
    title: string
    style: string
}


export const MyButton = (props: MyButtonProps ) => {
    return (
        <div>
            <button className={props.disabledBtn ? '' : props.style}
                    disabled={props.disabledBtn}
                    onClick={props.callback}>
                {props.title}
            </button>
        </div>
    );
};


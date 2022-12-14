export const ErrorAndDisabledBtn = {

    setButtonDisabled: (startValue: number, maxValue: number) =>
        startValue === maxValue || maxValue < startValue || maxValue <= 0,

    incrementButtonDisabled: (value: number, maxValue: number) =>
        maxValue > 0 && value > 0 && maxValue === value,

    inputError: (startValue: number, maxValue: number) =>
        startValue > 0 && maxValue > 0 && startValue === maxValue || maxValue < 0

}




import { useState } from 'react';

export const useInputHandler = (initVal) =>{
    const [val, setVal] = useState(initVal)
    const onChangeHandler = e =>{
        setVal(e.target.value)
    }
    return [val, onChangeHandler]
}
import { useState } from "react";

const useInput = (validateData) => {
    const [userEntered, setUserEntered] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const isUserEnteredValid = validateData(userEntered);
    const isInvalid = !isUserEnteredValid && isTouched;

    const onChangeHandler = event => {
        setUserEntered(event.target.value);
    }

    const onBlurHandler = () => {
        setIsTouched(true)
    }

    return {
        userEntered,
        isUserEnteredValid,
        isInvalid,
        onBlurHandler,
        onChangeHandler
    }
}

export default useInput;
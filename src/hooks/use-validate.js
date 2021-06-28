import { useState } from "react";

const useValidate = (onValidate) => {
const [userEntered, setUserEntered] = useState('');
const [isTouched, setIsTouched] = useState(false);

const onChangeHandler = event => {
    setUserEntered(event.target.value);
}

const onBlurHandler = () => {
    setIsTouched(true);
}

let isUserEnteredValid = onValidate(userEntered);
let invalid = !isUserEnteredValid && isTouched;

return {
    isUserEnteredValid,
    invalid,
    onChangeHandler,
    onBlurHandler
}
}

export default useValidate;
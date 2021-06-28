import { useReducer } from "react";

const initialState = {
    userEntered: '',
    isTouched: false
}

const inputReducer = (state, action) => {
   if(action.type === 'INPUT'){
       return {
        userEntered: action.value,
        isTouched: state.isTouched
       }
   }

   if(action.type === 'TOUCHED'){
       return{
           userEntered: state.userEntered,
           isTouched: true
       }
   }

    return {
        userEntered: '',
        isTouched: false
    }
}

const useInput = (validateData) => {
    
    const [inputState, dispatch] = useReducer(inputReducer, initialState)    

    const isUserEnteredValid = validateData(inputState.userEntered);
    const isInvalid = !isUserEnteredValid && inputState.isTouched;

    const onChangeHandler = event => {
        dispatch({type: 'INPUT', value: event.target.value})
    }

    const onBlurHandler = () => {
        dispatch({type: 'TOUCHED'})
    }

    return {
        userEntered: inputState.userEntered,
        isUserEnteredValid,
        isInvalid,
        onBlurHandler,
        onChangeHandler
    }
}

export default useInput;
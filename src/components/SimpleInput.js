import { useState } from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    userEntered,
    isInvalid,
    isUserEnteredValid,
    onBlurHandler,
    onChangeHandler
  } = useInput(data => data.trim() !== '')

  const {
    userEntered: emailEntered,
    isInvalid: isEmailInvalid,
    isUserEnteredValid: isEmailValid,
    onBlurHandler: onEmailBlurHandler,
    onChangeHandler: onEmailChangeHandler
  } = useInput(data => data.includes('@'))

  let isFormValid = false;
  if (isUserEnteredValid && isEmailValid) {
    isFormValid = true;
  }

  const onSubmitHandler = event => {
    event.preventDefault();

    console.log("userName: " + userEntered)
    console.log("Email: " + emailEntered)
  }

  const isValidClass = !isInvalid ? 'form-control' : 'form-control invalid'
  const isValidEmailClass = !isEmailInvalid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={onSubmitHandler} >
      <div className={isValidClass}>
        <label htmlFor='name'>Your Name</label>
        <input onBlur={onBlurHandler} onChange={onChangeHandler} type='text' id='name' />
      </div>
      <div className={isValidEmailClass}>
        <label htmlFor='email'>Your Email ID</label>
        <input onBlur={onEmailBlurHandler} onChange={onEmailChangeHandler} type='email' id='email' />
      </div>
      {(isInvalid || isEmailInvalid) && <p className="error-text">Form field shouldn't be empty</p>}
      <div className="form-actions">
        <button disabled={!isFormValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

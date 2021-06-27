import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [userEntered, setUserEntered] = useState('')
  const userEnteredRef = useRef();
  // const [isValid, setIsValid] = useState(false)
  const [isTouched, setIsTouched] = useState(false)
  const [isEmailTouched, setIsEmailTouched] = useState(false)
  const [emailEntered, setEmailEntered] = useState('');
  // const [isEmailValid, setIsEmailValid] = useState(false);

  const isUserEnteredValid = userEntered.trim() !== '';
  const isInvalid = !isUserEnteredValid && isTouched;

  let isEmailValid = false;
  if (emailEntered.trim() !== '' && emailEntered.includes('@')) {
    isEmailValid = true;
  }
  const isEmailInvalid = !isEmailValid && isEmailTouched;

  let isFormValid = false;
  if (isUserEnteredValid && isEmailValid) {
    isFormValid = true;
  }
  const onChangeHandler = event => {
    setUserEntered(event.target.value);
    // if (event.target.value.trim() === '') {
    //   setIsValid(false)
    // }
    // setIsValid(true)
  }

  const onBlurHandler = event => {
    setIsTouched(true)
    // if (event.target.value.trim() === '') {
    //   setIsValid(false)
    //   return;
    // }
    // setIsValid(true)
  }

  const onSubmitHandler = event => {
    setIsTouched(true)
    event.preventDefault();
    // if (userEntered.trim() === '') {
    //   setIsValid(false)
    //   return;
    // }
    if (!isUserEnteredValid) {
      return;
    }

    // setIsValid(true)
    const inputRef = userEnteredRef.current.value
    console.log("inputRef " + inputRef)
    console.log("inputState " + userEntered)
    console.log("inputState " + emailEntered)
  }

  const onEmailBlurHandler = () => {
    setIsEmailTouched(true);
  }

  const onEmailChangeHandler = event => {
    setEmailEntered(event.target.value);
  }

  const isValidClass = !isInvalid ? 'form-control' : 'form-control invalid'
  const isValidEmailClass = !isEmailInvalid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={onSubmitHandler} >
      <div className={isValidClass}>
        <label htmlFor='name'>Your Name</label>
        <input ref={userEnteredRef} onBlur={onBlurHandler} onChange={onChangeHandler} type='text' id='name' />
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

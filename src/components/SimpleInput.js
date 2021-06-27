import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [userEntered, setUserEntered] = useState('')
  const userEnteredRef = useRef();
  // const [isValid, setIsValid] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  const isUserEnteredValid = userEntered.trim() !== '';
  const isInValid = !isUserEnteredValid && isTouched;

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
  }


  const isValidClass = !isInValid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={onSubmitHandler} >
      <div className={isValidClass}>
        <label htmlFor='name'>Your Name</label>
        <input ref={userEnteredRef} onBlur={onBlurHandler} onChange={onChangeHandler} type='text' id='name' />
        {isInValid && <p className="error-text">Name shouldn't be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

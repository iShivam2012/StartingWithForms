import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [userEntered, setUserEntered] = useState('')
  const userEnteredRef = useRef();

  const onChangeHandler = event => {
    setUserEntered(event.target.value);
  }

  const onSubmitHandler = event => {
    event.preventDefault();
    if (userEntered.trim() === '') {
      return;
    }

    const inputRef = userEnteredRef.current.value
    console.log("inputRef " + inputRef)
    console.log("inputState " + userEntered)
  }

  return (
    <form onSubmit={onSubmitHandler} >
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input ref={userEnteredRef} onChange={onChangeHandler} type='text' id='name' />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

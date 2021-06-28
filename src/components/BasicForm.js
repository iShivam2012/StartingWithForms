import useValidate from "../hooks/use-validate";

const BasicForm = (props) => {
 const {
  isUserEnteredValid: isFNameValid,
  invalid: isFNameInvalid,
  onChangeHandler: onFNameChange,
  onBlurHandler: onFNameBlur } = useValidate(data => data.trim() !== '')
 
  const {
  isUserEnteredValid: isLNameValid,
  invalid: isLNameInvalid,
  onChangeHandler: onLNameChange,
  onBlurHandler: onLNameBlur } = useValidate(data => data.trim() !== '')

  const {
  isUserEnteredValid: isEmailValid,
  invalid: isEmailInvalid,
  onChangeHandler: onEmailChange,
  onBlurHandler: onEmailBlur } = useValidate(data => data.includes('@'))

  const onSubmitHandler = event => {
    event.preventDefault();
  }

  let isFormValid = false;
  if(isFNameValid && isLNameValid && isEmailValid){
    isFormValid = true;
  }

  let isFNameValidClass = isFNameInvalid ? 'form-control invalid' : 'form-control';
  let isLNameValidClass = isLNameInvalid ? 'form-control invalid' : 'form-control';
  let isEmailValidClass = isEmailInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={onSubmitHandler} >
      <div className='control-group'>
        <div className={isFNameValidClass} >
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onChange={onFNameChange} onBlur={onFNameBlur} />
        </div>
        <div className={isLNameValidClass} >
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onChange={onLNameChange} onBlur={onLNameBlur} />
        </div>
      </div>
      <div className={isEmailValidClass} >
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' onChange={onEmailChange} onBlur={onEmailBlur} />
      </div>
      {(isFNameInvalid || isLNameInvalid || isEmailInvalid) && <p className='error-text' >Form field shouldn't be empty</p> }
      <div className='form-actions'>
        <button disabled={!isFormValid} >Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

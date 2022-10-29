import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import style from './CourseInput.module.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setEnteredValue('');
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FormControl className={`${!isValid ? ' invalid' : ''}`}> */}
      <div className={`${style['form-control']} ${!isValid && style.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;

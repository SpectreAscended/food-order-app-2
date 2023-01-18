import React from 'react';
import classes from './Input.module.css';

const Input = props => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        min={props.min}
        max={props.max}
        step={props.step}
      />
    </div>
  );
};

export default Input;

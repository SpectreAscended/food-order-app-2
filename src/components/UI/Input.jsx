import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input
        ref={ref}
        // type={props.type}
        // id={props.id}
        // min={props.min}
        // max={props.max}
        // step={props.step}
        {...props.input}
      />
    </div>
  );
});

export default Input;

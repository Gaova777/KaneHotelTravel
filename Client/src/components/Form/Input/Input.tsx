import React from "react";
import style from './Input.module.css'

interface InputProps {
  name: string,
  type: string,
  placeholder: string,
  onChange: any,
  value: any,
  error: string
}

const Input: any = (props: InputProps) =>{
  

  return(
    <div>
      <input 
        name={props.name}
        type={props.type} 
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        className={props.error ? style.inputError : ''}
      />
      <p className={style.errorMessage}>{props.error && props.error}</p>
    </div>
  )
}

export default Input;
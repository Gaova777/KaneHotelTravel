import React from "react";
import styleForm from "../Form.module.css"
import style from "./Input.module.css"

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
        className={props.error ? `${styleForm.inputError} ${style.input}` : `${style.input}`}
      />
      <p className={styleForm.errorMessage}>{props.error && props.error}</p>
    </div>
  )
}

export default Input;
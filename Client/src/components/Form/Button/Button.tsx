import React from "react";
import style from './Button.module.css'

interface ButtonProps {
  type: any
  value: string,
  onClick: any
}

const Button: any = (props: ButtonProps) =>{
  return(
    <button type={props.type} onClick={props.onClick} className={style.button}>
      {props.value}
    </button>
  )
}

export default Button;
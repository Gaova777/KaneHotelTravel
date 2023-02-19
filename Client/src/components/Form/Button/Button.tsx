import React from "react";

interface ButtonProps {
  type: any
  value: string,
  onClick: any
}

const Button: any = (props: ButtonProps) =>{
  return(
    <button type={props.type} onClick={props.onClick}>
      {props.value}
    </button>
  )
}

export default Button;
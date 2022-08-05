import React from 'react'
import "./buttonStyles.css"

const Button = (props) => {
    /** destructure prop values */
    const{
        title,
        bgColor,
        width,
        height,
        fontSize,
        padding,
        borderColor,
        color,
        onClickHandler,
        onClick
    } =props
  return (
    <button
        style={{ 
            width:width || "12em",
            height:height || "3.5em",
            fontSize: fontSize || "16px",
            padding: padding || "1em",
            backgroundColor: bgColor || "#00000",
            border: borderColor ||
            `1px solid ${bgColor === `#F2E14F` ? bgColor : `#1D2498`}`,
            color: color || "#1B249E",
         }}
         onClick={onClick || onClickHandler}
    >
         {title}
    </button>
  )
}

export default Button
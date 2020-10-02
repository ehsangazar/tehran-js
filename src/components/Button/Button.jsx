import React, { Children } from 'react'
import './Button.css'

const Button = ({
    children,
    model,
    onClick,
}) => {
    return (
      <button onClick={onClick} className={`Button ${model}`}>
        {children}
      </button>
    )
}

export default Button
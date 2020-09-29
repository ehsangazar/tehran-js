import React, { Children } from 'react'
import './Button.css'

const Button = ({
    children,
    model
}) => {
    return (
        <button className={`Button ${model}`}>
            {children}
        </button>
    )
}

export default Button
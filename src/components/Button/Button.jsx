import React, { Children } from 'react'
import './Button.css'

const Button = ({
    children,
    model,
    onClick,
    disabled,
    loading,
}) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`Button ${model}`}
      >
        {loading && (
          <>
            <i className="fa fa-cog fa-spin"></i>
          </>
        )}
        {!loading && children}
      </button>
    )
}

export default Button

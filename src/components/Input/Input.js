import React from "react"
import './Input.css'

const Input = ({ type, placeholder, required, onChange }) => {
  const handleOnChange = event => {
    if (event) event.preventDefault()
    onChange(event.target.value)
  }

  return (
    <div className="Input">
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleOnChange}
        required={required}
      />
    </div>
  )
}

export default Input

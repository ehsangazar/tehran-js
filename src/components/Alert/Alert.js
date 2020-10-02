import React from "react"
import "./Alert.css"

const Alert = ({ model, children }) => {
  return <div className={`Alert Alert-${model}`}>{children}</div>
}

export default Alert

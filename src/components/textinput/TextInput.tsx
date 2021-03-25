import React, { InputHTMLAttributes } from 'react'

import styles from './textinput.module.css'

type InputFieldProps = {
  label?: string
}

const TextInput: React.FC<
  InputFieldProps & InputHTMLAttributes<HTMLInputElement>
> = ({ label, className, ...rest }) => {
  let inputClass = styles.input
  if (className) {
    inputClass += ` ${className}`
  }

  return (
    <div className={styles.inputField}>
      {label && <span className={styles.inputFieldLabel}>{label}</span>}
      <input className={inputClass} {...rest} />
    </div>
  )
}

export default TextInput

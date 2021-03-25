import React, { InputHTMLAttributes } from 'react'

import styles from './radio.module.css'

type IProps = {
  label: string
  wrapperClassName?: string
}

const Radio: React.FC<IProps & InputHTMLAttributes<HTMLInputElement>> = ({
  label,
  wrapperClassName,
  ...props
}) => {
  return (
    <label className={`${styles.label} ${wrapperClassName}`}>
      <input
        {...props}
        type="radio"
        role="presentation"
        className={styles.input}
      />
      <span className={styles.radiolabel}>{label}</span>
    </label>
  )
}

export default Radio

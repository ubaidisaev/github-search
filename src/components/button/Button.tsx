import React, { ButtonHTMLAttributes } from 'react'

import styles from './button.module.css'

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children = 'Найти пользователей',
  className = '',
  ...props
}): JSX.Element => {
  return (
    <button className={`${styles.btn} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button

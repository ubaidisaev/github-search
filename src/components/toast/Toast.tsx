import React from 'react'

import styles from './toast.module.css'

const Toast: React.FC = ({ children }) => {
  return <div className={styles.notification}>{children}</div>
}

export default Toast

import React from 'react'

import styles from './styles.module.scss'

const Title = (props) => {
    const {
        children,
        className,
        lineLeft
    } = props

  const lineToLeft = lineLeft && styles.Line_left

  return (
    <div className={`${styles.Container} ${className}`}>
      <h2 className={`${styles.Title}`}>
        {children}
        <div className={`${styles.Line} ${lineToLeft}`}></div>
      </h2>
    </div>
  )
}

export default Title

import React from 'react'
import styles from './styles.module.scss'



const MenuBar = (props) => {
    const {
        active,
        onClicked,
        className
    } = props

    const MenuBarContainerStatus = active 
        && styles.Active

    return (
        <div className={`${styles.MenuBarContainer} ${MenuBarContainerStatus} ${className}`} onClick={onClicked}>
            <div className={`${styles.MenuBar} ${styles.TopBar}`} ></div>
            <div className={`${styles.MenuBar} ${styles.MiddleBar}`} ></div>
            <div className={`${styles.MenuBar} ${styles.BottomBar}`} ></div>
        </div>
    )
}

export default MenuBar

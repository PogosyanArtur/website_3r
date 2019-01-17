import React from 'react'
import { Link } from "react-scroll";
import styles from './styles.module.scss'

const NavigationLink = (props) => {
    const {
        label,
        to,
        view,
        active,
        onSetActive,
        click

    } = props
    
    const viewStatus = view
        ? styles[`Link_view_${view}`]
        : ''

    const activeLinkState = active 
        ? styles.Link_active
        : ''

    return (
            <Link 
                className={`${styles.Link} ${viewStatus} ${activeLinkState}`} 
                to={to} 
                spy={true} 
                smooth={true} 
                offset={-110} 
                duration={500}
                onSetActive={onSetActive}
                delay={10}
                onClick={click}
                ignoreCancelEvents={false}>              
               <span>{label}</span> 
            </Link>
    )
}

NavigationLink.defaultProps = {
    to: '/'
}

export default NavigationLink

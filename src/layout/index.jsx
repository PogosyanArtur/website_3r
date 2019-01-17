import React from 'react'

import './style.scss'


const Layout = (props) => {
    const {
        children
    } = props

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default Layout

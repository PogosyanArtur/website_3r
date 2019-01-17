import React from 'react'

import styles from './styles.module.scss'

const Card = (props) => {
    const {
        imageSrc,
        imageAlt,
        label,
        context,
        price,
        className
    } = props

    return (
        <div className={`${styles.Card} ${className}`}>
            <div className={`${styles.ImageBox}`}>
                <img className={`${styles.Image}`} src={imageSrc} alt={imageAlt} />
            </div>
            <div className={`${styles.Content}`}>
                <h3 className={`${styles.Label}`}> {label} </h3>
                <p className={`${styles.Context}`}> {context} </p>
                <p className={`${styles.Price}`}>{price} руб.</p>
            </div>
        </div>
    )
}

export default Card

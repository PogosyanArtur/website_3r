import React from 'react'

import styles from './styles.module.scss'

const Achievement = () => {

    const items = [
        {
            title: '2003',
            text: 'Год основания'
        },
        {
            title: '100 000',
            text: 'Продажи в год'
        },
    ]
    return (
        <section className={`${styles.Achievement}`}>
            {
                items.map(item => (
                    <div className={`${styles.Item}`} key={item.text}>
                        <h3 className={`${styles.Title}`}>{item.title}</h3>
                        <h6 className={`${styles.Text}`}>{item.text}</h6>
                    </div>
                ))
            }
        </section>
    )
}

export default Achievement

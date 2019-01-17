import React from 'react'

import styles from './styles.module.scss'
import Card from "../../components/Card"
import Title from "../../components/Title"

const Products = () => {
    const cards = [
        {
            imageSrc: 'kroshka.jpg',
            imageAlt: 'асфальтобетонная крошка',
            label: 'асфальтобетонная крошка',
            context: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.',
            price: '600'
        },
        {
            imageSrc: 'skol.jpg',
            imageAlt: 'асфальтобетонный скол',
            label: 'асфальтобетонный скол',
            context: 'Это текст. Нажмите один раз и выберите «Редактировать текст» или просто дважды кликните, чтобы добавить свой текст и настроить шрифт.',
            price: '400'
        }
    ]
    return (
        <section id='products'>
            <Title>продукты</Title>
            <div className={styles.Cards}>
                {
                    cards.map(card => (
                        <Card
                            imageSrc={require(`../../static/images/${card.imageSrc}`)}
                            imageAlt={card.imageAlt}
                            label={card.label}
                            context={card.context}
                            price={card.price}
                            key={card.imageAlt}
                            className={styles.Card}
                        />
                    ))
                }

            </div>
        </section>
    )
}

export default Products

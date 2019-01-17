import React from 'react'

import styles from './styles.module.scss'
import Title from '../../components/Title/Title'


const AboutUs = () => {
    return (
        <section id='aboutUs' className={`${styles.AboutUs}`}>
            <div className={`${styles.Content}`}>
                <Title className={`${styles.Title}`} lineLeft>о нас</Title>
                <p className={`${styles.Context}`}>Это текст. Нажмите один раз и выберите «Редактировать текст» или просто кликните дважды, чтобы добавить свой текст и настроить шрифт. Вы можете переместить его в любое место на странице. Расскажите посетителям сайта о себе. Здесь будет удачно смотреться текст о вашей компании и услугах. Используйте эту возможность, чтобы выгодно представить себя и свою компанию клиентам. Расскажите интересную историю, например, как вам в голову пришла идея собственного дела, и объясните, в чем заключается ваше преимущество перед конкурентами.</p>
            </div>
            <div className={`${styles.Image}`}></div>
        </section>)

}

export default AboutUs

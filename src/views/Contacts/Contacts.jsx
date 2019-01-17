import React, { Component } from 'react'


import Title from '../../components/Title'
import data from '../../data/contacts'
import Input from '../../components/Input'
import styles from './styles.module.scss'


class Contacts extends Component {
    state = {
        formInputs: [
            {
                elementType: 'input',
                elementConfig: {
                    name: 'name',
                    type: 'text',
                    id: 'form_name',
                },
                value: '',
                label: 'Имя',
                validation: {
                    required: true,
                    isName: true
                },
                valid: false,
                touched: false
            },
            {
                elementType: 'input',
                elementConfig: {
                    name: 'mail',
                    type: 'text',
                    id: 'form_mail',
                },
                value: '',
                label: 'E-mail',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            {
                elementType: 'textarea',
                elementConfig: {
                    name: 'massage',
                    id: 'form_massage',
                },
                value: '',
                label: 'Cообщение',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            {
                elementType: 'input',
                elementConfig: {
                    type: "submit",
                    name: 'submit',
                    id: 'form_submit',
                },
                value: 'Отправить',
                validation: {
                    required: true
                },
                valid: true,
                touched: false
            }
        ],
        formValidate: false
    }

    checkValidity(value, validation) {
        let isValid = true;
        if (!validation) {
            return true;
        }

        if (validation.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if (validation.isName) {
            const pattern = /^[a-zA-Zа-яёА-ЯЁ ]*$/;
            isValid = pattern.test(value) && isValid
        }
        if (validation.isEmail) {
            const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = pattern.test(value) && isValid
        }
        return isValid
    }

    inputChangedHandler = (event, id) => {
        let updatedInputs = [...this.state.formInputs];

        let updatedInputIndex = updatedInputs.findIndex(el => el.elementConfig.name === id)
        let updatedInput = updatedInputs[updatedInputIndex]
        updatedInput.touched = true;
        updatedInput.value = event.target.value;
        updatedInput.valid = this.checkValidity(updatedInput.value, updatedInput.validation)
        updatedInputs[updatedInputIndex] = updatedInput


        let updatedFormValidation = true
        updatedInputs.forEach(el => {
            updatedFormValidation = el.valid && updatedFormValidation
            return updatedFormValidation
        })

        this.setState({ formInputs: updatedInputs, formValidate: updatedFormValidation })

    }

    render() {
        return (
            <section id="contacts" >
                <Title className={styles.Title}>контакты</Title>
                <div className={styles.Content}>
                    <div className={styles.ContentContainer}>
                        <div>
                            <h4 className={styles.Label}>Ответы на вопросы</h4>
                            <p className={styles.Context}>С удовольствем ответим на все ваши вопросы по телефону <br /> {data.tel1.name} Или просто заполните форму ниже:</p>
                        </div>
                        <form className={styles.Form}>
                            {this.state.formInputs.map(el => (
                                <Input
                                    elementType={el.elementType}
                                    elementConfig={el.elementConfig}
                                    key={el.elementConfig.name}
                                    changed={(event) => this.inputChangedHandler(event, el.elementConfig.name)}
                                    value={el.value}
                                    label={el.label}
                                    validation={el.validation}
                                    touch={el.touched}
                                    valid={!el.valid}
                                    disable={!this.state.formValidate}
                                />
                            ))}
                        </form>
                    </div>
                    <div className={styles.ContentContainer}>
                        <div>
                            <h4 className={styles.Label}>Центральный офис</h4>
                            <p className={styles.Context}>МО, г. Котельники мкр. Силикат, промзона, стр.9</p>
                            <p className={styles.Context}><span>E-mail: </span><a href={data.mail1.href} className={styles.Link}>{data.mail1.name}</a></p>
                            <p className={styles.Context}><span>Телефон: </span><a href={data.tel1.href} className={styles.Link}>{data.tel1.name}</a></p>
                        </div>
                        <div>
                            <div className={styles.TelephoneLine}></div>
                            <span className={styles.Label}>Звоните: </span><a href={data.tel1.href} className={`${styles.Link} ${styles.Link_lg}`}>{data.tel1.name}</a>
                        </div>
                    </div>
                </div>
            </section>)
    }
}

export default Contacts

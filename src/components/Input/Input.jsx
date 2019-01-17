import React from 'react'
import styles from './styles.module.scss'

const Input = (props) => {
    const {
        elementType,
        elementConfig,
        changed,
        value,
        label,
        valid,
        validation,
        touch,
        disable
    } = props

    let inputElement = null;
    let invalidStyle = ""
    let invalid = false;

    if(validation && touch && valid){
        invalidStyle = styles.InvalidStyle
        invalid = true;
    }


    switch (elementType) {
        case 'input':
            if (elementConfig.type === "submit") {
                inputElement = (
                    <div>
                        <input
                            className={`${styles.Controls} ${styles.Submit}  ${invalidStyle} ${ disable ? styles.Submit_disable : "" }`}
                            {...elementConfig}
                            onChange={changed}
                            value={value}
                        />
                    </div>
                )
                break;

            } else {
                inputElement = (
                    <div>
                        {label && <label className={styles.Label}>{label}</label>}
                        {invalid && <span className={styles.InvalidLabel}> "Неправильно заполнено поле" </span>}
                        <input
                            className={`${styles.Controls}  ${styles.Input}  ${invalidStyle}`}
                            {...elementConfig}
                            onChange={changed}
                            value={value}
                        />
                    </div>
                )
                break;
            }

        case 'textarea':
            inputElement =
                (<div>
                    {label && <label className={styles.Label}>{label}</label>}
                    {invalid && <span className={styles.InvalidLabel}> "Неправильно заполнено поле" </span>}

                    <textarea
                        className={`${styles.Controls} ${styles.Textarea} ${invalidStyle}`}
                        {...elementConfig}
                        onChange={changed}
                        value={value}
                    />
                </div>
                )
            break;
        default:
        inputElement = (
            <div>
                {label && <label className={styles.Label}>{label}</label>}
                {invalid && <span className={styles.InvalidLabel}> "Неправильно заполнено поле" </span>}
                <input
                    className={`${styles.Controls}  ${styles.Input}  ${invalidStyle}`}
                    {...elementConfig}
                    onChange={changed}
                    value={value}
                />
            </div>
        )
    }


    return (
        <React.Fragment>
            {inputElement}
        </React.Fragment>)
}

export default Input

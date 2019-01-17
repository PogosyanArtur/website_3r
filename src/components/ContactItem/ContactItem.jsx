import React from 'react'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import styles from './styles.module.scss'


const ContactItem = (props) => {
  const {
    label,
    href,
    icon,
    rotation,
    size
  } = props

  return (
    <React.Fragment>

      { href
        ? <a href={href} className={`${styles.Link}`}>
          {icon
            && <Icon icon={icon} size={size} rotation={rotation} />
          }
          <span className={`${styles.Label}`}>{label}</span>
        </a>
        : <span className={`${styles.Link}`}>
          {icon
            && <Icon icon={icon} size={size} rotation={rotation} />
            }
          <span className={`${styles.Label}`}> { label }</span>
        </span> }
    </React.Fragment>

  )
}

export default ContactItem

import React from 'react'
import styles from '../../styles/StatusCard.module.css'

const StatusCard = props => {
  return (
    <div className={styles.statusCard}>
          <div className={styles.statusCardIcon}>
            <img src={props.icon} />
          </div> 
          
          <div className={styles.statusCardInfo}>
            <h4>{props.count}</h4>
            <span>{props.title}</span>
          </div>

    </div>
  )
}

export default StatusCard
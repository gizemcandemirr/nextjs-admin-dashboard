import React from 'react'
import styles from '../../styles/ButtonGroup.module.css'

const ButtonGroup = () => {
  return (
    <div className={styles.buttonContent}>
     
     <button className={styles.buttonGroup}><img src="/sidebarIcon/add.png" alt="" /></button>  
     <button className={styles.buttonGroup}><img src="/sidebarIcon/pencil.png" alt="" /></button>  
     <button className={styles.buttonGroup}><img src="/sidebarIcon/delete.png" alt="" /></button>  


    </div>
  )
}

export default ButtonGroup
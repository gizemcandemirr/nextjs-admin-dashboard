import React from 'react'
import styles from '../../styles/TableHeader.module.css'
import SearchBar from '../searchBar/SearchBar'
const TableHeader = () => {
  return (
    <div className={styles.headerContent}>
      <div className={styles.backItems}>
         <img src="/sidebarIcon/back.png" alt="back" />
         <span>user roles</span>
      </div>
    <div className={styles.rightItems}>
         <SearchBar />
        <div className={styles.buttonGroup}>
            <button className={styles.buttonHeader}><img src="/sidebarIcon/change.png" width={20} /> <span className={styles.spanHeader}>Change Role </span></button>
        <button className={styles.buttonHeader}> <img src="/sidebarIcon/plus.png" width={20}  /> <span className={styles.spanHeader}>New Role </span></button>
        </div>  
    </div>

    </div>
  )
}

export default TableHeader
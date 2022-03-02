import React from 'react'

import styles from '../../styles/Sidebar.module.css'
import { useRouter } from 'next/router'


import settings_menu from '../../assets/JsonData/settings_menu.json'
import Link from 'next/link'

const SidebarItem = props =>{

  const active= props.active ? 'active': ''
  return(
    <div className={styles.sidebarItem}>
      
      <div className={active ? styles.Active : styles.sidebarItemInner}>
        <img src={props.icon} />
        <span>
          {props.title}
        </span>
      </div>
    </div>
  )
}

const SettingsSidebar = props => {
    const router = useRouter()

    const activeItem= settings_menu.findIndex(item => item.route === router.pathname)
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarLogo}>
        <img src="/logo.png" alt="companylogo" />
      </div>
      {
        settings_menu.map((item,index) => (
          <Link href={item.route} key={index}>
            <a>
               <SidebarItem
                title={item.display_name}
                icon={item.icon}
                active={index=== activeItem}
               /> </a>  
          </Link>
        ))
      }

    </div>
  )
}

export default SettingsSidebar
import React from 'react'
import styles from '../../styles/Sidebar.module.css'
import { useRouter } from 'next/router'


import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import Link from 'next/link'

const SidebarItem = props =>{

  const active= props.active ? 'active': ''
    console.log("gg"+ props.active)
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

const Sidebar = () => {
  const router = useRouter()

   const activeItem= sidebar_items.findIndex(item => item.route === router.pathname)
   console.log("gggggg"+ activeItem)
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarLogo}>
        <img src="/logo.png" alt="companylogo" />
      </div>
      {
        sidebar_items.map((item,index) => (
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

export default Sidebar
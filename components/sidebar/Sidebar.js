import React, { useState } from 'react'
import styles from '../../styles/Sidebar.module.css'
import { useRouter } from 'next/router'


import sidebar_items from '../../assets/JsonData/sidebar_routes.json'
import settings_menu from '../../assets/JsonData/settings_menu.json'

import Link from 'next/link'

const SidebarItem = props =>{

  const active= props.active ? 'active': ''
  return(
    <div className={styles.sidebarItem}>
      
      <div className={active ? styles.Active : styles.sidebarItemInner}>
        <div className={styles.sidebarItemInnerLeft} >
          <img src={props.icon} width={24} />
        <span>
          {props.title}
        </span>
        </div>
        <div>
            {props.dropIcon && <img src={props.dropIcon} alt="drop" width={24} />}
        </div>
       
      
      </div>
    </div>
  )
}
const SidebarContent = props =>{

  const active= props.active ? 'active': ''
  return(
    <div className={styles.sidebarItem}>
      
      <div className={active ? styles.Active : styles.sidebarItemInner}>
        <div className={styles.sidebarItemInnerLeft}>
           <img src={props.icon} width={24} />
        <span>
          {props.title}
        </span>
        </div>
       
      </div>
    </div>
  )
}

const Sidebar = () => {
  const router = useRouter()
  const path = router.asPath;
  const [isListOpen, setIsListOpen]= useState(false);

   const activeItem= sidebar_items.findIndex(item => item.route === router.pathname)
   
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarLogo}>
        <img src="/logo.png" alt="companylogo" />
      </div>
      {
        

        sidebar_items.map((item,index) => (
          <Link href={item.route} key={index} >
            <a onClick={()=>setIsListOpen(!isListOpen)}>
            <SidebarItem
                title={item.display_name}
                icon={item.icon}
                dropIcon={item.dropIcon}
                active={index=== activeItem}
               /> 
            </a>  
          </Link>      

        ))
      }

      {
        path === '/settings/users' && isListOpen &&(

          settings_menu.map((item,index) => (
            <Link href={item.route} key={index}>
              <a>
                 <SidebarContent
                  title={item.display_name}
                  icon={item.icon}
                  active={index=== activeItem}
                 /> </a>  
            </Link>      
  
          ))


        )
      }
  

    </div>
  )
}

export default Sidebar
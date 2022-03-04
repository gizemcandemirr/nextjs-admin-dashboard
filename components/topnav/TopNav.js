import React from "react";
import styles from "../../styles/TopNav.module.css";
import Dropdown from "../dropdown/Dropdown";



import Link from "next/link";


// json dosyaları
import notifications from '../../assets/JsonData/notification.json'
import user_menu from '../../assets/JsonData/user_menus.json'
import language_menu from '../../assets/JsonData/language_menu.json'

import ThemeMenu from "../thememenu/ThemeMenu";
import LanguageMenu from "../languagemenu/LanguageMenu";

//

const curr_user ={
  display_name: 'Admin',
  image:'/sidebarIcon/account.png'
}
const curr_language ={
  display_name: 'En',
  image:'/icon/us.svg'
}

const renderNotificationItem = (item,index) =>(
  <div className={styles.notificationItem} key={index}>
    <img src={item.icon} alt="notification item" width={24} />
    <span>{item.content}</span>

  </div>
)
const renderUserMenu= (item,index) => (
   <Link href='/' key={index}>
   <div className={styles.notificationItem} key={index}>
    <img src={item.icon} alt="notification item" width={24} />
    <span>{item.content}</span>

  </div>
   </Link> 
)
const renderLanguageMenu= (item,index) => (
  <Link href={item.href} key={index}>
  <div className={styles.notificationItem} key={index}>
   <img src={item.icon} alt="item" width={24} />
   <span>{item.content}</span>
 </div>
  </Link> 
)

const renderUserToggle = (user) =>(
  <div className={styles.topNavRightUser}>
    <div className={styles.topNavRightUserImage}>
      <img src={user.image} alt="user" width={24} />
    </div>
    <div className={styles.topNavRightUserName}>
      {user.display_name}
    </div>
  </div>
)
const renderLanguageToggle = (language) =>(
 
  <div className={styles.topNavRightUser}>
    <div className={styles.topNavRightUserImage}>
      <img src={language.image} alt="user" />
    </div>
    <div className={styles.topNavRightUserName}>
      {language.display_name}
    </div>
  </div>
 
 

)




const TopNav = () => {
  return (
    <div className={styles.topNav}>
      <div className={styles.topNavSearch}>
        <input type="text" placeholder="Search here..." />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

       <div className={styles.topNavRightSection}>
            <div className={styles.topNavRight}>
     
      </div>
      <div className={styles.topNavRight}>
        <div className={styles.topNavRightItem}>
        <Dropdown
        icon="/sidebarIcon/notification.png"
        badge="12"
        contentData={notifications}
        renderItems={(item,index) =>renderNotificationItem(item,index) }
        renderFooter={()=> <Link href='/'>View All</Link>}
         />
        </div>
      </div>
      
      <div className={styles.topNavRightItem}>
           <Dropdown
            customToggle={() => renderUserToggle(curr_user)}
            contentData={user_menu}
            renderItems={(item,index) => renderUserMenu(item,index)}
           />
        </div>

        <div className={styles.topNavRight}>
          <div className={styles.topNavRightItem}>
          <Dropdown
            customToggle={() => renderLanguageToggle(curr_language)}
            contentData={language_menu}
            renderItems={(item,index) => renderLanguageMenu(item,index)}
           />
        </div>
        </div>
       
          
      <div className={styles.topNavRightItem}>
        <ThemeMenu />
        </div>

       </div>
   


    </div>
  );
};

export default TopNav;

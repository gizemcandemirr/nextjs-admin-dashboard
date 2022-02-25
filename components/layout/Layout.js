import React from "react";
import Sidebar from "../sidebar/Sidebar";
import styles from '../../styles/Layout.module.css'
import TopNav from "../topnav/TopNav";

const Layout = ({ children }) => {
  return (
      <div className={styles.layout}>
          <Sidebar/>
    <div className={styles.layout__content}>
         <TopNav/>
      <div className={styles.layout__contentMain}>{children}</div>
    </div>
      </div>
  
  );
};

export default Layout;

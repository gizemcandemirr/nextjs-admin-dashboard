import React, { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import styles from '../../styles/Layout.module.css'
import TopNav from "../topnav/TopNav";

import { useSelector, useDispatch} from "react-redux";
import ThemeAction from '../../redux/actions/ThemeAction'
import Login from "../login/Login";



const Layout = ({ children } ) => {
  const [signin, setSignIn] =useState(true)
  const themeReducer = useSelector (state => state.ThemeReducer)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')
    const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

    dispatch(ThemeAction.setMode(themeClass))
    dispatch(ThemeAction.setMode(colorClass))


}, [dispatch]);

  return (
   <div>
     { signin == true ?
    (   <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
         
          <Sidebar />    
    <div className={styles.layout__content}>
         <TopNav/>
      <div className={styles.layout__contentMain}>{children}</div>
    </div>
      </div>)
      : <Login /> }
   </div> 
  );
};


export default Layout;


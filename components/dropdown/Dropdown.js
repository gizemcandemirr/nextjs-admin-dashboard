import Link from "next/link";
import React, { useRef, useState } from "react";
import styles from "../../styles/Dropdown.module.css";


const Dropdown = props => {

     const [isListOpen, setIsListOpen]= useState(false);

  return (
    <div className={styles.dropdown}>
       
       <button className={styles.dropdownToggle} onClick={()=>setIsListOpen(!isListOpen)}>
        {props.icon ? <img src={props.icon } width={24} /> : ""}

        {props.badge ? (
          <span className={styles.dropdownToggleBadge}>{props.badge}</span>
        ) : (
          ""
        )}
        {props.customToggle ? props.customToggle() : ""}
      </button>

      {isListOpen && 
        
      ( 
       <div  className={styles.dropdownContent}>
          
         {props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index) )
          : ""} 
             
       
        {props.renderFooter ? (
          <div className={styles.dropdownFooter}>{props.renderFooter()}</div>
        ) : (
          ""
        )}
      </div> )  }
     
      
 
     
    </div>
  );
}

export default Dropdown;

import React from 'react'
import styles from '../../styles/Badge.module.css'


const Badge = props => {
 const checkColor = color => {
 if(color === 'primary'){
        return styles.badgePrimary
    }
 else if(color==='danger'){
        return styles.badgeDanger
    }
else if(color==='warning'){
    return styles.badgeWarning

}
else if(color==='success'){
    return styles.badgeSuccess

}

    }
   
  return (

       <span className={checkColor(props.type)} >
               {props.content} 
      </span>

  )
}

export default Badge
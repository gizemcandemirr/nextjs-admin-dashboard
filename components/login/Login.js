import React from 'react'
import styles from '../../styles/Login.module.css'




const Login = () => {

  return (
      <div className={styles.loginContent}>
     
          <form className={styles.loginForm}> 
             <input type="text" placeholder="isminiz" className={styles.loginInput} />
             <input type="password" placeholder='Şifreniz' className={styles.loginInput}  />
             <button className={styles.loginButton}>Giriş yap</button>
         </form>  
         
        
      </div>
  )
}


export default Login

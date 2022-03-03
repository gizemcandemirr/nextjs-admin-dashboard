import React, { useEffect, useState } from 'react'
import styles from '../../styles/ThemeMenu.module.css'

import { useDispatch } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction'


const mode_settings= [
    {id:'light',
     name:'Light',
     background:'light-background',
     class:'theme-mode-light'
    },
   {
       id:'dark',
       name:'Dark',
       background:'dark-background',
       class:'theme-mode-dark'
   }
]

const color_settings=[
    {id:'purple',
    name:'Purple',
    background:'purple-color',
    class:'theme-color-purple'
   },
    {id:'blue',
    name:'Blue',
    background:'blue-color',
    class:'theme-color-blue'
   },
   {id:'red',
   name:'Red',
   background:'red-color',
   class:'theme-color-red'
  },
  {id:'cyan',
  name:'Cyan',
  background:'cyan-color',
  class:'theme-color-cyan'
 },
 {id:'orange',
 name:'Orange',
 background:'orange-color',
 class:'theme-color-orange'
},
]
const ThemeMenu = () => {
    const [isListOpen, setIsListOpen]= useState(false);
    const [currMode, setCurrMode] = useState('light');
    const [currColor, setCurrColor] = useState('blue');
    const dispatch = useDispatch()
    const setMode= mode => {
        setCurrMode(mode.id)
        localStorage.setItem('themeMode', mode.class)
        dispatch(ThemeAction.setMode(mode.class))

    }
    const setColor= color => {
        setCurrColor(color.id)
        localStorage.setItem('colorMode', color.class)
        dispatch(ThemeAction.setColor(color.class))


    }
     useEffect(() => {
         const themeClass = mode_settings.find(e => e.class === localStorage.getItem('themeMode', 'theme-mode-light'))
         const colorClass = color_settings.find(e => e.class === localStorage.getItem('colorMode', 'theme-mode-light'))
       if(themeClass !== undefined) setCurrMode(themeClass.id)
       if(colorClass !== undefined) setCurrColor(colorClass.id)
     }, []);

  


  return ( 
    <div>     

      <button className={styles.dropdownToggle} onClick={()=>setIsListOpen(!isListOpen)}>
          <img src="/sidebarIcon/paint-palette.png" width={24} alt="palette" />
      </button>
        {
            isListOpen &&(
            <div className={styles.themeMenu}>
         <h4>Theme settings</h4>
          <button className={styles.themeMenuClose} onClick={()=>setIsListOpen(!isListOpen)} > 
              <img src="/icon/close.png" />
          </button>


          <div className={styles.themeMenuSelect}>
           <span>Choose mode</span>


           <ul className={styles.modeList}>
              {
                 mode_settings.map((item,index) => (
                      <li key={index} onClick={() => setMode(item)}>
                        <div className={`modeListColor ${item.background}`}>
                           {
                               item.id === currMode ? '+' : ''
                           }   
                                  
                        </div>
                        <span>{item.name}</span>
                      </li>
                  ))
              }
           </ul>



        </div>
        <div className={styles.themeMenuSelect}>
           <span>Choose color</span>
           <ul className={styles.modeList}>
              {
                 color_settings.map((item,index) => (
                      <li key={index} onClick={() => setColor(item)}>
                        <div className={`modeListColor ${item.background}`}>
                           {
                               item.id === currColor ? '+' : ''
                           }  
                        </div>
                        <span>{item.name}</span>
                      </li>
                  ))
              }
           </ul>
        </div>
      </div>
      
            )
        }
        
        



    </div>
  )
}

export default ThemeMenu
import React, { useState } from 'react'
import styles from '../../styles/Table.module.css'

const Table = props => {
   

    // pagination devam ediyor
   const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit) ): props.bodyData
   const [dataShow, setDataShow] = useState(initDataShow)

   let range=[]
   let pages
   if(props.limit !== undefined){
       let page = Math.floor(props.bodyData.length / Number(props.limit))
        pages = Math.floor(props.bodyData.length % Number(props.limit)) === 0 ? page : page + 1;
       range = Array.from(Array(pages).keys())
   }
   
  const [currPage, setCurrPage]= useState(0)
  const selectPage= page =>{
      const start = Number(props.limit) * page
      console.log("start", start)
      const end = start + Number(props.limit)

      setDataShow(props.bodyData.slice(start,end))
      setCurrPage(page)
  }
  

  return (
      <div>
          <div className={styles.tableWrapper}>
        <table className={styles.table}>
             <thead className={styles.thead}>
                 <tr className={styles.tr}>
                     { 
                     props.headData && props.renderHead ? (
                       <thead className={styles.thead}>
                           <tr className={styles.tr}>
                              {
                                  props.headData.map((item,index) => props.renderHead(item,index))
                              }  
                           </tr>
                       </thead>
                     ): null
                     }
                     {
                         props.bodyData && props.renderBody ? (
                             <tbody className={styles.tbody}>
                     
                                {
                                     dataShow.map((item,index)=> props.renderBody(item,index))
                                     
                                 }
                             </tbody>
                         ): null
                     }
                    

                 </tr>
               
             </thead>
        </table>
    </div> 

         { pages > 1 ? (
                 <div className={styles.tablePagination} >
                     {
                         range.map((item,index) =>(
                             <div className={currPage=== index ? styles.tablePaginationItemActive : styles.tablePaginationItem} key={index} 
                             onClick={()=> selectPage(index)}>
                                 {item + 1 }
                             </div>
                         ))
                     }
                 </div>
             ) : ''}
      </div>
   
  )
}

export default Table
import React, { useState } from 'react'
import styles from '../../styles/Table.module.css'

const Table = props => {
   

    // pagination devam ediyor
   const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit) ): props.bodyData

   let pages=1
   let range=[]
   if(props.limit !== undefined){
       let page = Math.floor(props.bodyData.length / Number(props.item))
       pages = props.bodyData.length & Number(props.limit) === 0 ? page : page + 1
      
      
   }
   
   const [dataShow, setDataShow] = useState(initDataShow)

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
                         pages.map((item,index) =>(
                             <div className={styles.tablePaginationItem} key={index}>
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
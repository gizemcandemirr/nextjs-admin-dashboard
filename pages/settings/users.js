import React from 'react'


import userlist from '../../assets/JsonData/user_list.json'
import ButtonGroup from '../../components/buttonGroup/ButtonGroup'
import Table from '../../components/table/Table'
import TableHeader from '../../components/tableHeader/TableHeader'

const customerTableHead =[
    '',
    'Name',
    'Email',
    'Phone',
    'Role'
  ]
  const renderHead = (item,index) => <th key={index}>{item}</th>
  const renderBody= (item,index)=> (
    <tr key={index} className='tr'>
      <td className='td'>{item.id}</td>
      <td className='td'>{item.name}</td>
      <td className='td'>{item.email}</td>
      <td className='td'>{item.phone}</td>
      <td className='td'>{item.role}</td>
      <td className='td'><ButtonGroup/></td>
    </tr>
  )
  
const users = () => {
  return (
    <div>
    <h2 className='page-header'>
      Customers
    </h2>
 
     <div className='row'>
       <div className='col-12'> 
     
         <div className='card'>
           <div className='card-body'>  
              <TableHeader/>
               <Table
                 limit='5'
                 headData={customerTableHead}
                 renderHead={(item,index) => renderHead(item,index)}
                 bodyData={userlist}
                 renderBody={(item,index) => renderBody(item,index)}
               />
           </div>
         </div>
       </div>
     </div>

  </div>
  )
}

export default users
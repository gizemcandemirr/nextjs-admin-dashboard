import React from 'react'
import Table from '../components/table/Table'


// json verileri
import customerList from '../assets/JsonData/customer-list.json'
import Popup from '../components/popup/Popup'

const customerTableHead =[
  '',
  'Name',
  'Email',
  'Phone',
  'Total Orders',
  'Total Spend',
  'Location',
]

const renderHead = (item,index) => <th key={index}>{item}</th>
const renderBody= (item,index)=> (
  <tr key={index} className='tr'>
    <td className='td'>{item.id}</td>
    <td className='td'>{item.name}</td>
    <td className='td'>{item.email}</td>
    <td className='td'>{item.phone}</td>
    <td className='td'>{item.total_orders}</td>
    <td className='td'>{item.total_spend}</td>
    <td className='td'>{item.location}</td>
  </tr>
)

const customers = () => {
  return (
    <div>
      <h2 className='page-header'>
        Customers
      </h2>
       <div className='row'>
         <div className='col-12'>
           <div className='card'>
             <div className='card-body'>
                 <Table
                   limit='15'
                   headData={customerTableHead}
                   renderHead={(item,index) => renderHead(item,index)}
                   bodyData={customerList}
                   renderBody={(item,index) => renderBody(item,index)}
                 />
             </div>
           </div>
         </div>
       </div>
       <Popup />
    </div>



  )







}

export default customers
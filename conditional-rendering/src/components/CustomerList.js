import React, { Component } from 'react'
import {customerList} from "./CustomerStore"

 class CustomerList extends Component {
     state ={
         customers : customerList
     }

  render() {
    return (
      <React.Fragment>
         <pre>{JSON.stringify(this.state)}</pre>
         <div className='container mt-3'>
             <div className='row'>
                 <div className='col'>
                     <p className='h3 text-success'>Customer Information</p>
                     <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas</p>
                 </div>
             </div>
             <div className='row'>
                 <div className='col'>
                     <table className='table table-hover text-center table-striped table-success'>
                         <thead className='bg-success text-white'>
                             <tr>
                                 <th>ID</th>
                                 <th>IMAGE</th>
                                 <th>NAME</th>
                                 <th>GENDER</th>
                                 <th>EMAIL</th>
                                 <th>LOCATION</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 this.state.customers.map((each)=>{
                                     return(
                                         <tr>
                                             <td>{each.login.uuid.substring(each.login.uuid.length-4)}</td>
                                             <td>
                                                 <img src={each.picture.large} width={70} height={70} />
                                             </td>
                                             <td>{each.name.first} {each.name.last}</td>
                                             <td>{each.gender}</td>
                                             <td>{each.email}</td>
                                             <td>{each.location.city}</td>
                                         </tr>
                                     )
                                 })
                             }
                         </tbody>

                     </table>

                 </div>

             </div>

         </div>
      </React.Fragment>
    )
  }
}
export default CustomerList
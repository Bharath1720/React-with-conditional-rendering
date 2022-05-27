import React, { Component } from 'react'

 class EmployeeList extends Component {
     state = {
         employees : [
             {
                 id : 1145621,
                 name : "Bharath Boyapati",
                 age : 23,
                 designation : "React Specialist"
             },
             {
                id : 1001122,
                name : "Sandip Das",
                age : 38,
                designation : "Manager"
            },
            {
                id : 1002123,
                name : "Gemini Gnanasri",
                age : 29, 
                designation : " Senior Software Engineer"
            },
            {
                id : 1145625,
                name : "Ghosh Saritha",
                age : 25,
                designation : "Project Engineer"
            }
         ]
     }
  render() {
    return (
      <React.Fragment>
          <pre>{JSON.stringify(this.state)}</pre>
          <div className='container mt-3'>
              <div className='row'>
                  <div className='col'>
                      <p className='h3' >Employee Info</p>
                      <p className='lead'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate.</p>
                  </div>
              </div>
              <div className='row'>
                  <div className='col'>
                      <table className='table table-hover text-center table-striped '>
                          <thead className='bg-dark text-white font-weight-bold'>
                              <tr>
                                  <th>Employee Id</th>
                                  <th>Name</th>
                                  <th>Age</th>
                                  <th>Designation</th>
                              </tr>
                          </thead>
                          <tbody>
                              {
                                  this.state.employees.map((each) => {
                                      return(
                                          <tr>
                                              <td>{each.id}</td>
                                              <td>{each.name}</td>
                                              <td>{each.age}</td>
                                              <td>{each.designation}</td>
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
export default EmployeeList
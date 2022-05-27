import React, { Component } from 'react'

 class UserMessage extends Component {
     state ={
         msg : "",
         isLogged : false
     }

     login  = () =>{
         this.setState({
             ...this.state,
isLogged: true
         })
     }

     logout  = () =>{
        this.setState({
            ...this.state,
            isLogged: false
        })
    }

  render() {
    return (
      <React.Fragment>
          <pre>{JSON.stringify(this.state)}</pre>
          <div className='container mt-3'>
              <div className='row'>
                  <div className='col'>
                      <div className='card'>
                          <div className='card-header bg-success '>
                              <h2>I am from Message</h2>
                          </div>
                          <div className='card-body'>
                              <button onClick={this.login} className='btn btn-blue-grey'>Login</button>
                              <button onClick={this.logout} className='btn btn-elegant'>Logout</button>
                             {this.state.isLogged ? <React.Fragment>
                                 <p className='h3'>Welcome User</p>
                             </React.Fragment> : null}
                          </div>
                      </div>
                  </div>
              </div>
          </div>

      </React.Fragment>
    )
  }
}
export default UserMessage
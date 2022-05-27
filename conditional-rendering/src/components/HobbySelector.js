import React, { Component } from 'react'

 class HobbySelector extends Component {
     state ={
         eating : false,
         coding : false,
         sleeping : false
     }

     updateInput = (event)=>{
         this.setState({
             ...this.state,
             [event.target.name] : event.target.checked
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
                          <div className='card-header bg-danger text-dark'>
                              <p className='h4'>Hobby Selector</p>
                          </div>
                          <div className='card-body'>
                              <div className='row'>
                                  <div className='col-md-4'>
                                        <div class="form-check">
                                            <input
                                            name='eating'
                                             onChange={this.updateInput} class="form-check-input" type="checkbox"  id="defaultCheck1"/>
                                            <label class="form-check-label" for="defaultCheck1">
                                                Eating
                                            </label>
                                            </div>
                                            <div class="form-check">
                                            <input 
                                            name='coding'
                                            onChange={this.updateInput} class="form-check-input" type="checkbox"  id="defaultCheck2"/>
                                            <label class="form-check-label" for="defaultCheck2">
                                                Coding
                                            </label>
                                            </div>
                                            <div class="form-check">
                                            <input
                                            name='sleeping'
                                            onChange={this.updateInput} class="form-check-input" type="checkbox" id="defaultCheck3"/>
                                            <label class="form-check-label" for="defaultCheck3">
                                                Sleeping
                                            </label>
                                            </div>

                                  </div>
                                  <div className='col-md-8'>
                                      {
                                          this.state.eating ? <React.Fragment>
                                               <div className='card'>
                                          <div className='card-body bg-success text-white'>
                                              <p className='h4'>Eating</p>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                                          </div>
                                      </div>
                                          </React.Fragment> : null
                                      }
                                     
                                      {
                                          this.state.coding ? <React.Fragment>
                                               <div className='card'>
                                          <div className='card-body bg-secondary text-white'>
                                              <p className='h4'>Coding</p>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                                          </div>
                                      </div>
                                          </React.Fragment> : null
                                      }
                                     
                                      {
                                          this.state.sleeping ? <React.Fragment>
                                               <div className='card'>
                                          <div className='card-body bg-primary text-white'>
                                              <p className='h4'>Sleeping</p>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                                          </div>
                                      </div>
                                          </React.Fragment> : null
                                      }
                                     

                                  </div>

                              </div>

                          </div>

                      </div>

                  </div>

              </div>

          </div>
      </React.Fragment>
    )
  }
}
export default HobbySelector
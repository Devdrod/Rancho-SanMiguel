import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Landing extends Component {
  render() {
    return (
<div className="landing text-center text-light">
<div className="container-fluid dark-overlay">
          
          
    <div className="row">
    <div className="col-md-12">
              <h1 className="display-3 mb-4 font pt-8">
                Rancho San Miguel
              </h1>
    </div>
    </div>


    <div className="row">
    <div className="col-md-6">
    <div className="jumbotron jumbo1">
                    <h1 className="display-4">Hello, world!</h1>
                    <hr className="my-4" />
                                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                <p className="lead">
                                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                                </p>    
                                </div>
                                 </div>



    <div className="col-md-6">
                    <div className="jumbotron jumbo2">
                    <h1 className="display-4">Hello, world!</h1>
                    <hr className="my-4"/>
                                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                    <p className="lead">
                                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                                    </p>   
                                </div>



          
            </div>
          </div>
        </div>
      </div>
        
    );
  }
}

export default Landing



import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Landing extends Component {
  render() {
    return (

<div className="container-fluid landing text-center text-light">
<div className="dark-overlay">
          
          
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
                    <h1 className="display-4">Visit our ranch</h1>
                    <hr className="my-4" />
                                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                <p className="lead">
                                    <Link className="btn btn-primary btn-lg" href="#" role="button">Learn more</Link>
                                </p>    
                                </div>
                                 </div>



    <div className="col-md-6">
                    <div className="jumbotron jumbo2">
                    <h1 className="display-4">Hello, world!</h1>
                    <hr className="my-4"/>
                                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                                    <p className="lead">
                                        <Link className="btn btn-primary btn-lg" href="#" role="button">Learn more</Link>
                                    </p>   
                                </div>
            </div>
          </div>


      <div className="text-center text-dark">
      <div className="row">
      <div className="col-md-12">
      <div className="card">
      <div className="card-header">
                    Reviews
      </div>
      <div className="card-body">
                    <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
      </div>
      </div>
      </div>
      </div>
      </div>
<div className="">
          <div className="container pt-5">
            <div className="row">
              <div className="col-md-12">

                <div className="jumbotron jumbo3">
                  <h1 className="display-4">Hello, world!</h1>
                  <hr className="my-4" />
                  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                  <p className="lead">
                    <Link className="btn btn-primary btn-lg" href="#" role="button">Learn more</Link>
                  </p>
                </div>
                </div>
              






              </div>
            </div>
          </div>





      </div>
      </div>
        






        
    );
  }
}

export default Landing



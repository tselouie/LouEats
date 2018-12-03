import React, { Component } from 'react';


class Featured extends Component {
  render() {
    return (
    <div id="featured">
        <h1 className="my-4" align="left">Recent~ 
        <small><i className="fas fa-drumstick-bite"></i>Food<i className="fas fa-plane-departure"></i>Trips</small>
      </h1>

      <div className="row">
  
        <div className="col-md-8">
          <img className="img-fluid" src="img/tsukiji.jpg" alt=""style={{ height: "500px", width: "450px"}}/>
        </div>

        <div className="col-md-4">
          <h3 className="my-3">Japan + China</h3>
          <p>In the upcoming two week vacation we are staying 1 week in Japan, and 1 week in China.</p>
          <h3 className="my-3"align="left">Places we will be visiting:</h3>
          <div align="left">
          <h5><a href="tokyo"><i className="fas fa-caret-right"></i>Tokyo</a></h5> 
          <h5><a href="hakone"> <i className="fas fa-caret-right"></i>Hakone</a></h5>
          <h5><a href="hongkong"><i className="fas fa-caret-right"></i>Hong Kong</a></h5>
          <h5><a href="guangzhou"><i className="fas fa-caret-right"></i>GuangZhou</a></h5>


          </div>
      
         
        </div>

      </div>
      </div>
    );


  }
}

export default Featured;

import React, { Component } from 'react';


class Featured extends Component {
  render() {
    return (
    <div id="featured">
        <h1 className="my-4" align="left">Recent~ 
        <small><i class="fas fa-drumstick-bite"></i>Food<i class="fas fa-plane-departure"></i>Trips</small>
      </h1>

      <div className="row">
  
        <div className="col-md-8">
          <img className="img-fluid" src="img/tsukiji.jpg" alt=""style={{ height: "500px", width: "450px"}}/>
        </div>

        <div className="col-md-4">
          <h3 className="my-3">Tsukiji market</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem, adipiscing in adipiscing et, interdum nec metus. Mauris ultricies, justo eu convallis placerat, felis enim.</p>
          <h3 className="my-3">Project Details</h3>
          <ul>
            <li>Lorem Ipsum</li>
            <li>Dolor Sit Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing Elit</li>
          </ul>
        </div>

      </div>
      </div>
    );


  }
}

export default Featured;

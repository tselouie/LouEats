import React, { Component } from 'react';


class NavBar extends Component {

  

  render() {
    return (
     
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top " id="navv">
        <div className="container">
          <a className="navbar-brand" href="/"><img id="logo-hover" src="img/Logo.png" alt="logo" style={{height:"50px" , width:"50px"}}/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className={(this.props.highlight === "Home" ? ' nav-item active' : '')}>
                <a className="nav-link" href="/">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className={(this.props.highlight === "Food" ? ' nav-item active' : '')}>
                <a className="nav-link" href="/Food">Food</a>
              </li>
              <li className={(this.props.highlight === "Travel" ? ' nav-item active' : '')}>
                <a className="nav-link" href="/Travel">Travel</a>
              </li>
              <li className={(this.props.highlight === "Contact" ? ' nav-item active' : '')}>
                <a className="nav-link" href="https://www.google.com/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );


  }
}

export default NavBar;

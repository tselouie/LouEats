import React, { Component } from 'react';

import NavBar from './NavBar';


class Template extends Component {
  render() {
    return (
      <div>
        <NavBar highlight={this.props.menu}/>
        <div className="container">
          {this.props.children}
        </div>

        <footer className="py-4 bg-dark" id="template-footer">
          <div className="container">
            <p className="m-0 text-center text-white">Copyright &copy; Louie Tse 2018</p>
          </div>
        </footer>
      </div>


    );

  }
}

export default Template;

import React, { Component } from 'react';
import './App.css';
import Template from './Template';

class Food extends Component {

    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
          isHovering: false,
        };
      }
      handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }



  render() {
    return (
<Template menu="Food">

<div className="container-fluid" id="foodmenu">
  <div className="row">
    <div className="col-sm">
<div className="card-container" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
{this.state.isHovering && <div className="back"><h3>Ramen</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id enim nec dolor cursus posuere at non dolor. Sed eget tellus non dolor viverra congue non non velit. Duis fermentum viverra erat, ut dapibus magna porttitor ac. Vivamus turpis lorem, pharetra ac elit nec, convallis aliquam lectus. Suspendisse consequat, ligula at fermentum egestas, massa est pharetra ante, a posuere dolor mauris id nibh. Proin a est dictum, posuere dui nec, venenatis magna. Quisque ut malesuada magna. Vivamus ac turpis nec justo ultricies tristique id nec nisl.</p></div>}
  <a href="/noodles" >
    <img src="https://loremflickr.com/320/360/noodles"  alt="noodlepic" class="img-fluid"/>
  </a>
  </div>
    </div>

       <div className="col-sm">
<div className="card-container" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
{this.state.isHovering && <div className="back"><h3>Exotic Foods</h3>
</div>}
  <a href="/noodles" >
    <img src="https://loremflickr.com/320/360/breakfast"  alt="exoticfood" class="img-fluid"/>
  </a>
  </div>
    </div>
    

    <div className="col-sm">
<div className="card-container" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
{this.state.isHovering && <div className="back"><h3>Ramen</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id enim nec dolor cursus posuere at non dolor. Sed eget tellus non dolor viverra congue non non velit. Duis fermentum viverra erat, ut dapibus magna porttitor ac. Vivamus turpis lorem, pharetra ac elit nec, convallis aliquam lectus. Suspendisse consequat, ligula at fermentum egestas, massa est pharetra ante, a posuere dolor mauris id nibh. Proin a est dictum, posuere dui nec, venenatis magna. Quisque ut malesuada magna. Vivamus ac turpis nec justo ultricies tristique id nec nisl.</p></div>}
  <a href="/noodles" >
    <img src="https://loremflickr.com/320/360/drinks"  alt="drinkspic" class="img-fluid"/>
  </a>
  </div>
    </div>
  </div>

 <div className="row" id="menurow2">
    <div className="col-sm">
<div className="card-container" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
{this.state.isHovering && <div className="back"><h3>Ramen</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id enim nec dolor cursus posuere at non dolor. Sed eget tellus non dolor viverra congue non non velit. Duis fermentum viverra erat, ut dapibus magna porttitor ac. Vivamus turpis lorem, pharetra ac elit nec, convallis aliquam lectus. Suspendisse consequat, ligula at fermentum egestas, massa est pharetra ante, a posuere dolor mauris id nibh. Proin a est dictum, posuere dui nec, venenatis magna. Quisque ut malesuada magna. Vivamus ac turpis nec justo ultricies tristique id nec nisl.</p></div>}
  <a href="/noodles" >
    <img src="https://loremflickr.com/320/360/dessert"  alt="dessertspic" class="img-fluid"/>
  </a>
  </div>
    </div>

       <div className="col-sm">
<div className="card-container" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
{this.state.isHovering && <div className="back"><h3>Exotic Foods</h3>
</div>}
  <a href="/noodles" >
    <img src="https://loremflickr.com/320/360/meat"  alt="meatpic" class="img-fluid"/>
  </a>
  </div>
    </div>
    

    <div className="col-sm">
<div className="card-container" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
{this.state.isHovering && <div className="back"><h3>Ramen</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id enim nec dolor cursus posuere at non dolor. Sed eget tellus non dolor viverra congue non non velit. Duis fermentum viverra erat, ut dapibus magna porttitor ac. Vivamus turpis lorem, pharetra ac elit nec, convallis aliquam lectus. Suspendisse consequat, ligula at fermentum egestas, massa est pharetra ante, a posuere dolor mauris id nibh. Proin a est dictum, posuere dui nec, venenatis magna. Quisque ut malesuada magna. Vivamus ac turpis nec justo ultricies tristique id nec nisl.</p></div>}
  <a href="/noodles" >
    <img src="https://loremflickr.com/320/360/snacks"  alt="snack" class="img-fluid"/>
  </a>
  </div>
    </div>
  </div>
</div>


  </Template>
    );

  }
}

export default Food;

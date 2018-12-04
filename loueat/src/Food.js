import React, { Component } from 'react';
import './App.css';
import Template from './Template';
import {Link} from 'react-router-dom';


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
  <Link to="/noodles" >    
<div className="card-container" id="ramen"   onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
<img src="https://loremflickr.com/320/360/noodles"  alt="noodlepic" className="img-fluid"/>
{this.state.isHovering && 
  <div>
      <div style ={{position: 'absolute', top:140, left: 120}} id="ramenclick"> Ramen</div>
 
    </div>}

  </div> 
  </Link>
    </div>

       <div className="col-sm">
       <Link to="/spicy" >
<div className="card-container" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
<img src="https://loremflickr.com/320/360/spicy"  alt="exoticfood" className="img-fluid"/>
{this.state.isHovering && 
<div>
      <div style ={{position: 'absolute', top:140, left: 120}} id="ramenclick"> Spicy</div>
</div>}
  
  </div>
  </Link>
    </div>
    

    <div className="col-sm">
<Link to="/drinks">
<div className="card-container" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}> 
<img src="https://loremflickr.com/320/360/drinks"  alt="drinkspic" className="img-fluid"/>
{this.state.isHovering && <div>
  <div style ={{position: 'absolute', top:140, left: 100}} id="ramenclick"> Drinks</div>
</div>}
  
  </div>
    </Link>
  </div>
  </div>

 <div className="row" id="menurow2">
    <div className="col-sm">
    <Link to="/desserts" >
<div className="card-container" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}> 
<img src="https://loremflickr.com/320/360/dessert"  alt="dessertspic" className="img-fluid"/>
{this.state.isHovering && <div>
  <div style ={{position: 'absolute', top:140, left: 75}} id="ramenclick"> Desserts</div>
</div>}
  
   
  </div></Link>
    </div>

       <div className="col-sm">
       <Link to="/meat" >
<div className="card-container" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
<img src="https://loremflickr.com/320/360/meat"  alt="meatpic" className="img-fluid"/>
{this.state.isHovering && <div>
  <div style ={{position: 'absolute', top:140, left: 120}} id="ramenclick"> Meat</div>
</div>}

  </div></Link>
    </div>
    

    <div className="col-sm">
    <Link to="/snacks" >
<div className="card-container" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
<img src="https://loremflickr.com/320/360/snacks"  alt="snack" className="img-fluid"/>
{this.state.isHovering && <div >
  <div style ={{position: 'absolute', top:140, left: 100}} id="ramenclick"> Snacks</div>
</div>}
 
    

  </div></Link>
    </div>
  </div>
</div>


  </Template>
    );

  }
}

export default Food;

import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Template from './Template';



class Travel extends Component {

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
<Template menu="Travel">

<div className="container-fluid"style={{ padding: 0 }}>
<h2 id="continentAsia" ><img className="img-fluid" src="img/largecrane.ico" alt="crane"style={{ height: "25px", width: "25px"}}/>Asia</h2>
<div className="row"id="asia1" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}><Link to="kyoto">
<span>
  <img className="img-fluid"  src="img/cherryblossom.jpg" align="left" alt=""style={{ height: "40px", width: "200px"}}/>
</span>
<span id= "zone">Kyoto</span>
</Link>
 
</div> 

<div className="row"id="asia1" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}><Link to="hakone">
<span>
  <img className="img-fluid"  src="img/cherryblossom.jpg" align="left" alt=""style={{ height: "40px", width: "200px"}}/>
</span>
<span id= "zone">Hakone</span>
 </Link>
</div> 


<h2 id="continentEU" >Europe<img className="img-fluid" src="img/EU.ico" alt="euflag"style={{ height: "25px", width: "25px"}}/></h2>
<div className="row"id="asia1" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}><Link to="barcelona">
<span>
  <img className="img-fluid"  src="img/cherryblossom.jpg" align="left" alt=""style={{ height: "40px", width: "200px"}}/>
</span>
<span id= "zone">Barcelona</span>
 </Link>
</div> 

<div className="row"id="asia1"onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}><Link to="marseilles">
<span>
  <img className="img-fluid"  src="img/cherryblossom.jpg" align="left" alt=""style={{ height: "40px", width: "200px"}}/>
</span>
<span id= "zone">Marseilles</span>
 </Link>
</div> 

<h2 id="continentNA" >North America<img className="img-fluid" alt="" src="img/NA.jpg"style={{ height: "30px", width: "35px"}}/></h2>
<div className="row"id="asia1" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}><Link to="pei">
<span>
  <img className="img-fluid"  src="img/cherryblossom.jpg" align="left" alt=""style={{ height: "40px", width: "200px"}}/>
</span>
<span id= "zone">PEI</span>
 </Link>
</div> 

<div className="row"id="asia1" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}><Link to="florida">
<span>
  <img className="img-fluid"  src="img/cherryblossom.jpg" align="left" alt=""style={{ height: "40px", width: "200px"}}/>
</span>
<span id= "zone">Florida</span>
 </Link>
</div> 

 </div> {/*container-fluid */}



  </Template>
    );

  }
}

export default Travel;

import React, { Component } from 'react';
import Template from './Template';


class Hakone extends Component {
  render() {
    return (<Template menu="Travel">
<div className="blog">
    <div className="container">
           
            <div className="row">
           
                    <h2><span className="ion-minus"></span>HAKONE<span className="ion-minus"></span></h2>
                    
          
            </div>  
                
           <div className="row">
			
			    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
				
                
                        <img src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?h=350&auto=compress&cs=tinysrgb" alt="" width="100%" />
					</div>
					<div>

                        <h2 style = {{height: 50, margin:0}}>Post Title</h2>
                            
                            <hr style={{margin:0, width:400 }}/>
                           
						<span>
                                <p><i className="fas fa-user"></i>Louie Tse<br/> 
								<i className="fas fa-clock"></i>December 20, 2018</p> 
                                <hr style={{margin:0, width:400 }}/>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</p>
                                <p>something something</p>
                                <p>something</p>
                                <p> something lala</p>


                        </span>
								
                                
                                
                               
                    </div>
					

                
							
                                <span>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                                </span>
						 
							
						
					
					
          
				
				
    </div>
</div>
</div>
   
    
    
      </Template>);


  }
}

export default Hakone;

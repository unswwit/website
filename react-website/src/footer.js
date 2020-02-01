import React, { Component } from 'react'

class Footer extends Component{
    
	render(){
		return (
            <div>
            <div class="row footer">
                <div class="col" style={{padding: "60px"}}>
                    <p> Subscribe to UNSW WIT via Email</p>
                    <p> Biscuit lollipop jujubes sugar plum ice cream bear claw danish topping I love.
                    </p>
                    <div>
                    <input type="text" name="mail" placeholder="Email Address"/>
                    <button class="button btn-subscribe">Subscribe</button>   
                    </div>
                </div>

                <div>
                <ul style={{'list-style': 'none', padding:"50px"}}>
                    <li><a href="/">About Us</a></li>
      			    <li><a href="/our-team">Our Team</a></li>
      			    <li><a href="/join-us">Join Us</a></li>
				    <li><a href="/sponsors">Sponsors</a></li>
				    <li><a href="/contact-us">Contact Us</a></li>
                 </ul>
                </div>
            </div>
            <div class="row logo">
                <div class="col" style={{margin:'10px',left: '40px'}}> 
                    <p>&copy; UNSW WIT 2020</p>
                </div>
                <u class="icon" style={{'list-style': 'none',  margin:"10px", 'padding-right': '20px' }}> 
                    
                    <li><img src={process.env.PUBLIC_URL + '/twitter.png'} className="" alt="banner" resizeMode='contain'
                		style={{width:'25px', height:'25px'}} /></li>
                    <li><img src={process.env.PUBLIC_URL + '/facebook.png'} className="" alt="banner" resizeMode='contain'
                    style={{width:'25px', height:'25px'}} /></li>
                    <li> &copy; </li>
                </u>
            </div>
            </div>
            
		);

	}
}

export default Footer
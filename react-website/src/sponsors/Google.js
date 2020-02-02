import React, { Component } from "react";

class Google extends Component {	 
	render() {
		return (
            <div className='subheader'>
                <div className='major'>
                    <p>Google is a multinational company which provides a range of internet services and products. Along with Google's core search engine, they also offer other software services including cloud storage, social networking and navigation, as well as leading the development of the Android operating system and Chrome web browsers. Google has also expanded into partnering with electronic manufacturers to create hardware such as smartphones, smart speakers and virtual reality products.</p>
                    <p>Google's mission, " to organise the world's information and make it universally accessible and useful " is echoed through their 5-year goal to direct $1 billion in grants and 1 million volunteer hours to non-profit organisations using technology to build a more just and equitable world. This includes closing the global education gap through online platforms offering lesson plans and translated books, and supporting local economies through ensuring people have access to the skills they need to succeed in a digital world. Google is also advancing sustainability through developing new solutions for responsible energy use and expecting the highest ethical standards throughout their supply chain.</p>
                </div>
                <br></br>
                <a href="https://careers.google.com/" className="button" >Visit Google</a>
            </div>
        );
	}
}

export default Google;
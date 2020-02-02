import React from 'react'
class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <img src={process.env.PUBLIC_URL + '/54350237_2008106259494245_4144372870585253888_o.jpg'} class="banner" alt="banner" style={{maxHeight: 768}}/>
                <h1 class="header">Contact Us</h1>
                
                <div class='row' style={{'padding': '0px 100px 100px '}}> 
                    <div class="col-md-4">
                        <p className='subheader' style={{textAlign: 'left'}}><strong>Send Through a General Inquiry</strong></p>
                        <form action="mailto:exec@unswwit.com" method="post" enctype="text/plain" style={{color:'orange'}}>
                            <strong>Name</strong>
                            <br/>
                            <input type="text" name="name"/>
                            <br/>
                            <strong>E-mail</strong>
                            <br/>
                            <input type="text" name="mail" />
                            <br/>
                            <strong>Message</strong>
                            <br/>
                            <textarea name="message" rows="5" style={{width:'200px', borderColor: 'orange', 'background-color': 'rgb(247, 235, 220)'}}></textarea>
                            <br/>
                            <input type="submit" value="Send" class="button" style={{float: 'right', width: '100px'}} />
                        </form>
                    </div>

                    <div class="col-lg-8">
					<p className='subheader' style={{textAlign: 'center'}}><strong>Contact Our Team</strong></p>
                        <div class='row'> 
                            <div class='col-sm-4' style={{'text-align': 'right'}}>
                                <ul style={{'list-style': 'none'}}>
                                    <li>Vivian Shen</li>
                                    <li>Amanda Li</li>
                                    <li>Kelly Liang</li>
                                    <li>Elizabeth Zhong</li>
                                </ul>
                                <ul style={{'list-style': 'none'}}>
                                    <li>Vivian Wong</li>
                                    <li>Gabrielle Younes</li>
                                    <li>Rhea Thomas</li>
                                    <li>Alison Chin</li>
                                    <li>Elicia Au Duong</li>
                                    <li>Felicia Ee</li>  
                                     
                                </ul>
                            </div>
                            <div class='col-lg-2' style={{'text-align': 'left'}}>
                                <ul style={{'list-style': 'none', 'padding-left': '5px'}}>
                                    <li><a href="mailto:president@unswwit.com">president@unswwit.com</a></li>
                                    <li><a href="mailto:vp@unswwit.com">vp@unswwit.com</a></li>
                                    <li><a href="mailto:secretary@unswwit.com">@unswwit.com</a></li>
                                    <li><a href="mailto:treasurer@unswwit.com">treasurer@unswwit.com</a></li>
                                </ul>
                                <ul style={{'list-style': 'none', 'padding-left': '5px'}}>
                                    <li><a href="mailto:vivianwong@unswwit.com">vivianwong@unswwit.com</a></li>
                                    <li><a href="mailto:gabriella@unswwit.com">gabrielle@unswwit.com</a></li>
                                    <li><a href="mailto:rhea@unswwit.com">rhea@unswwit.com</a></li>
                                    <li><a href="mailto:alison@unswwit.com">alison@unswwit.com</a></li>
                                    <li><a href="mailto:elicia@unswwit.com">elicia@unswwit.com</a></li>
                                    <li><a href="mailto:felicia@unswwit.com">felicia@unswwit.com</a></li> 
                                </ul>
                            </div>
                            <div class='col-sm-4' style={{'text-align': 'left', 'padding-top': '112px'}}>
                                <ul style={{'list-style': 'none', 'padding-left': '100px'}}>
                                    <li><a href="mailto:education@unswwit.com">education@unswwit.com</a></li>
                                    <li><a href="mailto:events@unswwit.com">events@unswwit.com</a></li>
                                    <li><a href="mailto:externals@unswwit.com">externals@unswwit.com</a></li>
                                    <li><a href="mailto:hr@unswwit.com">hr@unswwit.com</a></li>
                                    <li><a href="mailto:it@unswwit.com">it@unswwit.com</a></li>
                                    <li><a href="mailto:marketing@unswwit.com">marketing@unswwit.com</a></li> 
                                </ul>
                            </div>
                            
                        </div>
				    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;

import React from 'react'

class ContactUs extends React.Component {
    render() {
        return (
            <div>
                <h1 className='centre'>Contact Us</h1>
                <div class='row'> 
                    <div class='column' className='column' style={{float:"left", width: '20%'}}>
                        <p className='subheader' style={{textAlign: 'center'}}>Send Through a General Inquiry</p>
                        <form action="mailto:someone@example.com" method="post" enctype="text/plain" style={{width : "35%"}}>
                            Name
                            <br/>
                            <input type="text" name="name" />
                            <br/>
                            E-mail
                            <br/>
                            <input type="text" name="mail" />
                            <br/>
                            Message
                            <br/>
                            <textarea name="message" rows="5"></textarea>
                            <br/>
                            <input type="submit" value="Send" />
                        </form>
                    </div>
                    <div class='column' className='column' style={{float: 'left', width : '80%'}}>
                        <p className='subheader' style={{textAlign: 'center'}}>Contact Our Team</p>
                        <div class='row'> 
                            <div class='column' className ='column' style={{float: 'left', width : '15%', textAlign: 'right'}}>
                                <p>Vivian Shen</p>
                                <p>Amanda Li</p>
                                <p>Kelly Liang</p>
                                <p>Elizabeth Zhong</p>
                                <br/>
                                <p>Vivian Wong</p>
                                <p>Gabrielle Younes</p>
                                <p>Rhea Thomas</p>
                                <p>Alison Chin</p>
                                <p>Elicia Au Duong</p>
                                <p>Felicia Ee</p>  
                            </div>
                            <div class='column' className ='column' style={{float: 'left', width : '15%'}}>
                                <p>president@unswwit.com</p>
                                <p>vp@unswwit.com</p>
                                <p>secretary@unswwit.com</p>
                                <p>treasurer@unswwit.com</p>
                                <br />
                                <p>vivianwong@unswwit.com</p>
                                <p>gabriella@unswwit.com</p>
                                <p>rhea@unswwit.com</p>
                                <p>alison@unswwit.com</p>
                                <p>elicia@unswwit.com</p>
                                <p>felicia@unswwit.com</p> 
                            </div>
                            <div class='column' className = 'column' style={{float: 'left', width : '15%'}}>
                                <p></p> <br/>
                                <p></p> <br/>
                                <p></p> <br/>
                                <p></p> <br/>
                                <br/>
                                <p>education@unswwit.com</p>
                                <p>events@unswwit.com</p>
                                <p>externals@unswwit.com</p>
                                <p>hr@unswwit.com</p>
                                <p>it@unswwit.com</p>
                                <p>marketing@unswwit.com</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs

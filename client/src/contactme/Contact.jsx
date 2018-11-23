import React, { Component } from 'react';
import axios from 'axios'; 



const placeholderDesign = {
  border: 'none',
  borderBottom:'solid 0.2px #9055fb',
  // boxShadow: '0px 3px 12px 0px rgba(155, 155, 163, 1)',
  fontSize: '18px',
  width: '100%',
  marginBottom: '60px',
  backgroundColor: '#FCFCFC'
}

const textAreaDesign = {
  width: '100%',
  minHeight: '12px',
  marginTop: '30px',
  marginBottom: '60px',
  border: 'none',
  borderBottom:'solid 0.2px #9055fb',
  fontSize: '18px',
  fontColor: '#585c61'
}



class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      content: ''
    }
  }

   handleName = (e) => {
     this.setState({ name: e.currentTarget.value });
   }

   handleEmail = (e) => {
    this.setState({ email: e.currentTarget.value });
   }
   
   handleContent = (e) => {
    this.setState({ content: e.currentTarget.value });
   }


  async sendEmail(e, name, email, message) {
    // e.preventdefault()
    // this.props.history.push('/contact/send')
    // (async () => {
      const rawResonse = await fetch('http://localhost:3000/contact/send', {
        method: 'POST', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Security-Policy': 'font-src *'
        },
        // body: JSON.stringify({
        //   name: name,
        //   email: email,
        //   message: message
        // })
      })
        .then(res => JSON.parse(res))
        .then(res => console.log('response: ', res))
        .catch(err => console.error('error: ', err))
        
  



    // })
      // this.props.history.push('/contact')
  }

  // sendEmail(e, name, email, message) {
  //   // e.preventdefault()
  //   // this.props.history.push('/contact/send')
  //   fetch('http://localhost:3000/contact/send', {
  //     method: 'POST', 
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Content-Security-Policy': 'font-src *'
  //     },
  //     body: JSON.stringify({
  //       name: name,
  //       email: email,
  //       message: message
  //     })
  //   })
  //     .then(res => JSON.parse(res))
  //     .then(res => console.log('response: ', res))
  //     .catch(err => console.error('error: ', err))
      

  //     // this.props.history.push('/contact')
  // }



  render() { 
    return ( 
      <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
        <h1 style={{margin: '20px 0px 60px 0px'}}>Contact Dror</h1>
        <form method="POST" style={{margin: '0 auto', width: '39%', textAlign:'left', fontColor: '#e5e5e5'}}>
          <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleName} style={placeholderDesign} required/>
          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail} style={placeholderDesign} required/>
          <input type="text" name="content" placeholder="Message" value={this.state.content} onChange={this.handleContent} style={placeholderDesign} required/>
          {/* <div style={textAreaDesign} contentEditable="true">Messsage</div> */}
          <button type="submit" onClick={()=>this.sendEmail(this.state.name, this.state.email, this.state.message)} style={{display:'flex', justifyContent: 'center', margin: '0 auto', textAlign: 'center', width: '120px', height: '35px', borderRadius: '8px', backgroundColor: '#ffaa19', color: 'white', fontSize: '16px'}}>Send</button>
        </form>

       


      </div>
     );
  }
}
 
export default Contact;
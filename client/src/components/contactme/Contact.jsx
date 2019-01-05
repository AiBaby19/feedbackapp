import React, {Component} from 'react';

const placeholderDesign = {
    border: 'none',
    borderBottom: 'solid 0.2px #9055fb',
    // boxShadow: '0px 3px 12px 0px rgba(155, 155, 163, 1)',
    fontSize: '18px',
    width: '100%',
    marginBottom: '60px',
    backgroundColor: '#FCFCFC'
}

// const textAreaDesign = {   width: '100%',   minHeight: '12px',   marginTop:
// '30px',   marginBottom: '60px',   border: 'none',   borderBottom:'solid 0.2px
// #9055fb',   fontSize: '18px',   fontColor: '#585c61' }

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            message: '',
            thankyoumodal: false
        }
    }

    handleName = (e) => {
        this.setState({name: e.currentTarget.value});
    }

    handleEmail = (e) => {
        this.setState({email: e.currentTarget.value});
    }

    handleMessage = (e) => {
        this.setState({message: e.currentTarget.value});
    }

    async sendEmail(name, email, message) {
        if (!name || !email || !message) {
            return alert("Please fill all the form")
        }
  
        await fetch('/contact/send', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Content-Security-Policy': 'font-src *'
            },
          
            body: JSON.stringify({name: name, email: email, message: message})
        })

        // const body = await response
        //     .text()
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))

        this.setState({ thankyoumodal: true });

    }

    render() {
        return (
            <div
                style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center'
            }}>
                <h1 style={{
                    margin: '20px 0px 60px 0px'
                }}>Contact me :D</h1>
                <form
                    action="/contact/send"
                    method="POST"
                    style={{
                    margin: '0 auto',
                    width: '39%',
                    textAlign: 'left',
                    fontColor: '#e5e5e5'
                }}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleName}
                        style={placeholderDesign}
                        required/>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleEmail}
                        style={placeholderDesign}
                        required/>
                    <input
                        type="text"
                        name="message"
                        placeholder="Message"
                        value={this.state.message}
                        onChange={this.handleMessage}
                        style={placeholderDesign}
                        required/> {/* <div style={textAreaDesign} contentEditable="true">Messsage</div> */}
                    <button
                        type="button"
                        onClick={() => this.sendEmail(this.state.name, this.state.email, this.state.message)}
                        style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '0 auto',
                        textAlign: 'center',
                        width: '120px',
                        height: '35px',
                        borderRadius: '8px',
                        backgroundColor: '#ffaa19',
                        color: 'white',
                        fontSize: '16px'
                    }}>Send</button>
                </form>

                <div
                    className="social"
                    style={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: '0 auto',
                    textAlign: 'center',
                    justifyContent: 'space-between',
                    marginTop: '90px',
                    width: '150px'
                }}>
                    <img
                        src="/img/git.jpg"
                        alt="git"
                        height="50"
                        width="50"
                        style={{
                          cursor: "pointer"
                      }}
                        onClick={() => window.open("https://github.com/dvash999")}/>
                    <img
                        src="/img/ld.png"
                        alt="ld"
                        height="50"
                        width="50"
                        style={{
                          cursor: "pointer"
                      }}
                        onClick={() => window.open("https://www.linkedin.com/in/dror-dvash/")}/>
                </div>
            </div>
        );
    }
}

export default Contact;
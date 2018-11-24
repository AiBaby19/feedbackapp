// , StrictMode 
import React, { Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PortfolioPage from './portfolio/PortfolioPage';
import MeetMe from './meetme/MeetMe';
import Contact from './contactme/Contact';
import NavBar from './general/NavBar';
import Home from './Home';
import {observer, inject} from 'mobx-react';



@inject("store")
@observer
class App extends Component {
  // state = {
  //   response: '',
  //   post: '',
  //   responseToPost: '',
  // };
  // componentDidMount() {
  //   this.callApi()
  //     .then(res => this.setState({ response: res.express }))
  //     .catch(err => console.log(err));
  // }
  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);
  //   return body;
  // };
  // handleSubmit = async e => {
  //   e.preventDefault();
  //   const response = await fetch('/api/world', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ post: this.state.post }),
  //   });
  //   const body = await response.text();
  //   this.setState({ responseToPost: body });
  // };

  constructor() {
    super();
    this.state = {
      isButtonOn: true,
      flickerLights: false
    }
  }

  // toggleSwitch = () => {

  //   this.setState({ flickerLights: true});

  //   setTimeout(()=> {
  //   this.setState(prevState => ({
  //     isButtonOn: !prevState.isButtonOn
  //   }));
  // },1500)
  // }

  
    render() {
      return (
        <div className="app">
          {/* <StrictMode> */}
            {this.state.isButtonOn ? 
            (<div>
              
              <BrowserRouter>
              <div>
  
                {/* <div className="fade-in"> */}
                <div>
                  <NavBar/>
                </div>
  
                <Switch>
                  <Route path="/" component={Home} exact/>
                  <Route path="/meetme" component={MeetMe} exact/>Meet Me
                  <Route path="/portfoliopage" component={PortfolioPage}exact/>Portfolio
                  <Route path="/contact" component={Contact} exact/>Contact
                </Switch>
                </div>
                {/* </div> */}
              </BrowserRouter>
            </div>)
            :
            <div style={{backgroundColor:"black", height:'100vh', padding:'0', margin:'0'}} className={this.state.flickerLights?"flicker-out-1" : null}>
              <h1 style={{color:'white', textAlign:'center', paddingTop:'250px'}}>SWITCH ME ON.</h1>
              <div className="switch" onClick={this.toggleSwitch}>
                <input type="checkbox" name=""/>
                <label></label>
              </div>
            </div>}
          
            
          {/* </StrictMode> */}
        </div>
      );
    }
  }
export default App;
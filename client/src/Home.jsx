import React, { Component, StrictMode } from 'react';
import './home.css';

class Home extends Component {
  render() {
    return (
      <div className="app">
        <StrictMode>
            <h1 style={{textAlign: 'center', letterSpacing: "5px"}}>Full Stack Developer</h1>
            <br/>
            <h4 style={{textAlign: 'center', margin: '40px', fontWeight: '200'}}><span className="typewriter">Useful Products. Beatifuly Designed. Simple Code.</span></h4>
            <div style={{textAlign: 'center', margin:'50px'}}>
              <img src="/img/porfolioimg.png" alt="themepic" height="200" width="500" className="flicker-in-2"/>
              <br/>
              <button type="button" onClick={()=>this.props.history.push('/contact')} style={{margin: '60px', width: '120px', height: '35px', borderRadius: '8px', backgroundColor: '#ffaa19', color: 'white', fontSize: '16px'}}className="bounce-in-top">Contact</button>
            </div>
        </StrictMode>
      </div>
    );
  }
}

export default Home;

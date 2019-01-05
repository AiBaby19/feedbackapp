import React, { Component } from 'react';
import Modal from '../modal/Modal';
import { observer, inject } from 'mobx-react';
import './meetme.css';

const showSkillsList = {
  height: '360px',
  backgroundColor: 'white',
  width: '25%',
  border:'solid 0.2px #9055fb',
  boxShadow: '0px 3px 12px 0px rgba(155, 155, 163, 1)',
  zIndex: '0'
}

const rotate = {
  // -ms-filter: "FlipH";
  // -moz-transform: scaleX(-1);
  // -o-transform: scaleX(-1);
  // -webkit-transform: scaleX(-1);
  transform: 'scaleX(-1)',
  filter: 'FlipH'
}

const numberIcons = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  margin: '0 auto',
  marginTop: '15px',
  width: 'auto',
  maxWidth: '90%',
  textAlign: 'left',
  alignItems: 'center',
}

@inject(allStores => ({
  certifications: allStores.store.certifications
}))

@observer
class MeetMe extends Component {
  state = { 
    isModal : false,
    certificationIndex: null
   }   

   toggleModal = (index) => {
    this.setState({ isModal : !this.state.isModal,
                    certificationIndex: index });
   }

  render() { 
    return ( 
      <div>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <h3 style={{textAlign: 'center', marginTop: '-20px', textShadow: '0px 3px 12px 0px rgba(155, 155, 163, 1)'}}>Hi, my name is Dror.</h3>
        <br/>
        <div className="colorRow" style={{backgroundColor:'#F4F8F9', height:'200px',  zIndex: '-10', textAlign: 'center', opacity: '.2'}}></div>
        
        <p className="introduction" style={{margin: '0 auto', marginTop: '-180px', color: '#9aa0a5', width: '50%', textAlign: 'center', fontSize: '15px', fontWeight: '300'}}> Nice to meet you! :) Im a Full Stack Web Developer with an obssesion to build successful digital assets online.</p>
        
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '90%', margin: '0 auto', marginTop: '60px'}}>

        
          <div className="frontSkills" style={showSkillsList}>
          {/* <button type="button" style={{display: 'flex', marginTop: '8px', border: 'none', color: '#FFAA19', fontSize: '24px'}}>+</button> */}
            <h3 style={{textAlign: 'center', paddingTop: '30px', marginBottom: '30px'}}>Full Stack</h3>

            <div style={numberIcons}>
            <div>
                <img src="/img/html5.svg" height="50px" width="40px" alt="html5"/>
              </div>
              <p style={{fontSize: '14px', }}>HTML & CSS</p>
              <div>95%</div>
            </div>

            <div style={numberIcons}>
            <div>
                <img src="/img/javascript.svg" height="50px" width="40px" alt="javascript"/>
              </div>
              <p style={{fontSize: '14px', }}>JS / ES6&7</p>
              <div>90%</div>
            </div>

            <div style={numberIcons}>
            <div>
                <img src="/img/react.svg" height="50px" width="40px" alt="react"/>
              </div>
              <p style={{fontSize: '14px', }}>REACT</p>
              <div>85%</div>
            </div>

            <div style={numberIcons}>
            <div>
                <img src="/img/nodejs.svg" height="50px" width="40px" alt="nodejs"/>
              </div>
              <p style={{fontSize: '14px', }}>NODEJS</p>
              <div>82%</div>
            </div>

            
          </div>

          <div className="essentials" style={showSkillsList}>
          <h3 style={{textAlign: 'center', paddingTop: '30px', marginBottom: '30px'}}>Essential Skills</h3>

          <div style={numberIcons}>
            <div>
            <img src="/img/ux.svg" height="50px" width="40px" alt="ux/ui"/>
              </div>
              <p style={{fontSize: '14px', }}>UX/UI</p>
              <div>93%</div>
            </div>

            <div style={numberIcons}>
            <div>
            <img src="/img/selflearner.svg" height="50px" width="40px" alt="selflearner"/>
              </div>
              <p style={{fontSize: '14px', }}>AUTODIDACT</p>
              <div>97%</div>
            </div>

            <div style={numberIcons}>
            <div>
            <img src="/img/teamplayer.svg" height="50px" width="40px" alt="teamplayer"/>
              </div>
              <p style={{fontSize: '14px', }}>TEAM PLAYER</p>
              <div>99%</div>
            </div>

            <div style={numberIcons}>
              <div>
                <img src="/img/think.svg" height="50px" width="40px" alt="think" style={rotate}/>
                </div>
                <p style={{fontSize: '14px', }}>PROBLEM SOLVING</p>
                <div>91%</div>
            </div>
          </div>

          <div className="certifications" style={showSkillsList}>
            <h3 style={{textAlign: 'center', paddingTop: '30px', marginBottom: '30px'}}>On My Free Time</h3>

            {this.props.certifications.map((certification, index) => 
              
              (<div key={index} style={numberIcons} onClick={()=>this.toggleModal(index)}>           
                <div>
                  <img src={certification.smallImg} height="45px" width="65px" alt={certification.smallImgAlt}/>
                </div>
                <p style={{fontSize: '14px', margin: '0 auto'}} className="certificationName">{certification.title}</p> 
              </div>) 
            )}
            {/* <button type="button" style={{display: 'flex', margin: '0 auto', marginTop: '16px', border: 'none', color: '#FFAA19', fontSize: '14px'}}>Watch All</button> */}
          </div>
        </div>
              {this.state.isModal ? <Modal closeModal={this.toggleModal} certificationIndex={this.state.certificationIndex} certifications={this.props.certifications}/> : null}
      </div>
    </div>
     );
  }
}
 
export default MeetMe;
import React, { Component } from 'react';



const blackBackground = {
  position: 'fixed',
  margin: '0 auto',
  width: '100%',
  height: '100vh',
  top: '0px',
  left: '0px',
  zIndex: '8',
  background: 'rgba(0, 0, 0, 0.7)'
}

const modalDesign = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  border: 'solid 2px lightgrey',
  borderRadius: '5px',
  width: '800px',
  zIndex: '9',
  minHeight: '400px',
  height: 'auto'
}

const contentImg = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  margin: '40px'
}

class Modal extends Component {
  state = {  }


  //click outside modal to close
  componentWillMount() {
    document.addEventListener('click', this.closeThisModal, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeThisModal, false)
  }

  closeThisModal = (e) => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.props.closeModal();
  }

  
  render() { 
    const index = this.props.certificationIndex;
    const certifications = this.props.certifications;
    return ( 
      <div style={blackBackground}>
        <div style={modalDesign} >
          <button onClick={(e)=>this.closeThisModal(e)} style={{border: 'none', color: 'red', fontSize: '18px', margin: '5px'}}>X</button>
          <div style={{ minHeight: '320px',height: 'auto', width: '100%', marginTop: '20px', textAlign: 'center'}} ref={node=>this.node=node}>
            <h1>{certifications[index].title}</h1>
            <div style={contentImg}>
              <p style={{display: 'flex', fontSize: '16px', width: '50%', textAlign: 'left'}}>{certifications[index].details}</p>
              <div className="3d-outer-container" style={{perspective: "40px"}}>
                <div className="3d-inner-container">
                <a target="_blank" rel="noopener noreferrer" href={certifications[index].link}><img src={certifications[index].bigImg} alt={certifications[index].bigImgAlt} height='250px' width='350px'/></a>
                </div>
              </div>
            </div>
            {/* <div style={{margin: 'auto 0', textAlign: 'center'}}>
              <button style={{border: 'solid 1px lightgrey', width: '150px', height: '30px'}} onClick={()=>console.log('hi')}><a href={certifications[index].link}>Watch</a></button>
            </div> */}
          </div>
        </div>
      </div>
     );
  }
}
 
export default Modal;
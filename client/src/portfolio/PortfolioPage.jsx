import React, { Component } from 'react';
import { inject } from 'mobx-react';
import './portfolioPage.css';


@inject(allStores => ({
  projects: allStores.store.projects
}))
class PortfolioPage extends Component {
  state = {
    cardopen: false
  }

  render() { 
    return ( 
      <div>
        <h1 style={{fontWeight: '200', width: '90%', margin: '0 auto', marginBottom: '90px', textAlign: "center"}}>Recent Work</h1>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', padding: '0px 150px'}}>

          <div className="wrapper">
            <ul className="stage">
              {this.props.projects.map((project,index) => {
                return (
                  <li key={index} className="scene" style={{border: 'solid 1px lightgrey'}}>
                  <div className="movie">
                    <div className="poster"><img src={project.titleImg} alt={project.titleImgAlt} width="260" height="400"/></div>
                    <div onClick={()=>window.open(project.link)} className="info">

                      <header><img src={project.bigImg} alt={project.bigImgAlt} width="240" height="195"/>
                        {/* <h1>{project.title}</h1> */}
                        {/* <span className="year">1946</span>
                        <span className="rating">PG</span>
                        <span className="duration">130 minutes</span> */}
                      </header>
                      <p>
                        {project.details}
                      </p>
                    </div>
                  </div>
                </li>
              )})}
            </ul>
          </div>
        </div> 
      </div>
     );
  }
}
 
export default PortfolioPage;
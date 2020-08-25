import React from 'react';
import './Portfolio.css';

class Portfolio extends React.Component{
  render(){
    return(
      <div className="portfolio">
        <h2 className="portfolio-header">Portfolios</h2>

        <div className="portfolio-items">

          <div className="portfolio-item">
            <a href="www.google.com">
              <img src="https://via.placeholder.com/480x360" alt=""/>
              <h3 className='portfolio-title'>Project One</h3>
            </a>
          </div>

          <div className="portfolio-item">
            <a href="www.google.com">
              <img src="https://via.placeholder.com/480x360" alt=""/>
              <h3 className='portfolio-title'>Project One</h3>
            </a>
          </div>

          <div className="portfolio-item">
            <a href="www.google.com">
              <img src="https://via.placeholder.com/480x360" alt=""/>
              <h3 className='portfolio-title'>Project One</h3>
            </a>
          </div>

          <div className="portfolio-item">
            <a href="www.google.com">
              <img src="https://via.placeholder.com/480x360" alt=""/>
              <h3 className='portfolio-title'>Project One</h3>
            </a>
          </div>

          <div className="portfolio-item">
            <a href="www.google.com">
              <img src="https://via.placeholder.com/480x360" alt=""/>
              <h3 className='portfolio-title'>Project One</h3>
            </a>
          </div>

 



     
    
        </div>
      </div>
    )
  }
}

export default Portfolio;
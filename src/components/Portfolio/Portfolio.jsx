import React from 'react';
import './Portfolio.css';

class Portfolio extends React.Component{
  render(){
    return(
      <div className="portfolio">
        <h2 className="portfolio-header">Portfolios</h2>

        <div className="portfolio-items">

          <PortfolioItem link="http://www.google.com" img="https://via.placeholder.com/480x360" title="Project SK"/>
          <PortfolioItem link="http://www.facebook.com" img="https://via.placeholder.com/480x360" title="Project FB"/>
          <PortfolioItem link="http://www.yahoo.com" img="https://via.placeholder.com/480x360" title="Project YH"/>
          <PortfolioItem link="http://www.youtube.com" img="https://via.placeholder.com/480x360" title="Project YT"/>
    
        </div>
      </div>
    )
  }
}

function PortfolioItem(props){
  const {link, img, title} = props;
  return(
    <div className="portfolio-item">
      <a href={link}>
        <img src={img} alt=""/>
        <h3 className='portfolio-title'>{title}</h3>
      </a>
    </div>
  )
}

export default Portfolio;
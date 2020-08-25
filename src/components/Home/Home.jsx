import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import './Home.css';

window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  console.log('HI');
});

class Home extends React.Component{
  render(){
    return(
      <div className="container">
        <div>
          <h1 className="home-title">My Name is <span className="home-title-name">Sadman Sakib</span></h1>
          <h3 className="home-subtitle">I am a fullstack web developer(Frontend + Backend)</h3>
          <ul className="home-social-icons">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>

            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>

            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>

        
        
      </div>
    )
  }
}

export default Home;
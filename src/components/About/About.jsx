import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fortawesome/free-brands-svg-icons'
import { faPalette, faCode } from '@fortawesome/free-solid-svg-icons'
import './About.css';

class About extends React.Component{
  render(){
    return(
      <div className="about">
        <h2 className="about-header">About</h2>

        <div className="about-body">
          {/* <h2 className="about-title">I am <span className="about-title-name">Sadman Sakib</span> </h2> */}
          <p className="about-description">I am a fullstack web developer (Frontend + Backend). I can provide you clean & beautifull website. I work in many projects as well. you can check in the portfolio.</p>

          <table className="about-table">

            <Row info="Full Name" answer="Sadman Sakib"/>
            <Row info="Email" answer="ssakib4050@gmail.com"/>
            <Row info="Facebook" answer="facebook.com/ssakib4050"/>
            <Row info="LinkedIn" answer="linkedin.com/ssakib4050"/>

          </table>

          <h2 className="about-header">Services</h2>
          <div className="about-services">

            <div className="about-service">
              <div className="about-service-body">
                <FontAwesomeIcon icon={faPalette}/>
                <h3 className="about-info">Web Design</h3>
              </div>
              <p className="about-service-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum deleniti rerum blanditiis vitae quidem, quos libero illum eaque dolorem iusto.</p>
            </div>

            <div className="about-service">
              <div className="about-service-body">
                <FontAwesomeIcon icon={faCode}/>
                <h3 className="about-info">Web Design</h3>
              </div>
              <p className="about-service-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum deleniti rerum blanditiis vitae quidem, quos libero illum eaque dolorem iusto.</p>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

function Row(props){
  const {info, answer} = props;
  return(
    <tr>
      <td>{info} </td>:
      <td>{answer}</td>
    </tr>    
  )
}

export default About;
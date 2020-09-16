import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {  } from '@fortawesome/free-brands-svg-icons'
import { faPalette, faCode } from "@fortawesome/free-solid-svg-icons";
import "./About.css";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="about">
          <h2 className="about-header">About</h2>

          <div className="about-body">
            {/* <h2 className="about-title">I am <span className="about-title-name">Sadman Sakib</span> </h2> */}
            <p className="about-description">
              I am a fullstack web developer (Frontend + Backend). I can provide
              you clean & beautifull website. I work in many projects as well.
              you can check in the portfolio.
            </p>

            <h2 className="about-header">Contact</h2>
            <table className="about-table">
              <tbody>
                <Row info="Email" answer="ssakib5050@gmail.com" />
                <Row info="Facebook" answer="facebook.com/ssakib5050" />
                <Row info="LinkedIn" answer="linkedin.com/ssakib5050" />
                <Row info="Instagram" answer="instagram.com/ssaki54050" />
              </tbody>
            </table>

            <h2 className="about-header">Services</h2>
            <div className="about-services">
              <div className="about-service">
                <div className="about-service-body">
                  <FontAwesomeIcon icon={faPalette} />
                  <h3 className="about-info">Web Design</h3>
                </div>
                <p className="about-service-description">
                  A Web designer is someone who prepares content for the Web.
                  This role is mainly related to the styling and layout of pages
                  with content, including text and images.
                </p>
              </div>

              <div className="about-service">
                <div className="about-service-body">
                  <FontAwesomeIcon icon={faCode} />
                  <h3 className="about-info">Web Development</h3>
                </div>
                <p className="about-service-description">
                  A Web developer is a programmer who specializes in, or is
                  specifically engaged in, the development of World Wide Web
                  applications using a client–server model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

function Row(props) {
  const { info, answer } = props;
  return (
    <React.Fragment>
      <tr>
        <td>{info} </td>
        <td>: {answer}</td>
      </tr>
    </React.Fragment>
  );
}

export default About;

import React from "react";
import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Home extends React.Component {
  render() {
    return (
      <div className="container home__wrap justify-content-center align-items-center d-flex flex-column">
        <div>
          <h1 className="home__heading text-center mb-0">
            My name is
            <span className="home__heading_color"> Sadman Sakib</span>
          </h1>
          <p className="home__para text-center  mb-2">
            I am a fullstack web developer(Frontend + Backend)
          </p>
        </div>

        <div className="d-flex">
          <div className="home__icon_wrap">
            <a href="http://www.facebook.com/sakib.5050" target="_blank">
              <FontAwesomeIcon
                icon={["fab", "facebook-f"]}
                className="home__icon"
              />
            </a>
          </div>

          <div className="home__icon_wrap">
            <a href="https://www.linkedin.com/in/ssakib5050/" target="_blank">
              <FontAwesomeIcon
                icon={["fab", "linkedin-in"]}
                className="home__icon"
              />
            </a>
          </div>

          <div className="home__icon_wrap">
            <a href="https://github.com/ssakib5050" target="_blank">
              <FontAwesomeIcon
                icon={["fab", "github-alt"]}
                className="home__icon"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

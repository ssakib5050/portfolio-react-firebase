import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "./Portfolio.css";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <h2 className="portfolio-header">Portfolios</h2>

        <div className="portfolio-items">
          <PortfolioItem
            link="https://facebook-react-firebase-2.web.app/login"
            img="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Screenshot.png?alt=media&token=e97bc5d9-e784-4900-b8dc-0875b09909cf"
            title="✅Facebook v2 UI (Demo)"
          />

          <PortfolioItem
            link="https://facebook-react-firebase.web.app/"
            img="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Screenshotsssfsf.png?alt=media&token=e872c147-f4e5-4010-916b-2cdd73a28100"
            title="✅Facebook v1 UI (Demo)"
          />
          <PortfolioItem
            link="https://instagram-react-firebase-a25ec.web.app/"
            img="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Scresfsfenshot.png?alt=media&token=5aceb7a6-5b07-415b-be9d-be4940a6e295"
            title="✅Instagram UI (Demo)"
          />
        </div>
      </div>
    );
  }
}

// External Function
function PortfolioItem(props) {
  const { link, img, title } = props;
  return (
    <div className="portfolio-item">
      <a href={link} target="blank">
        <img src={img} alt="" />
        <h3 className="portfolio-title">{title}</h3>
        <FontAwesomeIcon icon={faLink} className="protfolio__icon" />
      </a>
    </div>
  );
}

export default Portfolio;

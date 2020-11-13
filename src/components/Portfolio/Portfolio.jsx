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
            img="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Firefox_Screenshot_2020-11-13T13-00-20.241Z.png?alt=media&token=74597fde-befd-4a19-be35-6707cbb9c96e"
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
          <PortfolioItem
            link="https://twitter-react-firebase-c8ca2.web.app/"
            img="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Firefox_Screenshot_2020-11-13T13-49-03.911Z.png?alt=media&token=87ce1ba9-6fe5-4a52-9f73-c1ace7a1e0d9"
            title="✅Twitter UI (Demo)"
          />

          <PortfolioItem
            link="https://fbmessenger-react-firebase.web.app/"
            img="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Screenshot.png?alt=media&token=6cd1e9ce-3922-4fb9-b9a9-b6256ebf8b3b"
            title="✅Messenger UI (Demo)"
          />

          <PortfolioItem
            link="https://react-firebase-todo-25f3d.web.app/"
            img="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Firefox_Screenshot_2020-11-13T14-12-53.568Z.png?alt=media&token=f66a2fae-4daa-416c-8474-d5c1166c4205"
            title="✅ToDo List (Demo)"
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

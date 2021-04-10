import React, { Suspense } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="px-5">
      <h1 className="font-weight-bold my-5 ">Portfolio</h1>

      <div className="portfolio__item_wrap ">
        <div className="row">
          <PortfolioItem
            image="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Firefox_Screenshot_2020-11-13T13-00-20.241Z.png?alt=media&token=74597fde-befd-4a19-be35-6707cbb9c96e"
            title="✅Facebook v2 UI (Demo)"
            link="#"
          />
          <PortfolioItem
            image="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Screenshotsssfsf.png?alt=media&token=e872c147-f4e5-4010-916b-2cdd73a28100"
            title="✅Facebook v1 UI (Demo)"
            link="#"
          />
          <PortfolioItem
            image="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Scresfsfenshot.png?alt=media&token=5aceb7a6-5b07-415b-be9d-be4940a6e295"
            title="✅Instagram UI (Demo)"
            link="#"
          />
          <PortfolioItem
            image="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Firefox_Screenshot_2020-11-13T13-49-03.911Z.png?alt=media&token=87ce1ba9-6fe5-4a52-9f73-c1ace7a1e0d9"
            title="✅Twitter UI (Demo)"
            link="#"
          />
          <PortfolioItem
            image="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Screenshot.png?alt=media&token=6cd1e9ce-3922-4fb9-b9a9-b6256ebf8b3b"
            title="✅Messenger UI (Demo)"
            link="#"
          />
          <PortfolioItem
            image="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Firefox_Screenshot_2020-11-13T14-12-53.568Z.png?alt=media&token=f66a2fae-4daa-416c-8474-d5c1166c4205"
            title="✅ToDo List (Demo)"
            link="#"
          />
        </div>
      </div>
    </div>
  );
};

function PortfolioItem({ image, title, link }) {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-4 PortfolioItem__portfolio_item cursor-pointer">
      <a
        href={link}
        target="_blank"
        className="text-decoration-none text-primary"
      >
        <figure className="PortfolioItem__figure mb-1 position-relative">
          <img src={image} alt="" className="img-fluid PortfolioItem__img" />

          <div className="PortFolioItem__icon_wrap">
            <FontAwesomeIcon icon="link" className="PortFolioItem__icon" />
          </div>
        </figure>
        <h4 className="font-weight-bold text-dark ">{title}</h4>
      </a>
    </div>
  );
}

export default Portfolio;

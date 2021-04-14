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
            image="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Scresgsgsgswtyenshot.png?alt=media&token=1eb8c8ae-1823-4c9d-8d71-e23f7b54f440"
            title="✅Facebook v2 UI Clone (Demo)"
            link="https://facebook-react-firebase-2.web.app/login"
          />
          <PortfolioItem
            image="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/dg1d21g2d1gd251g.png?alt=media&token=e18aca42-501f-43aa-aa32-466731ad9b4d"
            title="✅Facebook v1 UI Clone (Demo)"
            link="https://facebook-clone-v1.web.app/"
          />
          <PortfolioItem
            image="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Scresfsfenshot.png?alt=media&token=5aceb7a6-5b07-415b-be9d-be4940a6e295"
            title="✅Instagram UI Clone (Demo)"
            link="https://instagram-react-firebase-a25ec.web.app/"
          />
          <PortfolioItem
            image="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Firefox_Screenshot_2020-11-13T13-49-03.911Z.png?alt=media&token=87ce1ba9-6fe5-4a52-9f73-c1ace7a1e0d9"
            title="✅Twitter UI Clone (Demo)"
            link="https://twitter-react-firebase-c8ca2.web.app/"
          />
          <PortfolioItem
            image="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/fsgzsyhryeybr6ty5rty.png?alt=media&token=12a278aa-f5ed-4694-a91c-937dc479a098"
            title="✅Messenger UI Clone (Demo)"
            link="https://fbmessenger-react-firebase.web.app/"
          />
          <PortfolioItem
            image="https://firebasestorage.googleapis.com/v0/b/react-portfolio-92c60.appspot.com/o/Firefox_Screenshot_2020-11-13T14-12-53.568Z.png?alt=media&token=f66a2fae-4daa-416c-8474-d5c1166c4205"
            title="✅ToDo List Clone (Demo)"
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

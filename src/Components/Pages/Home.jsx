import Banner from "../UI Components/Banner";
import Nav from "../UI Components/Nav";
import Card from "../UI Components/Card";
import { useState } from "react";
import { Link } from "react-router-dom";
import shareFeatured from "../../data/homeData";
import Footer from "../UI Components/Footer";

export default function Home() {
  const [currentPage] = useState("home");
  const homeData = shareFeatured().slice(0, 6);
  return (
    <>
      <Nav currentPage={currentPage}></Nav>
      <main className="content">
        <div className="home" style={{ width: "100%" }}>
          <Banner>
            <div className="banner-desc">
              <h1 className="text-thin">
                <strong>See</strong>&nbsp;everything with&nbsp;
                <strong>Clarity</strong>
              </h1>
              <p>
                Buying eyewear should leave you happy and good-looking, with
                money in your pocket. Glasses, sunglasses, and contacts—we’ve
                got your eyes covered.
              </p>
              <br />
              <Link className="button" to={"/shop"}>
                Shop Now &nbsp;
                <span className="anticon anticon-arrow-right">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="arrow-right"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
                  </svg>
                </span>
              </Link>
            </div>
            <div className="banner-img">
              <img
                src="/images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png"
                alt="a girl"
              />
            </div>
          </Banner>
          <div className="display">
            <div className="display-header">
              <h1>Featured Products</h1>
              <Link to={"/featured"}>See All</Link>
            </div>
            <div className="product-display-grid">
              {homeData.map((item, index) => {
                return <Card key={index} item={item} />;
              })}
            </div>
          </div>
          <div className="display">
            <div className="display-header">
              <h1>Recommended Products</h1>
              <Link to={"/recommended"}>See All</Link>
            </div>
            <div className="product-display-grid">
              {homeData.map((item, index) => {
                return <Card key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

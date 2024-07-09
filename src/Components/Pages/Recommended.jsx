import Banner from "../UI Components/Banner";
import Nav from "../UI Components/Nav";
import shareFeatured from "../../data/homeData";
import Card from "../UI Components/Card";
import { useState } from "react";

export default function Recommended() {
  const [currentPage] = useState("recommended");
  const homeData = shareFeatured().slice(0, 6);
  return (
    <>
      <Nav currentPage={currentPage}></Nav>
      <main className="content">
        <div className="recommended" style={{ width: "100%" }}>
          <Banner>
            <div className="banner-desc">
              <h1>Recommended Products</h1>
            </div>
            <div className="banner-img">
              <img
                src="/images/banner-girl-1.24e9b8f48d5a0ac32680edd194503695.png"
                alt="a girl"
              />
            </div>
          </Banner>
          <div className="display">
            <div className="product-display-grid">
              {homeData.map((item, index) => {
                return <Card key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

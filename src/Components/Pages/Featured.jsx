import Banner from "../UI Components/Banner";
import Nav from "../UI Components/Nav";
import Card from "../UI Components/Card";
import { useState } from "react";
import shareFeatured from "../../data/homeData";

export default function Featured() {
  const [currentPage] = useState("featured");
  const homeData = shareFeatured();
  return (
    <>
      <Nav currentPage={currentPage}></Nav>
      <main className="content">
        <div className="featured" style={{ width: "100%" }}>
          <Banner>
            <div className="banner-desc">
              <h1>Featured Products</h1>
            </div>
            <div className="banner-img">
              <img
                src="/images/banner-guy.fbf4f0f7396fe31ca288dc1dd9822342.png"
                alt="a guy"
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

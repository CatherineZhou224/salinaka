import { useState } from "react";
import Nav from "../UI Components/Nav";
import allDatas from "../../data/data_origin";
import SmallCard from "../UI Components/SmallCard";

export default function Shop() {
  const [currentPage, setCurrentPage] = useState("shop");
  const [showAll, setShowAll] = useState(false);
  const datas = allDatas();
  const itemsToShow = showAll ? datas : datas.slice(0, 12);

  const handleClick = () => {
    setShowAll(true);
  };
  return (
    <>
      <Nav currentPage={currentPage}></Nav>
      <main className="content">
        <section className="product-list-wrapper">
          <div className="product-grid">
            {itemsToShow.map((item, index) => {
              return <SmallCard key={index} item={item} />;
            })}
          </div>
          {!showAll && (
            <div className="d-flex-center padding-l">
              <button
                className="button button-small"
                type="button"
                onClick={handleClick}
              >
                Show More Items
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
}

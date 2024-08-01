import { useState } from "react";
import { useSelector } from "react-redux";
import Nav from "../UI Components/Nav";
import SmallCard from "../UI Components/SmallCard";

export default function Shop() {
  const [currentPage] = useState("shop");
  const [showAll, setShowAll] = useState(false);
  const filteredItems = useSelector((state) => state.filter.filterItems);
  const itemsToShow = showAll ? filteredItems : filteredItems.slice(0, 12);

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

import Nav from "../UI Components/Nav";
import { useParams } from "react-router-dom";
import allDatas from "../../data/data_origin";
import SmallCard from "../UI Components/SmallCard";

export default function SearchDetail() {
  const params = useParams();
  const allProducts = allDatas();

  // Find the product based on the provided name
  const product = allProducts.find(
    (product) =>
      product.name.trim().toLowerCase() ===
      params.ProductParam.trim().toLowerCase()
  );

  // Check if product is found
  return (
    <>
      <Nav />
      <main className="content">
        {product ? (
          <SmallCard item={product} />
        ) : (
          <div className="loader">
            <h2 className="text-center">No product found.</h2> <br />
          </div>
        )}
      </main>
    </>
  );
}

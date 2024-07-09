import { Link } from "react-router-dom";

export default function Card({ item }) {
  const { name, brand, img, parameter } = item;
  return (
    <Link to={`/product/${parameter}`}>
      <div className="product-display">
        <div className="product-display-img">
          <img alt="" className="product-card-img is-img-loaded" src={img} />
        </div>
        <div className="product-display-details">
          <h2>{name}</h2>
          <p className="text-subtle text-italic">{brand}</p>
        </div>
      </div>
    </Link>
  );
}

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cartActions from "../Pages/Cart/action";

export default function SmallCard({ item }) {
  const { name, brand, img, price, size, color, parameter } = item;
  const cartItems = useSelector((state) => state.root.cartItems);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    // Check if the item is in the cart to set the clicked state
    const isItemInCart = cartItems.some(
      (cartItem) => cartItem.parameter === parameter
    );
    setClicked(isItemInCart);
  }, [cartItems, parameter]);

  const handleAddClick = (e) => {
    e.preventDefault();
    dispatch(cartActions.addToCart(parameter, size[0] + " mm", color[0]));
  };

  const handleRemoveClick = (e) => {
    e.preventDefault();
    dispatch(cartActions.removeFromCart(parameter));
  };

  return (
    <Link to={`/product/${parameter}`}>
      <div
        className="product-card"
        style={
          clicked
            ? {
                boxShadow: "rgba(0, 0, 0, 0.07) 0px 10px 15px",
                border: "1px solid rgb(166, 165, 165)",
              }
            : {}
        }
      >
        {clicked && (
          <span
            role="img"
            aria-label="check"
            className="anticon anticon-check fa fa-check product-card-check"
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              data-icon="check"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
            </svg>
          </span>
        )}
        <div className="product-card-content">
          <div className="product-card-img-wrapper">
            <img
              className="product-card-img is-img-loaded"
              src={img}
              alt={name}
            />
          </div>
          <div className="product-details">
            <h5 className="product-card-name text-overflow-ellipsis margin-auto">
              {name}
            </h5>
            <p className="product-card-brand">{brand}</p>
            <h4 className="product-card-price">${price}.00</h4>
          </div>
        </div>
        {clicked === false ? (
          <button
            className="product-card-button button-small button button-block"
            type="button"
            onClick={handleAddClick}
          >
            Add to basket
          </button>
        ) : (
          <button
            className="product-card-button button-small button button-block"
            type="button"
            onClick={handleRemoveClick}
          >
            Remove from basket
          </button>
        )}
      </div>
    </Link>
  );
}

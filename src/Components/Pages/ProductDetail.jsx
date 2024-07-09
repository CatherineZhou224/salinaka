import Nav from "../UI Components/Nav";
import Card from "../UI Components/Card";
import { Link, useParams } from "react-router-dom";
import { getData } from "../../data/data_origin";
import shareFeatured from "../../data/homeData";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cartActions from "../Pages/Cart/action";

export default function ProductDetail() {
  const params = useParams();
  const productId = params.ProductID;
  const productInfo = getData(productId);
  const recommendedData = shareFeatured().slice(0, 6);
  const [activeColorIndex, setActiveColorIndex] = useState(null);
  const [overlayColor, setOverlayColor] = useState("#ffffff");
  const [selectedSize, setSelectedSize] = useState("");
  const [clicked, setClicked] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  useEffect(() => {
    // Check if the item is in the cart to set the clicked state
    const isItemInCart = cartItems.some(
      (cartItem) => cartItem.parameter === productId
    );
    setClicked(isItemInCart);
  }, [
    cartItems,
    productId,
    activeColorIndex,
    selectedSize,
    productInfo.color,
    productInfo.size,
  ]);

  const handleColorClick = (index, color) => {
    setActiveColorIndex(index);
    setOverlayColor(color);
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddClick = () => {
    const color =
      activeColorIndex === null
        ? productInfo.color[0]
        : productInfo.color[activeColorIndex];
    const size = selectedSize === "" ? productInfo.size[0] : selectedSize;
    dispatch(cartActions.addToCart(productId, size, color));
  };

  const handleRemoveClick = () => {
    dispatch(cartActions.removeFromCart(productId));
  };

  return (
    <>
      <Nav></Nav>
      <main className="content">
        <div className="product-view">
          <a href="/shop">
            <h3 className="button-link d-inline-flex">
              <span
                aria-label="arrow-left"
                className="anticon anticon-arrow-left"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="arrow-left"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                </svg>
              </span>
              &nbsp; Back to shop
            </h3>
          </a>
          <div className="product-modal">
            <div className="product-modal-image-collection">
              <div className="product-modal-image-collection-wrapper">
                <img
                  className="product-modal-image-collection-img is-img-loaded"
                  alt={productInfo.name}
                  src={productInfo.img}
                />
              </div>
            </div>
            <div className="product-modal-image-wrapper">
              <div
                className="color-overlay"
                style={{ backgroundColor: overlayColor }}
              ></div>
              <img
                alt={productInfo.name}
                className="product-modal-image is-img-loaded"
                src={productInfo.img}
              />
            </div>
            <div className="product-modal-details">
              <br />
              <span className="text-subtle">{productInfo.brand}</span>
              <h1 className="margin-top-0">{productInfo.name}</h1>
              <span>{productInfo.desc}</span>
              <br />
              <br />
              <div className="divider"></div>
              <br />
              <div>
                <span className="text-subtle">Lens Width and Frame Size</span>
                <br />
                <br />
                <select
                  defaultValue=""
                  className="dropdown-box"
                  onChange={handleSizeChange}
                >
                  <option value="">--Select Size--</option>
                  {productInfo.size.map((item, index) => {
                    return <option key={index}>{item} mm</option>;
                  })}
                </select>
              </div>
              <br />
              <div>
                <span className="text-subtle">Choose Color</span>
                <br />
                <br />
                <div className="color-chooser">
                  {productInfo.color.map((item, index) => {
                    const isActive = index === activeColorIndex;
                    return (
                      <div
                        key={index}
                        className={`color-item ${
                          isActive ? "color-item-selected" : ""
                        }`}
                        style={{ backgroundColor: item }}
                        onClick={() => handleColorClick(index, item)}
                      ></div>
                    );
                  })}
                </div>
              </div>
              <h1>${productInfo.price}.00</h1>
              <div className="product-modal-action">
                {clicked === false ? (
                  <button
                    className="button button-small"
                    type="button"
                    onClick={handleAddClick}
                  >
                    Add To Basket
                  </button>
                ) : (
                  <button
                    className="button button-small"
                    type="button"
                    onClick={handleRemoveClick}
                  >
                    Remove From Basket
                  </button>
                )}
              </div>
            </div>
          </div>
          <div style={{ marginTop: "10rem" }}>
            <div className="display-header">
              <h1>Recommended</h1>
              <Link href="/recommended">See All</Link>
            </div>
            <div className="product-display-grid">
              {recommendedData.map((item, index) => {
                return <Card key={index} item={item} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

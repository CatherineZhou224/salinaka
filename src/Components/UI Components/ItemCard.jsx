import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import cartActions from "../Pages/Cart/action";
export default function ItemCard({ item }) {
  const { name, img, price, size, color, parameter, quantity } = item;
  const dispatch = useDispatch();

  const handleAdd = (parameter) => {
    dispatch(cartActions.increaseQuant(parameter));
  };
  const handleReduce = (parameter) => {
    dispatch(cartActions.decreaseQuant(parameter));
  };
  const handleRemove = (parameter) => {
    dispatch(cartActions.removeFromCart(parameter));
  };
  return (
    <div class="basket-item">
      <div class="basket-item-control">
        <button
          class="button button-border button-border-gray button-small basket-control basket-control-add"
          type="button"
          onClick={() => handleAdd(parameter)}
        >
          <span
            role="img"
            aria-label="plus"
            class="anticon anticon-plus"
            style={{ fontSize: "9px" }}
          >
            <AddIcon />
          </span>
        </button>
        <button
          class="button button-border button-border-gray button-small basket-control basket-control-minus"
          disabled={quantity === 1 ? true : false}
          type="button"
        >
          <span
            role="img"
            aria-label="minus"
            class="anticon anticon-minus"
            style={{ fontSize: "9px" }}
            onClick={() => handleReduce(parameter)}
          >
            <RemoveIcon />
          </span>
        </button>
      </div>
      <div class="basket-item-wrapper">
        <div class="basket-item-img-wrapper">
          <img alt={name} class="basket-item-img is-img-loaded" src={img} />
        </div>
        <div class="basket-item-details">
          <a href="/product/c0cvo2QXFMX1wO7EpvQC">
            <h4 class="underline basket-item-name">{name}</h4>
          </a>
          <div class="basket-item-specs">
            <div>
              <span class="spec-title">Quantity</span>
              <h5 class="my-0">{quantity}</h5>
            </div>
            <div>
              <span class="spec-title">Size</span>
              <h5 class="my-0">{size}</h5>
            </div>
            <div>
              <span class="spec-title">Color</span>
              <div
                style={{
                  backgroundColor: color,
                  width: "15px",
                  height: "15px",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div class="basket-item-price">
          <h4 class="my-0">${price * quantity}.00</h4>
        </div>
        <button
          class="basket-item-remove button button-border button-border-gray button-small"
          type="button"
          onClick={() => handleRemove(parameter)}
        >
          <span role="img" aria-label="close" class="anticon anticon-close">
            <CloseIcon />
          </span>
        </button>
      </div>
    </div>
  );
}

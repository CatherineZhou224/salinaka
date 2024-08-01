import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { useSelector, useDispatch } from "react-redux";
import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import ItemCard from "./ItemCard";
import cartActions from "../Pages/Cart/action";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

export default function Nav({ currentPage }) {
  const product = useSelector((state) => state.root.cartItems);
  const pluralize = require("pluralize");
  const items = product.length;
  const [state, setState] = React.useState({
    right: false,
  });
  const dispatch = useDispatch();
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 0,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleClear = () => {
    dispatch(cartActions.clearAllItem());
  };
  const list = (anchor) => (
    <div className="basket-list">
      <div className="basket-header">
        <h3 className="basket-header-title">
          My Basket &nbsp;
          <span>
            {"( "}
            {items === 0 ? "0 item" : pluralize("item", items, true)}
            {" )"}
          </span>
        </h3>
        <button
          className="basket-toggle button button-border button-border-gray button-small"
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
        >
          <span>Close</span>
        </button>
        <button
          className="basket-clear button button-border button-border-gray button-small"
          type="button"
          onClick={handleClear}
        >
          <span>Clear Basket</span>
        </button>
      </div>
      {product.map((item, index) => {
        return <ItemCard key={index} item={item} />;
      })}
    </div>
  );
  return (
    <nav className="navigation">
      <div className="logo">
        <Link to={"/"}>
          <img
            alt="Logo"
            src="/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png"
          />
        </Link>
      </div>
      <ul className="navigation-menu-main">
        {currentPage === "home" ? (
          <li>
            <Link to={"/"} className="navigation-menu-active">
              Home
            </Link>
          </li>
        ) : (
          <li>
            <Link to={"/"}>Home</Link>
          </li>
        )}

        {currentPage === "shop" ? (
          <li>
            <Link to={"/shop"} className="navigation-menu-active">
              Shop
            </Link>
          </li>
        ) : (
          <li>
            <Link to={"/shop"}>Shop</Link>
          </li>
        )}
        {currentPage === "featured" ? (
          <li>
            <Link to={"/featured"} className="navigation-menu-active">
              Featured
            </Link>
          </li>
        ) : (
          <li>
            <Link to={"/featured"}>Featured</Link>
          </li>
        )}
        {currentPage === "recommended" ? (
          <li>
            <Link to={"/recommended"} className="navigation-menu-active">
              Recommended
            </Link>
          </li>
        ) : (
          <li>
            <Link to={"/recommended"}>Recommended</Link>
          </li>
        )}
      </ul>
      {currentPage === "shop" ? (
        <div className="filters-toggle">
          <Filter></Filter>
        </div>
      ) : (
        <></>
      )}
      <SearchBar />
      <ul className="navigation-menu">
        <li className="navigation-menu-item">
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                aria-label="cart"
                onClick={toggleDrawer(anchor, true)}
              >
                <div className="badge">
                  <StyledBadge badgeContent={items} color="secondary">
                    <ShoppingBagOutlinedIcon
                      className="anticon anticon-shopping"
                      style={{ fontSize: "2.4rem" }}
                    />
                  </StyledBadge>
                </div>
              </IconButton>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </li>
        <li className="navigation-action">
          {currentPage === "signup" ? (
            ""
          ) : (
            <Link className="button button-small" to={"/signup"}>
              Sign Up
            </Link>
          )}
          {currentPage === "signin" ? (
            ""
          ) : (
            <Link
              className="button button-small button-muted margin-left-s"
              to={"/signin"}
            >
              Sign In
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}

import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import cartActions from "../Pages/Cart/action";
import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [filters, setFilters] = useState({
    value: [0, 700],
    brand: "empty",
    sortBy: "empty",
  });

  const handleChange = (event, newValue) => {
    setFilters({ ...filters, value: newValue });
  };

  const valuetext = (value) => {
    return `${value}°C`;
  };

  let dispatch = useDispatch();

  const handleApply = () => {
    dispatch(cartActions.applyFilter(filters));
    handleClose();
  };

  const handleReset = () => {
    dispatch(cartActions.resetFilter());
    setFilters({
      value: [0, 700],
      brand: "empty",
      sortBy: "empty",
    });
    handleClose();
  };

  return (
    <>
      <button
        className="button-muted button-small filter"
        type="button"
        onClick={handleOpen}
      >
        Filters &nbsp;
        <span aria-label="filter" className="anticon anticon-filter">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="filter"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"></path>
          </svg>
        </span>
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ backgroundColor: open ? "rgba(255, 255, 255, 0.75)" : "" }}
      >
        <div className="dialog">
          <div className="filterTop">
            <div>
              <h5>Brand</h5>
              <select
                className="select"
                name="brand"
                id="brand"
                onChange={(e) =>
                  setFilters({ ...filters, brand: e.target.value })
                }
              >
                <option value="empty">All Brands</option>
                <option value="Black Kibal">Black Kibal</option>
                <option value="Salt Maalat">Salt Maalat</option>
                <option value="Sexbomb">Sexbomb</option>
                <option value="Betsin Maalat">Betsin Maalat</option>
              </select>
            </div>
            <div>
              <h5>Sort By</h5>
              <select
                className="select"
                name="brand"
                id="brand"
                onChange={(e) =>
                  setFilters({ ...filters, sortBy: e.target.value })
                }
              >
                <option value="empty">None</option>
                <option value="az">Name Ascending A - Z</option>
                <option value="za">Name Descending Z - A</option>
                <option value="hl">Price High - Low</option>
                <option value="lh">Price Low - High</option>
              </select>
            </div>
          </div>
          <hr />
          <h5>Price Range</h5>
          <div className="priceRange">
            <h2>{filters.value.at(0)}</h2>
            <h2>{"-"}</h2>
            <h2>{filters.value.at(1)}</h2>
          </div>
          <Box>
            <Slider
              getAriaLabel={() => "Range"}
              value={filters.value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              color="secondary"
              getAriaValueText={valuetext}
              max="700"
            />
          </Box>
          <div className="ruler">
            <h6>0</h6>
            <h6>100</h6>
            <h6>200</h6>
            <h6>300</h6>
            <h6>400</h6>
            <h6>500</h6>
            <h6>600</h6>
            <h6>700</h6>
          </div>
          <hr />
          <div className="filterBottom">
            <button className="apply" onClick={handleApply}>
              Apply filters
            </button>
            <button className="reset" onClick={handleReset}>
              Reset filters
            </button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

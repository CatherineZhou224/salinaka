import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Shop from "./Components/Pages/Shop";
import Recommended from "./Components/Pages/Recommended";
import Featured from "./Components/Pages/Featured";
import Product from "./Components/Pages/Product";
import NotFound from "./Components/Pages/NotFound";
import ProductDetail from "./Components/Pages/ProductDetail";
import Signup from "./Components/Pages/Signup";
import Signin from "./Components/Pages/Signin";
import { Provider } from "react-redux";
import store from "./Components/Pages/Cart/store";
import Search from "./Components/Pages/Search";
import SearchDetail from "./Components/Pages/SearchDetail";
import PageNotFound from "./Components/Pages/PageNotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<App></App>}>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/shop" element={<Shop></Shop>}></Route>
            <Route
              path="/recommended"
              element={<Recommended></Recommended>}
            ></Route>
            <Route path="/featured" element={<Featured></Featured>}></Route>
            <Route path="/search" element={<Search />}>
              <Route path=":ProductParam" element={<SearchDetail />} />
              <Route path="" element={<PageNotFound />} />
            </Route>
            <Route path="/product" element={<Product></Product>}>
              <Route
                path=":ProductID"
                element={<ProductDetail></ProductDetail>}
              ></Route>
            </Route>
            <Route path="/signup" element={<Signup></Signup>}></Route>
            <Route path="/signin" element={<Signin></Signin>}></Route>
          </Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

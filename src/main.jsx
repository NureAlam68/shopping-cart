import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home/Home.jsx";
import AllProduct from "./pages/AllProduct.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import CartPage from "./pages/CartPage.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<AllProduct />} />
          <Route path="/addProducts" element={<AddProduct />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

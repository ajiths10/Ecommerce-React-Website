import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import CartProvider from "./Store/CartProvider";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartProvider>
);

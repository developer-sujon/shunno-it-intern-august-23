import React from "react";
import ReactDOM from "react-dom/client";
import "./style/bootstrap.min.css";
import "./style/animate.css";
import "./style/font-awesome.min.css";
import "./style/magnific-popup.css";
import "./style/materialdesignicons-min.css";
import "./style/owl.carousel.css";
import "./style/owl.theme.css";
import "./style/slicknav.css";
import "./style/themify-icons.css";
import "./style/animate.css";

// custom style
import "./style/App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./style/animate.css";
import "./style/bootstrap.min.css";
import "./style/font-awesome.min.css";
import "./style/magnific-popup.css";
import "./style/materialdesignicons-min.css";
import "./style/owl.carousel.css";
import "./style/owl.theme.css";
import "./style/slicknav.css";
import "./style/themify-icons.css";

// custom style
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./redux/store";
import router from "./routes/router";
import "./style/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
    ,
  </React.StrictMode>
);

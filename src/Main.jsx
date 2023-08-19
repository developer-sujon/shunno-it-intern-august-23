//External Lib Import
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

//Internal Lib Import
// import ApiScreenLoader from "./common/ApiScreenLoader";
import "./index.css";
import store from "./redux";
import router from "./routes/router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
    {/* <ApiScreenLoader /> */}
  </React.StrictMode>
);

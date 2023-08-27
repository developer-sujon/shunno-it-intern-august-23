import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";

// bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import FormData from "./context/FormData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FormData>
      <RouterProvider router={router}></RouterProvider>
    </FormData>
  </React.StrictMode>
);

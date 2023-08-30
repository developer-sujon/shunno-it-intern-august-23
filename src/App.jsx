import {} from "react";
import {RouterProvider} from "react-router-dom";
import {route} from "./Route/Route";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import store from "./App/Store";

function App() {
  return (
    <div className="">
      <Provider store={store}>
        <RouterProvider router={route} />
      </Provider>
    </div>
  );
}

export default App;

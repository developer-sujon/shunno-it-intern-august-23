import {} from "react";
import {RouterProvider} from "react-router-dom";
import {route} from "./Route/Route";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;

import {} from "react";
import {RouterProvider} from "react-router-dom";
import {route} from "./Route/Route";

function App() {
  return (
    <div className="">
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;

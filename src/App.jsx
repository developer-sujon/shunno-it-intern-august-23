import {} from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./Route/Route";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
=======
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 3f9b8b9e0c534872a43e546aad431b27faf63d4d

function App() {
  return (
    <div className="">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;

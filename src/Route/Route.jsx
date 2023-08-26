import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";

export const route  = createBrowserRouter([


    {
        path : '/',
        element: <Main/>,
        children: [
            
        ]
    }
])
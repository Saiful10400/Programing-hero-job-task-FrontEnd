import { createBrowserRouter } from "react-router-dom";
import Registration from "./Login & Registration/Registration";
import Login from "./Login & Registration/login";
import Root from "./Root";
import Home from "./Home/Home";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/registration",
                element:<Registration></Registration>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    },
    
])
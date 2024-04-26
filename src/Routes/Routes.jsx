import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import AddTouristSpot from "../Pages/AddTouristSpot";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:"/login",
          element:<LogIn></LogIn>
        },
        {
          path:"/addtouristspot",
          element:<AddTouristSpot></AddTouristSpot>
        }
      ]
    },
  ]);

  export default router;
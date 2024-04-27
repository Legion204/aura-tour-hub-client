import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import AddTouristSpot from "../Pages/AddTouristSpot";
import AllTouristSpots from "../Pages/AllTouristSpots";

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
          path:"/add_tourist_spot",
          element:<AddTouristSpot></AddTouristSpot>
        },
        {
          path:"/all_tourist_spots",
          element:<AllTouristSpots></AllTouristSpots>,
          loader:()=>fetch("http://localhost:5000/tourist_spots")
        }
      ]
    },
  ]);

  export default router;
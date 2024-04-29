import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import LogIn from "../Pages/LogIn";
import AddTouristSpot from "../Pages/AddTouristSpot";
import AllTouristSpots from "../Pages/AllTouristSpots";
import PrivetRoute from "./PrivetRoute";
import TouristSpotDetails from "../Pages/TouristSpotDetails";
import MyList from "../Pages/MyList";
import UpdateTouristSpot from "../Pages/UpdateTouristSpot";
import CountryTouristSpots from "../Pages/CountryTouristSpots";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://aura-tour-hub-server.vercel.app/tourist_spots"),
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/add_tourist_spot",
        element: <PrivetRoute><AddTouristSpot></AddTouristSpot></PrivetRoute>
      },
      {
        path: "/all_tourist_spots",
        element: <AllTouristSpots></AllTouristSpots>,
        loader: () => fetch("https://aura-tour-hub-server.vercel.app/tourist_spots")
      },
      {
        path: "/tourist_spot_details/:id",
        element: <PrivetRoute><TouristSpotDetails></TouristSpotDetails></PrivetRoute>,
        loader: ({ params }) => fetch(`https://aura-tour-hub-server.vercel.app/tourist_spots/${params.id}`)
      },
      {
        path: "/my_list",
        element: <PrivetRoute><MyList></MyList></PrivetRoute>
      },
      {
        path: "/update_tourist_spot/:id",
        element: <PrivetRoute><UpdateTouristSpot></UpdateTouristSpot></PrivetRoute>,
        loader: ({ params }) => fetch(`https://aura-tour-hub-server.vercel.app/tourist_spots/${params.id}`)
      },
      {
        path: "/country_tourist_spots/:id",
        element: <CountryTouristSpots></CountryTouristSpots>,
        loader: ({ params }) => fetch(`https://aura-tour-hub-server.vercel.app/countries/${params.id}`)
      }
    ]
  },
]);

export default router;
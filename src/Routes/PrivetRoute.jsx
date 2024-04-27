import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import LoadingSpinner from "../Components/LoadingSpinner";
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location =useLocation();
    console.log(location);
    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

PrivetRoute.propTypes = {
    children: PropTypes.node
}
export default PrivetRoute;
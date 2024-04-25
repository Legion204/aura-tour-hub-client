import { createContext } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    // user registration with email and pass
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const data = { userRegister }
    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;
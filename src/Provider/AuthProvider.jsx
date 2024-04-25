import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user,setUser]=useState(null);

    // user registration with email and pass
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
        });
        return ()=>unSubscribe();
    },[]);

    const data = {user, userRegister }
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
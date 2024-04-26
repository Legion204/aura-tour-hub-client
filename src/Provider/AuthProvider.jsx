import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider, } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // user registration with email and pass
    const userRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // log in with email and pass
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // log in with twitter
    const twitterProvider = new TwitterAuthProvider()
    const userLoginTwitter = () => {
        return signInWithPopup(auth, twitterProvider);
    }

    // log in with google
    const googleProvider = new GoogleAuthProvider();
    const userLoginGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    
    // log out 
    const userLogout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => unSubscribe();
    }, []);

    const data = { user, auth, userRegister, userLogin, userLoginGoogle, userLoginTwitter, userLogout }
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
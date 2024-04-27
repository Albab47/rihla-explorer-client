import PropTypes from "prop-types"; 
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext } from "react";

// Firebase Auth
const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    

    const authInfo = {msg: 'Auth info coming..'}
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
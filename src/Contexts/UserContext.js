import React from "react";
import { createContext } from "react";
const AuthContext = createContext();
const UserContext = ({ children }) => {
    const authInfo = {};
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;

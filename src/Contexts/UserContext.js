import React from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext } from "react";
import app from "../Firebase/Firebase.config";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: "akuus" });
    // CREATE-USER
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // SIGNIN
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    // Google Signin
    const googleSignin = () => {
        return signInWithPopup(auth, provider);
    };
    const authInfo = { user, createUser, signIn, googleSignin };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;
